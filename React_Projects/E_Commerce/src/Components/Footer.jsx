import React from "react";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">ShopEase</h2>
            <p className="text-gray-400 mt-3">
              Discover amazing products at great prices.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>FAQs</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Categories</li>
              <li>Best Deals</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 ShopEase. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Facebook className="cursor-pointer hover:scale-110 transition" />
            <Instagram className="cursor-pointer hover:scale-110 transition" />
            <Twitter className="cursor-pointer hover:scale-110 transition" />
            <Github className="cursor-pointer hover:scale-110 transition" />
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;