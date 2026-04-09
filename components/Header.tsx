"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/news", label: "News" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled || !isHome
            ? "bg-royalNavy shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo variant="dark" height={56} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-royalBurgundy"
                      : scrolled || !isHome
                      ? "text-white hover:text-royalTan"
                      : "text-white hover:text-royalTan"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-royalBurgundy" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right side: Donate button + mobile menu */}
            <div className="flex items-center gap-4">
              <Link
                href="/donate"
                className="hidden lg:inline-flex items-center bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-6 py-3 transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5"
              >
                Donate
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-royalNavy transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-semibold uppercase tracking-wide py-2 border-b border-white border-opacity-10 transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-royalBurgundy"
                    : "text-white hover:text-royalTan"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="mt-4 inline-flex items-center justify-center bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-6 py-4"
            >
              Donate Now
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
