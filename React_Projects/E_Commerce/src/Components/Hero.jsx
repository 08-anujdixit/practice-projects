import React from "react";

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
            <button className="bg-black text-white px-6 py-3 rounded-lg">
              Shop Now
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Browse Categories
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Featured Product"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;