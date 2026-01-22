import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Live Catfish",
    image: "/livefish1.jpeg",
    description:
      "Our live catfish are raised in clean water and delivered fresh to ensure maximum quality.",
    uses: [
      "Perfect for pepper soup",
      "Ideal for fresh cooking",
      "Available in different sizes",
    ],
  },
  {
    name: "Smoked Catfish",
    image: "/livefish2.jpeg",
    description:
      "Naturally smoked to preserve taste and aroma, ready for immediate use.",
    uses: [
      "Great for soups and stews",
      "Longer shelf life",
      "Rich smoky flavor",
    ],
  },
  {
    name: "Barbeque Catfish",
    image: "/barbeque.webp",
    description: "Well seasoned and grilled, ready to eat or serve at events.",
    uses: ["Perfect for parties", "Ready-to-eat", "Juicy and tasty"],
  },
];

export default function ProductsPage() {
  return (
    <section className="bg-durai-light py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-durai-dark text-center">
          Our Products
        </h1>
        <p className="mt-4 text-center text-durai-text max-w-2xl mx-auto">
          Detailed information about our catfish products and how to order.
        </p>

        <div className="mt-20 space-y-20">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`flex flex-col md:flex-row gap-10 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover"
                />
              </div>

              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-durai-dark">
                  {product.name}
                </h2>
                <p className="mt-4 text-durai-text">{product.description}</p>

                <ul className="mt-4 list-disc list-inside text-durai-text">
                  {product.uses.map((use) => (
                    <li key={use}>{use}</li>
                  ))}
                </ul>

                <Link
                  href={`/order?product=${product.name}`}
                  className="inline-block mt-6 px-8 py-4 bg-durai-dark text-white rounded-xl font-semibold"
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
