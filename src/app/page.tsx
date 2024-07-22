import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyProducts } from "~/server/queries";

export const dynamic = "force-dynamic"

export default async function HomePage() {

  const products = await getMyProducts();

  function Products() {
    return (
      /* flex wrap means it wont stop with one row and will make multiple rows*/
      /* Gap adds spacing between images  */
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex w-48 h-48 flex-col">
            <Image
            src={product.url}
            alt="image" style={{objectFit: "contain"}}
            width={480}
            height={480}
            />
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
