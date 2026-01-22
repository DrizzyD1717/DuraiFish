import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Live Catfish",
    description: "Healthy, fresh live catfish sourced directly from our ponds.",
    image: "/live-catfish.jpg",
    orderLink: "/order?product=Live Catfish",
  },
  {
    name: "Smoked Catfish",
    description: "Well smoked with rich flavor, perfect for soups and stews.",
    image: "/smoked-catfish.jpg",
    orderLink: "/order?product=Smoked Catfish",
  },
  {
    name: "Barbeque Catfish",
    description: "Grilled to perfection, juicy and delicious.",
    image: "/bbq-catfish.jpg",
    orderLink: "/order?product=Barbeque Catfish",
  },
];

export default function ProductsPage() {
  return (
    <section className="min-h-screen bg-durai-light py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-durai-dark text-center">
          Our Products
        </h1>
        <p className="mt-4 text-center text-durai-text max-w-2xl mx-auto">
          We offer fresh and quality catfish products, prepared to meet your
          needs.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold text-durai-dark">
                  {product.name}
                </h2>
                <p className="mt-3 text-durai-text">{product.description}</p>

                <Link
                  href={product.orderLink}
                  className="inline-block mt-6 px-6 py-3 bg-durai-dark text-white rounded-xl font-semibold"
                >
                  Order via WhatsApp
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
