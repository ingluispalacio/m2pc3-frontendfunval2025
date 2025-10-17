import { useState } from "react";
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false); 
  const location = useLocation();
  const currentPath = location.pathname;

  const items = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/features", label: "Features" },
    { to: "/ours_projects", label: "Ours Projest" }
  ];

  return (
    <nav>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16 items-center gap-2 lg:gap-12">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                K
              </span>
              <span className="hidden sm:inline text-2xl font-extrabold bg-gradient-to-r from-[#C381DB] to-[#4E92F9] bg-clip-text text-transparent">
                Klean
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:space-x-2">
            {items.map((it) => {
              const isActive = currentPath === it.to;
              return (
                <Link
                  key={it.to}
                  to={it.to}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                    ${
                      isActive
                        ? "text-gray-900 bg-gray-100" 
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100" 
                    }`}
                >
                  {it.label}
                </Link>
              );
            })}
          </div>

          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle navigation"
              className="md:hidden p-2 rounded-md inline-flex items-center justify-center text-gray-700 hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      
        <AnimatePresence>
        {open && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute border-t border-gray-100 bg-white/90 backdrop-blur-lg shadow-lg top-15 w-full z-50"
          >
            <div className="px-4 pt-3 pb-4 space-y-1">
              {items.map((it) => {
                const isActive = currentPath === it.to;
                return (
                  <Link
                    key={it.to}
                    to={it.to}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-gray-900 bg-gray-100"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {it.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
