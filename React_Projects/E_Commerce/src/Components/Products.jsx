import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../Services/productsService";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Link to="/details">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold">All Products</h1>

            <p className="text-gray-500 mt-2">Browse our latest collection</p>
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
              <h2 className="font-semibold text-lg">Filters</h2>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Categories</h3>

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
              <h3 className="font-semibold mb-3">Price Range</h3>

              <input type="range" min="0" max="10000" className="w-full" />
            </div>

            {/* Rating */}
            <div>
              <h3 className="font-semibold mb-3">Rating</h3>

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
              {products.map((product) => {


                return (
                  <Link key={product.id} to={`/products/${product.id}`}>
                    <ProductCard
                      image={product.thumbnail}
                      title={product.title}
                      price={product.price}
                      rating={product.rating}
                    />
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </Link>
  );
}

export default Products;
