import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgMenuMotion } from "react-icons/cg";
import { RxCrossCircled } from "react-icons/rx";

const navLinks = [
  { to: "/", label: "ABOUT ME" },
  { to: "/resume", label: "RESUME" },
  { to: "/projects", label: "PROJECTS" },
  { to: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white">
        <div className="mx-auto flex items-center justify-between px-5 py-5">
          <Link to="/" className="flex flex-wrap items-center gap-x-2">
            <img
              src="/indianflag.png"
              alt="Indian Flag"
              className="h-5 w-5 shrink-0"
            />
            <span className="text-lg font-semibold text-gray-800">
              VIVEK SHARMA
            </span>
            <span className="hidden text-sm font-medium text-gray-500 sm:inline">
              |
            </span>
            <span className="w-full text-left text-sm font-medium text-gray-500 sm:w-auto sm:inline">
              Frontend Engineer Delivery
            </span>
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="cursor-pointer md:hidden"
            aria-label="Open Menu"
          >
            <CgMenuMotion size={28} />
          </button>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-gray-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#f5ede8] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-8 top-8"
          aria-label="Close Menu"
        >
          <RxCrossCircled size={32} />
        </button>

        <nav className="flex h-full flex-col items-center justify-center gap-4" aria-label="Mobile navigation">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide ${
                  isActive ? "text-blue-600" : "text-black"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
