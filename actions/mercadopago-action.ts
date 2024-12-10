"use server";

import MercadoPagoConfig, { Preference } from "mercadopago";
import { redirect } from "next/navigation";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
  options: {
    integratorId: "dev_24c65fb163bf11ea96500242ac130004",
  },
});

export const donation = async (formData: FormData) => {
  const preference = await new Preference(client).create({
    body: {
      notification_url:
        "https://test-mercadopago-prueba.vercel.app/api/payment",
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
      back_urls: {
        success:
          "https://d42e-2803-9800-9085-88ba-e892-2e8-8ecd-4cc2.ngrok-free.app/success",
        failure:
          "https://d42e-2803-9800-9085-88ba-e892-2e8-8ecd-4cc2.ngrok-free.app/failure",
        pending:
          "https://d42e-2803-9800-9085-88ba-e892-2e8-8ecd-4cc2.ngrok-free.app/pending",
      },
      notification_url:
        "https://d42e-2803-9800-9085-88ba-e892-2e8-8ecd-4cc2.ngrok-free.app/api/payment",
      payment_methods: {
        excluded_payment_types: [{ id: "visa" }],
        installments: 6,
      },
      external_reference: "ibrahimaguero@gmail.com",
      items: [
        {
          id: "1234",
          title: product.title,
          description: "Dispositivo de tienda móvil de comercio electrónico",
          picture_url:
            "https://i.blogs.es/187a45/iphone-11-pro-02/450_1000.jpg",
          unit_price: 5000,
          quantity: 1,
        },
      ],
    },
  });

  return { url: preference.init_point };
};
