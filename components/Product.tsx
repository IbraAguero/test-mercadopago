import { IProduct } from "@/app/tienda/page";
import { buttonVariants } from "./ui/button";
import { paidProduct } from "@/actions/mercadopago-action";
import Link from "next/link";

const Product = async ({ product }: { product: IProduct }) => {
  const { url } = await paidProduct(product);

  return (
    <div className="border p-6 rounded-2xl flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-lg text-center">{product.title}</h3>
      </div>
      <span className="font-bold">${product.price}</span>
      <p className="mt-4 text-gray-300 flex-grow">{product.description[0]}</p>
      <Link href={url!} className={`w-full ${buttonVariants()}`}>
        Comprar
      </Link>
    </div>
  );
};
export default Product;
