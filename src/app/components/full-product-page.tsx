import { getProduct } from "~/server/queries";

export default async function FullPageProductView(props: {productId: number}) {
  const product = await getProduct(props.productId);
  return (
    <div className="flex w-full h-full min-w-0">
        <div className="flex-shrink flex justify-center items-center">
            <img src={product.url} className="flex-shrink object-contain" />
        </div>

        <div className="flex w-48 flex-col flex-shrink-0 border-l">
            <div className="text-xl font-bold">
                {product.name}
            </div>
        </div>
    </div>
    )
}