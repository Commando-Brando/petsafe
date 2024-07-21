import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
import { getMyProducts } from "~/server/queries";

export const dynamic = "force-dynamic"

export default async function HomePage() {

  const products = await getMyProducts();

  function Products() {
    return (
      /* flex wrap means it wont stop with one row and will make multiple rows*/
      /* Gap adds spacing between images  */
      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex w-48 flex-col">
            <img src={product.url} alt="image" />
            <div>{product.name}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Products />
      </SignedIn>
    </main>
  );
}
