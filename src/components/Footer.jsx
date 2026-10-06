import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080B12] text-white">
      {/* Linear Top Line */}
      <div className="h-1 w-full bg-linear-to-r from-blue-500 via-blue-400 to-blue-400" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center">
              <img
                src="/logo1.png.png"
                alt="ANQUEST Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Building modern digital solutions that help businesses
              grow, connect and move forward.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 via-blue-400 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </Link>
          </div>


          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                to="/"
                className="text-sm text-slate-400 transition duration-300 hover:translate-x-1 hover:text-blue-400"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-slate-400 transition duration-300 hover:translate-x-1 hover:text-blue-400"
              >
                About
              </Link>

              <Link
                to="/services"
                className="text-sm text-slate-400 transition duration-300 hover:translate-x-1 hover:text-blue-400"
              >
                Services
              </Link>

              <Link
                to="/blogs"
                className="text-sm text-slate-400 transition duration-300 hover:translate-x-1 hover:text-blue-400"
              >
                Blogs
              </Link>

              <Link
                to="/contact"
                className="text-sm text-slate-400 transition duration-300 hover:translate-x-1 hover:text-blue-400"
              >
                Contact
              </Link>

            </div>
          </div>


          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-5">

              {/* LOCATION */}
<a
  href="https://www.google.com/maps/search/?api=1&query=Orbit+Plaza+Crossing+Republik+Ghaziabad+India+201016"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-start gap-3 group"
>
  <MapPin
    size={18}
    className="mt-1 shrink-0 text-blue-400"
  />

  <p className="text-sm leading-6 text-slate-400 transition-colors group-hover:text-blue-400">
    Orbit Plaza, Crossing Republik,
    <br />
    Ghaziabad, India, 201016
  </p>
</a>


{/* EMAIL */}
<a
  href="mailto:info@anquest.com"
  className="flex items-center gap-3 group"
>
  <Mail
    size={18}
    className="shrink-0 text-blue-400"
  />

  <span className="text-sm text-slate-400 transition-colors group-hover:text-blue-400">
    info@anquest.com
  </span>
</a>


{/* PHONE */}
<a
  href="tel:+919266140654"
  className="flex items-center gap-3 group"
>
  <Phone
    size={18}
    className="shrink-0 text-blue-400"
  />

  <span className="text-sm text-slate-400 transition-colors group-hover:text-blue-400">
    +91-9266140654
  </span>
</a>

            </div>
          </div>

        </div>


        {/* BOTTOM */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-slate-500">
            © 2026 ANQUEST. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;