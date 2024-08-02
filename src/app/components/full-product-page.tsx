import { clerkClient } from "@clerk/nextjs/server";
import { getProduct } from "~/server/queries";

export default async function FullPageProductView(props: {productId: number}) {
  const product = await getProduct(props.productId);
  const uploaderInfo = await clerkClient.users.getUser(product.userId);

  return (
    <div className="flex w-full h-full min-w-0">
        <div className="flex-shrink flex justify-center items-center">
            <img src={product.url} className="flex-shrink object-contain" />
        </div>

        <div className="flex w-48 flex-col flex-shrink-0 border-l">
            <div className="text-lg border-b text-center p-2">
                {product.name}
            </div>
            <div className="flex flex-col p-2">
                <span>Uploaded By:</span>
                <span>{uploaderInfo.fullName}</span>
            </div>
            <div className="flex flex-col p-2">
                <span>Created On:</span>
                <span>{new Date(product.createdAt).toLocaleDateString()}</span>
            </div>
        </div>
    </div>
    )
}