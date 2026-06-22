import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../Components/ProductCard";

function Products() {
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      price: 2999,
      dealPrice: 1999,
      rating: 4.5,
      discount: 33,
    },
    {
      id: 2,
      title: "Gaming Mouse",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db",
      price: 1499,
      dealPrice: 999,
      rating: 4.2,
      discount: 25,
    },
    {
      id: 3,
      title: "Mechanical Keyboard",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
      price: 4999,
      dealPrice: 3499,
      rating: 4.8,
      discount: 30,
    },
    {
      id: 4,
      title: "Smart Watch",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
      price: 5999,
      dealPrice: 4499,
      rating: 4.4,
      discount: 20,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            All Products
          </h1>

          <p className="text-gray-500 mt-2">
            Browse our latest collection
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-96">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-[260px_1fr] gap-8">

        {/* Sidebar */}
        <aside className="bg-white rounded-2xl shadow-md p-5 h-fit">

          <div className="flex items-center gap-2 mb-6">
            <SlidersHorizontal size={20} />
            <h2 className="font-semibold text-lg">
              Filters
            </h2>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="font-semibold mb-3">
              Categories
            </h3>

            <div className="space-y-2">
              <label className="flex gap-2">
                <input type="checkbox" />
                Electronics
              </label>

              <label className="flex gap-2">
                <input type="checkbox" />
                Fashion
              </label>

              <label className="flex gap-2">
                <input type="checkbox" />
                Home
              </label>

              <label className="flex gap-2">
                <input type="checkbox" />
                Sports
              </label>
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <h3 className="font-semibold mb-3">
              Price Range
            </h3>

            <input
              type="range"
              min="0"
              max="10000"
              className="w-full"
            />
          </div>

          {/* Rating */}
          <div>
            <h3 className="font-semibold mb-3">
              Rating
            </h3>

            <select className="w-full border rounded-lg p-2">
              <option>All Ratings</option>
              <option>4★ & Above</option>
              <option>3★ & Above</option>
            </select>
          </div>

        </aside>

        {/* Product Grid */}
        <section>

          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              Showing {products.length} products
            </p>

            <select className="border rounded-lg px-3 py-2">
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Rated</option>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                showDiscount={true}
              />
            ))}
          </div>

        </section>

      </div>
    </div>
  );
}

export default Products;