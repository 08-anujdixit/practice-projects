import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import LogoutBtn from "../Logout.jsx";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/10 hover:text-white ${
      isActive ? "bg-gray-900/50" : ""
    }`;

  return (
    <nav className="bg-indigo-700 dark:bg-black/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-white/10"
            >
              {menuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0"
            >
              <div
                className="
                  w-10 h-10
                  flex items-center justify-center
                  rounded-lg
                  bg-black
                  text-white
                  font-bold
                  border border-gray-700
                  cursor-pointer
                  select-none
                "
              >
                AD
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center gap-2 ml-6">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/about" className={navLinkClass}>
                About Us
              </NavLink>

              <button
                onClick={() => {
                  document
                    .getElementById("footer-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/10 hover:text-white"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden sm:flex items-center gap-3">
            {!authStatus ? (
              <>
                <NavLink to="/login" className={navLinkClass}>
                  Login
                </NavLink>

                <NavLink to="/signup" className={navLinkClass}>
                  Sign Up
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/myblogs" className={navLinkClass}>
                  My Blogs
                </NavLink>

                <NavLink to="/addblog" className={navLinkClass}>
                  Add Blog
                </NavLink>
                
                < LogoutBtn/>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden border-t border-white/10 py-3">
            <div className="flex flex-col space-y-1">
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>

              {authStatus && (
                <>
                  <NavLink
                    to="/myblogs"
                    className={navLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    My Blogs
                  </NavLink>

                  <NavLink
                    to="/addblog"
                    className={navLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    Add Blog
                  </NavLink>
                </>
              )}

              {!authStatus ? (
                <>
                  <NavLink
                    to="/login"
                    className={navLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </NavLink>

                  <NavLink
                    to="/signup"
                    className={navLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign Up
                  </NavLink>
                </>
              ) : (
                <div className="px-0 py-0">
                  <LogoutBtn />
                </div>
              )}

              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </NavLink>

              <button
                onClick={() => {
                  document
                    .getElementById("footer-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
                className="block w-full text-left rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/10 hover:text-white"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;