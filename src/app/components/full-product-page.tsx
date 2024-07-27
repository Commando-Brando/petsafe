import { getProduct } from "~/server/queries";

export default async function FullPageProductView(props: {productId: number}) {
  const product = await getProduct(props.productId);
  return <img src={product.url} className="w-96" />
}