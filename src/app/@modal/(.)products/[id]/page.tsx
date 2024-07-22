
export default function ProductModal({
  params: { id: productId },
}: {
  params: { id: string };
}) {
  return <div>{productId}</div>;
}