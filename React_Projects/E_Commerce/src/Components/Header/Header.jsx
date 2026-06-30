import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Heart, ShoppingCart, User, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const searchRef = useRef(null);
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category.slug}`);

    // Clear the search after navigation
    setSearch("");
  };

  const handleSearch = () => {
    const query = search.trim();

    if (!query) return;

    navigate(`/products?search=${encodeURIComponent(query)}`);

    setSearch("");
  };

  const filteredCategories =
    search.trim().length >= 2
      ? categories
          .filter((category) =>
            category.name.toLowerCase().includes(search.toLowerCase().trim()),
          )
          .slice(0, 8)
      : [];

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();

      setCategories(data);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-gray-800">
          ShopHub
        </NavLink>

        <div ref={searchRef} className="hidden md:block relative w-[400px]">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            <button className="px-4" onClick={handleSearch}>
              <Search size={20} />
            </button>
          </div>

          {filteredCategories.length > 0 && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white border rounded-xl shadow-xl overflow-hidden z-50">
              {filteredCategories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => handleCategoryClick(category)}
                  className="group w-full flex items-center justify-between px-4 py-3 text-left transition-all duration-200 hover:bg-indigo-50 hover:pl-6"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium group-hover:text-indigo-600">
                        {category.name}
                      </p>
                      <p className="text-xs text-gray-500">Category</p>
                    </div>
                  </div>

                  <span className="opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-6">
          <NavLink to="/wishlist">
            <div className="flex items-center gap-2">
              <span className="text-xl ">Saved</span>
              <Heart className="hover:scale-110 transition" />
            </div>
          </NavLink>

          <NavLink to="/cart" className="relative">
            <ShoppingCart className="hover:scale-110 transition" />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {totalItems > 10 ? "10+" : totalItems}
              </span>
            )}
          </NavLink>

          <NavLink to="/login">
            <User className="hover:scale-110 transition" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
