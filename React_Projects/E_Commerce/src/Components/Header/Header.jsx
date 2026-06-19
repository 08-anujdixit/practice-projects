import React from "react";
import { NavLink } from "react-router-dom";
import { Heart, ShoppingCart, User, Search } from "lucide-react";

function Header() {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-gray-800">
          ShopHub
        </NavLink>

        <div className="hidden md:flex items-center border rounded-lg overflow-hidden w-[400px]">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 outline-none"
          />

          <button className="px-4">
            <Search size={20} />
          </button>
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
