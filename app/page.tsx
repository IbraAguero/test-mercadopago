import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="grid place-items-center gap-6 mt-10">
      <h1 className="text-center font-bold text-2xl">TEST - MERCADO PAGO</h1>
      <div className="flex gap-2">
        <Link href="/donacion" className={buttonVariants()}>
          Donacion
        </Link>
        <Link href="/tienda" className={buttonVariants()}>
          Tienda
        </Link>
      </div>
    </section>
  );
}
