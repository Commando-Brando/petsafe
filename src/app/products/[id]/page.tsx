import FullPageProductView from "~/app/components/full-product-page";

export default function ProductPage({
    params: { id: productId },
  }: {
    params: { id: string };
  }) {
    const idAsNumber = Number(productId);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid product id");

    return <FullPageProductView productId={idAsNumber} />;
  }