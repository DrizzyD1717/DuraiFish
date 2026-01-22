const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-durai-dark text-center">
          How It Works
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-2xl">
            <h3 className="font-bold text-durai-dark">Choose Product</h3>
            <p className="mt-2 text-durai-text">
              Select Live, Smoked or Barbeque.
            </p>
          </div>
          <div className="p-6 border rounded-2xl">
            <h3 className="font-bold text-durai-dark">Send Order</h3>
            <p className="mt-2 text-durai-text">
              Use WhatsApp to place your order instantly.
            </p>
          </div>
          <div className="p-6 border rounded-2xl">
            <h3 className="font-bold text-durai-dark">Get Delivery</h3>
            <p className="mt-2 text-durai-text">
              Fresh catfish delivered to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
