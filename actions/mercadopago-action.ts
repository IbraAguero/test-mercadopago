"use server";

import MercadoPagoConfig, { Preference } from "mercadopago";
import { redirect } from "next/navigation";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export const donation = async (formData: FormData) => {
  const preference = await new Preference(client).create({
    body: {
      notification_url:
        "https://5c03-2803-9800-9085-88ba-34ed-2cdb-a949-3af0.ngrok-free.app/api/payment",
      items: [
        {
          id: "donacion",
          title: formData.get("title") as string,
          quantity: 1,
          unit_price: Number(formData.get("amount")),
        },
      ],
    },
  });

  redirect(preference.init_point!);
};

export const paidProduct = async (product: {
  title: string;
  price: number;
}) => {
  const preference = await new Preference(client).create({
    body: {
      notification_url:
        "https://5c03-2803-9800-9085-88ba-34ed-2cdb-a949-3af0.ngrok-free.app/api/payment",
      items: [
        {
          id: "tienda",
          title: product.title,
          unit_price: product.price,
          quantity: 1,
        },
      ],
    },
  });

  return { url: preference.init_point };
};
