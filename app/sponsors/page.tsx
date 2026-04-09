import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Friends of the Royals sponsors — community leaders and businesses supporting Riverview High School students. Learn how to become a sponsor.",
};

const tiers = [
  {
    id: "platinum",
    name: "Platinum",
    color: "bg-royalNavy",
    textColor: "text-white",
    accentColor: "text-royalTan",
    borderColor: "border-royalNavy",
    amount: "$5,000+",
    benefits: [
      "Premier logo placement on all event materials",
      "Named recognition at all Friends of the Royals events",
      "Social media recognition throughout the year",
      "Invitation to VIP table at Parent Prom Night",
      "Logo on the Friends of the Royals website homepage",
      "Recognition in all press releases and media",
      "Certificate of community impact",
    ],
    sponsors: [null, null],
  },
  {
    id: "gold",
    name: "Gold",
    color: "bg-royalBurgundy",
    textColor: "text-white",
    accentColor: "text-royalTan",
    borderColor: "border-royalBurgundy",
    amount: "$2,500+",
    benefits: [
      "Logo on event promotional materials",
      "Social media recognition at key events",
      "Recognition at Friends of the Royals events",
      "Logo on the Friends of the Royals sponsors page",
      "Certificate of community impact",
    ],
    sponsors: [null, null, null],
  },
  {
    id: "community",
    name: "Community",
    color: "bg-royalGray",
    textColor: "text-royalNavy",
    accentColor: "text-royalBurgundy",
    borderColor: "border-royalGray",
    amount: "$500+",
    benefits: [
      "Name listing on sponsors page",
      "Social media acknowledgment",
      "Certificate of community support",
    ],
    sponsors: [null, null, null, null],
  },
];

const whySponsor = [
  {
    title: "Direct Community Impact",
    desc: "Your sponsorship goes directly to programs that benefit Riverview High School students — community projects, scholarships, and student support programs.",
    icon: "❤️",
  },
  {
    title: "Brand Visibility",
    desc: "Gain exposure among engaged Riverview community members, families, alumni, and local residents who attend our events and follow our work.",
    icon: "📣",
  },
  {
    title: "Community Leadership",
    desc: "Position your business as a true community leader — one that invests in the next generation of Riverview's citizens.",
    icon: "🏆",
  },
  {
    title: "Tax Receipt",
    desc: "Sponsorships may be eligible for charitable tax receipts. Contact us for details on our charitable registration status.",
    icon: "📋",
  },
];

export default function SponsorsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #273742 0%, #1a2530 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute right-0 top-0 opacity-5" width="400" height="440" viewBox="0 0 100 110">
            <polygon points="50,5 93,27.5 93,82.5 50,105 7,82.5 7,27.5" fill="none" stroke="white" strokeWidth="1" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-5">
            Our Partners
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Sponsors &<br />Partners
          </h1>
          <p className="text-white text-opacity-70 font-light text-xl leading-relaxed max-w-2xl">
            Our sponsors make everything possible. These businesses and
            community leaders invest in the future of Riverview High School.
          </p>
        </div>
      </section>

      {/* Thank you intro */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label">Thank You</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy mb-6">
            Our Sponsor Family
          </h2>
          <p className="text-royalNavy text-opacity-70 font-light text-xl leading-relaxed">
            Every sponsor who partners with Friends of the Royals is more than
            a financial contributor — they are a member of the Royals family.
            Their investment enables us to fund the turf field, award
            scholarships, and support students across every program we run.
          </p>
        </div>
      </section>

      {/* Sponsor Tiers */}
      {tiers.map((tier) => (
        <section key={tier.id} className={`py-20 px-6 ${tier.id === "gold" ? "bg-royalGray" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className={`${tier.color} px-5 py-2`}>
                <p className={`${tier.textColor} font-extrabold text-sm uppercase tracking-widest`}>
                  {tier.name} Sponsors
                </p>
              </div>
              <p className={`${tier.accentColor} font-extrabold text-sm uppercase tracking-widest`}>
                {tier.amount}
              </p>
            </div>

            <div
              className={`grid gap-6 ${
                tier.id === "platinum"
                  ? "grid-cols-1 md:grid-cols-2"
                  : tier.id === "gold"
                  ? "grid-cols-1 md:grid-cols-3"
                  : "grid-cols-2 md:grid-cols-4"
              }`}
            >
              {tier.sponsors.map((_, i) => (
                <div
                  key={i}
                  className={`${
                    tier.id === "platinum" ? "h-48" : tier.id === "gold" ? "h-36" : "h-28"
                  } border-2 ${tier.borderColor} border-opacity-20 flex items-center justify-center bg-royalGray card-hover`}
                >
                  <div className="text-center">
                    <svg
                      className="w-8 h-8 text-royalNavy text-opacity-20 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-royalNavy text-opacity-25 font-extrabold text-xs uppercase tracking-widest">
                      Sponsor Logo
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Sponsor */}
      <section className="bg-royalGray py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">Partner With Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy mb-4">
              Why Become a Sponsor?
            </h2>
            <p className="text-royalNavy text-opacity-70 font-light text-xl max-w-2xl mx-auto">
              Sponsoring Friends of the Royals is an investment in your community
              and in the next generation of Riverview residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySponsor.map((item, i) => (
              <div key={i} className="bg-white p-8 card-hover text-center">
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="font-extrabold text-royalNavy text-lg mb-3">{item.title}</h3>
                <p className="text-royalNavy text-opacity-60 font-light text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="bg-royalBurgundy py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-white text-opacity-60 font-extrabold text-xs uppercase tracking-widest mb-5">
                Join Our Partners
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Become a
                <br />
                Sponsor Today
              </h2>
              <p className="text-white text-opacity-80 font-light text-lg leading-relaxed mb-8">
                If your business or organization wants to make a meaningful
                contribution to Riverview High School students and the community,
                we would love to have you as a partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-royalBurgundy font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-royalGray hover:shadow-lg hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center border-2 border-white text-white font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-white hover:text-royalBurgundy hover:-translate-y-0.5"
                >
                  Donate Instead
                </Link>
              </div>
            </div>

            {/* Tier benefits summary */}
            <div className="space-y-4">
              {tiers.map((tier) => (
                <div key={tier.id} className="bg-white bg-opacity-10 p-6 hover:bg-opacity-20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-white font-extrabold text-lg">{tier.name} Partner</p>
                    <p className="text-white text-opacity-70 font-extrabold">{tier.amount}</p>
                  </div>
                  <p className="text-white text-opacity-60 font-light text-sm">
                    {tier.benefits[0]}
                    {tier.benefits.length > 1 && ` + ${tier.benefits.length - 1} more benefits`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact for sponsorship */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-royalNavy mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-royalNavy text-opacity-70 font-light text-lg mb-8">
            Reach out to our sponsorship team to discuss partnership
            opportunities. We work with businesses of all sizes to create
            packages that fit your goals and budget.
          </p>
          <div className="bg-royalGray p-8 text-left max-w-md mx-auto mb-8">
            <p className="font-extrabold text-royalNavy mb-4 text-sm uppercase tracking-widest">
              Contact for Sponsorship
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-royalBurgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-royalNavy font-light">info@friendsoftheroyals.ca</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-royalBurgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-royalNavy font-light">Riverview, New Brunswick</span>
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
          >
            Send a Message
          </Link>
        </div>
      </section>
    </>
  );
}
