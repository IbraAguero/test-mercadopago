import { donation } from "@/actions/mercadopago-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PageDonation = () => {
  return (
    <section>
      <h1 className="text-center font-bold text-2xl">DONACION</h1>
      <form action={donation} className="border rounded-lg p-6 w-96 grid gap-4">
        <Label>
          Mensaje
          <Input name="title" placeholder="ingrese un mensaje" />
        </Label>
        <Label>
          Valor
          <Input type="number" name="amount" placeholder="ingrese un monto" />
        </Label>
        <Button className="w-full">Pagar</Button>
      </form>
    </section>
  );
};
export default PageDonation;
