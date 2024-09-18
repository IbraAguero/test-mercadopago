import { MercadoPagoConfig, Payment } from "mercadopago";
import { NextRequest } from "next/server";

const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(request: NextRequest) {
  const body = await request.json().then((data) => data);

  if (body?.type === "payment") {
    console.log("body:", body);
    const payment = await new Payment(mercadopago).get({ id: body.data.id });
    console.log("payment:", payment);
  }

  return Response.json({ success: true });
}
