import React from "react";

function Footer() {
  return (
    <footer id="footer-section" className="bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-zinc-950 w-full mt-20 border-t border-gray-200 dark:border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Stay in the loop 
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-lg leading-relaxed">
              Get the latest tech news, community posts, and updates delivered
              straight to your inbox. No spam — just value.
            </p>

            {/* Form */}
            <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 
                bg-white dark:bg-zinc-900 text-gray-900 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-indigo-700 hover:bg-blue-700 
                text-white font-medium transition shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>

            </form>

            <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
              You can unsubscribe anytime. We respect your privacy.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-widest mb-4">
              Explore
            </h4>

            <ul className="space-y-3">
              {[
                "Home",
                "Community Blogs",
                "Latest News",
                "About",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
        
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 
                    hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            © 2026 <span className="font-medium text-gray-700 dark:text-gray-300">Anuj Dixit</span>.
            Built with React + Appwrite.
          </p>

          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;