import Product from "@/components/Product";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string[];
}

const products: IProduct[] = [
  {
    id: 1,
    title: "Iphone 13 256gb",
    price: 5000,
    description: [
      "Modo Cine con baja profundidad de campo y cambios de enfoque automáticos en tus videos.",
      "Sistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular) con Estilos Fotográficos, HDR Inteligente 4, modo Noche y grabación de video 4K HDR en Dolby Vision.",
    ],
  },
  {
    id: 2,
    title: "Samsung Galaxy S21 Ultra",
    price: 4500,
    description: [
      "Pantalla Dynamic AMOLED 2X de 6.8 pulgadas.",
      "Cámara de 108 MP con grabación de video en 8K.",
      "Batería de 5000 mAh con carga rápida.",
    ],
  },
  {
    id: 3,
    title: "MacBook Pro M1 13 pulgadas",
    price: 10000,
    description: [
      "Chip M1 diseñado por Apple para un rendimiento espectacular.",
      "Hasta 20 horas de batería, la mejor en una Mac.",
      "Pantalla Retina de 13.3 pulgadas con colores vibrantes.",
    ],
  },
  {
    id: 4,
    title: "Sony PlayStation 5",
    price: 3000,
    description: [
      "SSD ultrarrápido para reducir los tiempos de carga.",
      "Gráficos de 8K y ray tracing para un realismo impresionante.",
      "Mando inalámbrico DualSense con retroalimentación háptica.",
    ],
  },
];

const MarketPage = () => {
  return (
    <section className="container mx-auto py-8">
      <h1 className="text-center font-bold text-3xl mb-8">TIENDA</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default MarketPage;
