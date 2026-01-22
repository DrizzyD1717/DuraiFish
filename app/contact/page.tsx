import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-durai-light py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-durai-dark text-center">
          Contact Us
        </h1>
        <p className="mt-4 text-center text-durai-text max-w-2xl mx-auto">
          Have questions or want to place an order? Reach out to us anytime.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-durai-dark">Get in Touch</h2>

            <div className="mt-6 space-y-4 text-durai-text">
              <p>
                <span className="font-semibold text-durai-dark">WhatsApp:</span>{" "}
                +234XXXXXXXXXX
              </p>
              <p>
                <span className="font-semibold text-durai-dark">Phone:</span>{" "}
                +234XXXXXXXXXX
              </p>
              <p>
                <span className="font-semibold text-durai-dark">Email:</span>{" "}
                info@duraifish.com
              </p>
              <p>
                <span className="font-semibold text-durai-dark">Location:</span>{" "}
                Lagos, Nigeria
              </p>
            </div>

            <Link
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              className="inline-block mt-8 px-8 py-4 bg-durai-dark text-white rounded-xl font-semibold"
            >
              Chat on WhatsApp
            </Link>
          </div>

          {/* Map / Extra Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center">
            <p className="text-durai-text text-center">
              Delivery available within Lagos and nearby locations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
