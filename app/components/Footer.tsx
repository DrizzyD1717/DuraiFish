import React from "react";

const Footer = () => {
  return (
    <footer className="bg-durai-dark text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h2 className="font-bold text-xl">duraiFish</h2>
          <p className="mt-2 text-sm">
            Fresh Catfish - Live, Smoked & Barbeque
          </p>
        </div>

        <div>
          <h3 className="font-bold">Contact</h3>
          <p className="mt-2 text-sm">WhatsApp: +234XXXXXXXXXX</p>
          <p className="mt-1 text-sm">Email: info@duraifish.com</p>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <p className="mt-2 text-sm">Home</p>
          <p className="mt-1 text-sm">Products</p>
          <p className="mt-1 text-sm">Order</p>
          <p className="mt-1 text-sm">Contact</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
