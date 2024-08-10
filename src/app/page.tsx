import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyProducts } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const products = await getMyProducts();

  function Products() {
    return (
      /* flex wrap means it wont stop with one row and will make multiple rows*/
      /* Gap adds spacing between images  */
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {products.map((product) => (
          <div key={product.id} className="flex h-60 w-48 flex-col">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.url}
                alt="image"
                style={{ objectFit: "contain" }}
                width={480}
                height={480}
              />
            </Link>
            <div>{product.name}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Products />
      </SignedIn>
    </main>
  );
}
