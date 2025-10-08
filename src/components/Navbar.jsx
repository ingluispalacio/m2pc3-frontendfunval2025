import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const currentPath = window.location.pathname; 

  const items = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/works", label: "Works" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16 items-center gap-2 lg:gap-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                K
              </span>
              <span className="hidden sm:inline text-2xl font-extrabold bg-gradient-to-r from-[#C381DB] to-[#4E92F9] bg-clip-text text-transparent">
                Klean
              </span>
            </a>
          </div>

          {/* Links escritorio */}
          <div className="hidden md:flex md:space-x-2">
            {items.map((it) => {
              const isActive = currentPath === it.href;
              return (
                <a
                  key={it.href}
                  href={it.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                    ${
                      isActive
                        ? "text-gray-900 bg-gray-100" 
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100" 
                    }`}
                >
                  {it.label}
                </a>
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

      
      <div
        className={`${
          open ? "block" : "hidden"
        } md:hidden border-t border-gray-100`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {items.map((it) => {
            const isActive = currentPath === it.href;
            return (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                  ${
                    isActive
                      ? "text-gray-900 bg-gray-100"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
              >
                {it.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
