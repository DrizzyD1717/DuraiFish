import Image from "next/image";

type Product = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const products: Product[] = [
  {
    title: "Live Catfish",
    description: "Fresh and healthy live catfish delivered directly to you.",
    image: "/livefish1.jpeg",
    link: "/order?product=live",
  },
  {
    title: "Smoked Catfish",
    description: "Rich smoky flavor, perfect for soups and stews.",
    image: "/livefish2.jpeg",
    link: "/order?product=smoked",
  },
  {
    title: "Barbeque Catfish",
    description: "Grilled to perfection with a juicy and tender finish.",
    image: "/livefish1.jpeg",
    link: "/order?product=bbq",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-16 bg-durai-light">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-durai-dark text-center">
          Our Products
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.title}
                className="w-full h-52 object-cover"
                width={400}
                height={208}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-durai-dark">
                  {product.title}
                </h3>
                <p className="mt-2 text-durai-text">{product.description}</p>
                <a
                  href={product.link}
                  className="inline-block mt-4 px-6 py-3 bg-durai-dark text-white rounded-xl font-semibold"
                >
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
