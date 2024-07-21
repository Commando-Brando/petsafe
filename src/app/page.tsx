import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

export default async function HomePage() {

  const products = await db.query.products.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      {/* flex wrap means it wont stop with one row and will make multiple rows*/}
      {/* Gap adds spacing between images  */}
      <div className="flex flex-wrap gap-4">
        {[...products, ...products, ...products].map((product, index) => (
          <div key={product.id + "-" + index} className="flex w-48 flex-col">
            <img src={product.url} alt="image" />
            <div>{product.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
