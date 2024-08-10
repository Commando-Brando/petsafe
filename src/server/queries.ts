import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { products } from "./db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getMyProducts() {
  const user = auth();

  // TODO: Fix this so that it does not just error out on homepage :(
  if (!user.userId) {
    return [];
    // throw new Error("Unauthorized");
  }

  const products = await db.query.products.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return products;
}

export async function getProduct(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  const product = await db.query.products.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!product) throw new Error("Product not found");

  return product;
}

export async function deleteImage(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(products)
    .where(and(eq(products.id, id), eq(products.userId, user.userId)));

  redirect("/");
}
