import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Heart, ShoppingCart, User, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category.slug}`);

    // Clear the search after navigation
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

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-gray-800">
          ShopHub
        </NavLink>

        <div className="hidden md:block relative w-[400px]">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 outline-none"
            />

            <button className="px-4">
              <Search size={20} />
            </button>
          </div>

          {filteredCategories.length > 0 && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
              {filteredCategories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => handleCategoryClick(category)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 transition flex items-center gap-2"
                >
                  <span>{category.name}</span>
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

          <NavLink to="/cart">
            <ShoppingCart className="hover:scale-110 transition" />
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
