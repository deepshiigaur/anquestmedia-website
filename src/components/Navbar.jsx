import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6 lg:px-8">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-lg shadow-blue-900/5 backdrop-blur-xl sm:px-6">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-2"
          >
            <img
              src="/logo1.png.png"
              alt="Anquest Logo"
              className="h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>


          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 lg:flex">

            {navLinks.map((link) => {

              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "text-blue-600"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >

                  {link.name}

                  {active && (
                    <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-linear-to-r from-blue-500 to-blue-500 shadow-lg shadow-blue-500/30" />
                  )}

                </Link>
              );
            })}

          </div>


          {/* DESKTOP CTA */}
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-linear-to-r from-blue-500 via-blue-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/30 lg:flex"
          >
            Let's Talk

            <ArrowUpRight size={16} />
          </Link>


          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-blue-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>


        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen
              ? "max-h-96 pt-4 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >

          <div className="border-t border-slate-100 pt-3">

            <div className="flex flex-col gap-1">

              {navLinks.map((link) => {

                const active = location.pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );

              })}


              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-500 via-blue-400 to-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20"
              >

                Let's Talk

                <ArrowUpRight size={16} />

              </Link>

            </div>

          </div>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;