import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../Components/ProductCard";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../Services/productsService";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [searchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category") || "all";
  const searchFromUrl = searchParams.get("search") || "";

  //to fetch products
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
  //for categories display
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://dummyjson.com/products/categories");

      const data = await response.json();
      console.log(data);
      setCategories(data);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
    setSearchTerm(searchFromUrl);
  }, [categoryFromUrl, searchFromUrl]);

  //to convert search filter to lower case
  const query = searchTerm.trim().toLowerCase();

  //actual function for all type of search
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    const matchesPrice = product.price <= maxPrice;

    const matchesSearch =
      (product.title ?? "").toLowerCase().includes(query) ||
      (product.category ?? "").toLowerCase().includes(query) ||
      (product.brand ?? "").toLowerCase().includes(query);

    return matchesCategory && matchesPrice && matchesSearch;
  });

  const sortedProducts = [...filteredProducts];

  if (sortBy === "rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  if (sortBy === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  const displayedProducts = sortedProducts.slice(0, 25);

  //to display loading state
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
            <div className="space-y-2 max-h-64 overflow-y-auto">
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="space-y-2">
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === "all"}
                    onChange={() => setSelectedCategory("all")}
                  />
                  All
                </label>

                {categories.map((category) => (
                  <label key={category.slug} className="flex gap-2">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === category.slug}
                      onChange={() => setSelectedCategory(category.slug)}
                    />
                    {category.name}
                  </label>
                ))}
              </div>
            </div>
            {/* Price */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Price Range</h3>

              <input
                type="range"
                min="0"
                max="10000"
                className="w-full"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
              <p className="mt-2 text-sm text-gray-600">Up to ₹{maxPrice}</p>
            </div>

            {/* Rating */}
            <div>
              <h3 className="font-semibold mb-3">Rating</h3>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border rounded-lg p-2"
              >
                <option value="">Default</option>
                <option value="rating">Best Rated</option>
              </select>
            </div>
          </aside>

          {/* Product Grid */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} products
              </p>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-lg px-3 py-2"
              >
                <option value="">Newest</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {displayedProducts.length > 0 ? (
                displayedProducts.map((product) => (
                  <Link key={product.id} to={`/products/${product.id}`}>
                    <ProductCard
                      product={product}
                      image={product.thumbnail}
                      title={product.title}
                      price={product.price}
                      rating={product.rating}
                    />
                  </Link>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-16">
                  <h2 className="text-2xl font-bold text-gray-700">
                    No Products Found :(
                  </h2>

                  <p className="text-gray-500 mt-2 text-center max-w-md">
                    We couldn't find any products matching your search or
                    filters.
                  </p>

                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                      setMaxPrice(1000);
                      setSortBy("");
                    }}
                    className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Products;
