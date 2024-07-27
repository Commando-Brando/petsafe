import { getProduct } from "~/server/queries";
import { Modal } from "./modal";
import FullPageProductView from "~/app/components/full-product-page";

export default async function ProductModal({
  params: { id: productId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(productId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid product id");

  return (
    <Modal>
      <FullPageProductView productId={idAsNumber} />
    </Modal>
  );
}