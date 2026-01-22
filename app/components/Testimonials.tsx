const testimonials = [
  {
    name: "Aisha",
    message: "Best catfish in town! Always fresh and tasty.",
  },
  {
    name: "Bayo",
    message: "Fast delivery and perfect quality.",
  },
  {
    name: "Tunde",
    message: "Smoked catfish is amazing. Highly recommended.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-durai-light">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-durai-dark text-center">
          Testimonials
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl shadow-lg p-6">
              <p className="text-durai-text">"{t.message}"</p>
              <p className="mt-4 font-bold text-durai-dark">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
