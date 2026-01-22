"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Brand */}
        <Link href="/" className="text-durai-dark font-bold text-xl">
          duraiFish
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-durai-text hover:text-durai-dark">
            Home
          </Link>
          <Link
            href="/products"
            className="text-durai-text hover:text-durai-dark"
          >
            Products
          </Link>

          <Link
            href="/contact"
            className="text-durai-text hover:text-durai-dark"
          >
            Contact
          </Link>
        </div>

        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/234XXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block px-4 py-2 bg-durai-dark text-white rounded-xl font-semibold"
        >
          WhatsApp
        </Link>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-durai-dark font-bold"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <Link href="/" className="block px-6 py-3 border-b">
            Home
          </Link>
          <Link href="/products" className="block px-6 py-3 border-b">
            Products
          </Link>

          <Link href="/contact" className="block px-6 py-3">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
