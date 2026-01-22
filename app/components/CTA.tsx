import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="py-16 bg-durai-dark">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white">Ready to Order?</h2>
        <p className="mt-2 text-white">
          Send your order on WhatsApp and we will deliver fresh catfish to you.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 px-8 py-4 bg-durai-fresh text-durai-light hover:text-durai-fresh font-bold rounded-xl"
        >
          Order Now
        </Link>
      </div>
    </section>
  );
};

export default CTA;
