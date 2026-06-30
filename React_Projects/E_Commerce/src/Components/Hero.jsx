import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div>
          <p className="text-blue-600 font-semibold mb-2">
            New Collection 2026
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-4">
            Find Your Next
            <span className="text-blue-600"> Favorite Product</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Shop trending products across multiple categories
            with amazing deals and fast delivery.
          </p>

          <div className="flex gap-4">
            <Link to = "/products">
            <button className="bg-black text-white px-6 py-3 rounded-lg">
              Shop Now
            </button>
            </Link>

    <button
  onClick={() => {
    document.getElementById("categories")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="..."
>
  Browse Categories
</button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://plus.unsplash.com/premium_vector-1683121609098-3a7345febc0b?q=80&w=1058&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Featured Product"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;