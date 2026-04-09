import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
  organization: [
    { href: "/about", label: "About Us" },
    { href: "/mission", label: "Our Mission" },
    { href: "/impact", label: "Our Impact" },
    { href: "/sponsors", label: "Sponsors" },
  ],
  getInvolved: [
    { href: "/donate", label: "Donate" },
    { href: "/events", label: "Events" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact Us" },
  ],
  projects: [
    { href: "/projects/turf-field", label: "Turf Field Project" },
    { href: "/events/parent-prom", label: "Parent Prom" },
    { href: "/news", label: "Latest News" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-royalNavy text-white">
      {/* CTA Strip */}
      <div className="bg-royalBurgundy py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-extrabold uppercase tracking-widest text-white text-opacity-70 mb-3">
            Make A Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Support Friends of the Royals
            <br />
            Alumni Association Today
          </h2>
          <p className="text-white text-opacity-80 font-light text-lg mb-8 max-w-2xl mx-auto">
            Every contribution helps Riverview High School students thrive — from
            community projects to prom dresses to scholarship funds.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center bg-white text-royalBurgundy font-extrabold text-sm uppercase tracking-widest px-10 py-4 transition-all duration-300 hover:bg-royalGray hover:shadow-xl hover:-translate-y-0.5"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo variant="dark" height={72} className="mb-6" />
            <p className="text-white text-opacity-60 font-light leading-relaxed mb-6 max-w-sm">
              Friends of the Royals is a community-driven alumni association
              dedicated to supporting Riverview High School students in
              Riverview, New Brunswick.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white border-opacity-20 flex items-center justify-center text-white text-opacity-60 hover:text-white hover:border-royalBurgundy hover:bg-royalBurgundy transition-all duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white border-opacity-20 flex items-center justify-center text-white text-opacity-60 hover:text-white hover:border-royalBurgundy hover:bg-royalBurgundy transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Organization Links */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-widest text-royalTan mb-5">
              Organization
            </h4>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white text-opacity-60 font-light hover:text-white hover:text-opacity-100 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-widest text-royalTan mb-5">
              Get Involved
            </h4>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white text-opacity-60 font-light hover:text-white hover:text-opacity-100 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Links */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-widest text-royalTan mb-5">
              Programs
            </h4>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white text-opacity-60 font-light hover:text-white hover:text-opacity-100 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h4 className="font-extrabold text-sm uppercase tracking-widest text-royalTan mb-3">
                Location
              </h4>
              <p className="text-white text-opacity-60 font-light text-sm leading-relaxed">
                Riverview High School
                <br />
                Riverview, New Brunswick
                <br />
                Canada
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-opacity-40 text-sm font-light">
            &copy; {new Date().getFullYear()} Friends of the Royals Alumni Association. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className="text-white text-opacity-40 text-sm font-light hover:text-opacity-70 transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/donate"
              className="text-white text-opacity-40 text-sm font-light hover:text-opacity-70 transition-colors duration-200"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
