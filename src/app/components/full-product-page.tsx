import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getProduct } from "~/server/queries";
import { Button } from "src/components/ui/button";

export default async function FullPageProductView(props: {
  productId: number;
}) {
  const product = await getProduct(props.productId);
  const uploaderInfo = await clerkClient.users.getUser(product.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img src={product.url} className="flex-shrink object-contain" />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{product.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{new Date(product.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="p-2">
          <form
            action={async () => {
              "use server";

              await deleteImage(props.productId);
            }}
          >
            <Button type="submit" variant={"destructive"}>
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
