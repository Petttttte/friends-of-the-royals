import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "The mission of Friends of the Royals — empowering Riverview High School students through community-driven support, scholarships, and facilities.",
};

const commitments = [
  {
    number: "01",
    title: "Fund What Matters",
    desc: "We direct every dollar raised to programs, facilities, and opportunities that make a tangible difference in the lives of RHS students — from turf fields to scholarship funds.",
  },
  {
    number: "02",
    title: "Champion Every Student",
    desc: "We believe no student should be left behind due to financial circumstances. Our programs ensure equal access to milestones, extracurriculars, and community opportunities.",
  },
  {
    number: "03",
    title: "Unite the Community",
    desc: "We build bridges between RHS graduates of every era, local businesses, parents, and community members — channeling collective pride into collective action.",
  },
  {
    number: "04",
    title: "Leave a Legacy",
    desc: "Every project we undertake is designed to benefit not just today's students, but future generations of Royals. We build for the long term.",
  },
];

export default function MissionPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-28 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #273742 0%, #1a2530 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-96 h-96 opacity-10"
            style={{ background: "radial-gradient(circle, #8b3f33 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-6">
            Friends of the Royals
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-none mb-8">
            Our Mission
          </h1>
          <div className="max-w-3xl">
            <p className="text-white text-opacity-80 font-light text-2xl md:text-3xl leading-relaxed">
              To empower every Riverview High School student by rallying alumni,
              community members, and local businesses around the shared belief
              that great schools are built by the communities that care for them.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-royalBurgundy py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <svg
            className="w-12 h-12 text-white text-opacity-30 mx-auto mb-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl leading-snug mb-8 max-w-4xl mx-auto">
            We exist to ensure that the students of Riverview High School have
            every resource, opportunity, and advantage they need to succeed — on
            the field, in the classroom, and in life.
          </p>
          <div className="w-24 h-1 bg-white bg-opacity-30 mx-auto" />
        </div>
      </section>

      {/* Commitment to RHS Students */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label">Our Pledge</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy leading-tight mb-6">
                Commitment to
                <br />
                RHS Students
              </h2>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-6">
                At the heart of everything Friends of the Royals does is a
                fundamental commitment: the students who walk the halls of
                Riverview High School today deserve the same level of support,
                facilities, and opportunity as students anywhere in the country.
              </p>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-6">
                That means funding a turf field that the whole community can
                use for years to come. It means a scholarship fund that
                recognizes outstanding students who might not otherwise have
                access to post-secondary education. It means a prom dress
                program that ensures no student misses out on one of high
                school&apos;s most memorable nights.
              </p>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed">
                These aren&apos;t luxuries. For our students, they are life-changing.
                And every alumni, donor, and partner who joins Friends of the
                Royals makes them possible.
              </p>
            </div>

            {/* Quote blocks */}
            <div className="space-y-6">
              <div className="bg-royalBurgundy p-8">
                <p className="text-white font-extrabold text-xl leading-relaxed mb-4">
                  &ldquo;The measure of a community is how it treats the generation
                  that follows.&rdquo;
                </p>
                <p className="text-white text-opacity-60 font-light text-sm uppercase tracking-widest">
                  — Friends of the Royals
                </p>
              </div>
              <div className="bg-royalNavy p-8">
                <p className="text-white font-extrabold text-xl leading-relaxed mb-4">
                  &ldquo;Every great athlete, scholar, and leader we produce at RHS
                  is a testament to the village that raised them.&rdquo;
                </p>
                <p className="text-white text-opacity-60 font-light text-sm uppercase tracking-widest">
                  — Friends of the Royals
                </p>
              </div>
              <div className="bg-royalGray p-8">
                <p className="text-royalNavy font-extrabold text-xl leading-relaxed mb-4">
                  &ldquo;We don&apos;t just raise funds. We raise the ceiling of what&apos;s
                  possible for Riverview High School students.&rdquo;
                </p>
                <p className="text-royalBurgundy font-light text-sm uppercase tracking-widest">
                  — Friends of the Royals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Driven Impact */}
      <section className="bg-royalGray py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">Our Impact Model</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy mb-4">
              Community Driven Impact
            </h2>
            <p className="text-royalNavy text-opacity-70 font-light text-xl max-w-2xl mx-auto">
              Our approach is simple: mobilize the community, raise the funds,
              and direct them exactly where students need them most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((item, i) => (
              <div key={i} className="bg-white p-10 flex gap-6 card-hover group">
                <div className="flex-shrink-0">
                  <p className="text-6xl font-extrabold text-royalBurgundy text-opacity-20 group-hover:text-opacity-40 transition-all duration-300 leading-none">
                    {item.number}
                  </p>
                </div>
                <div>
                  <h3 className="font-extrabold text-royalNavy text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-royalNavy text-opacity-60 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section
        className="py-28 px-6"
        style={{ background: "linear-gradient(135deg, #273742 0%, #1a2530 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-5">
                Looking Ahead
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Our Vision for
                <br />
                Riverview High
              </h2>
              <p className="text-white text-opacity-70 font-light text-lg leading-relaxed mb-6">
                We envision a Riverview High School where every student athlete
                trains on a professional-grade turf field. Where scholarships open
                doors for graduates who work hard and dream big. Where no
                student ever feels excluded from the full experience of high
                school because of financial barriers.
              </p>
              <p className="text-white text-opacity-70 font-light text-lg leading-relaxed mb-10">
                That future is achievable — and it is being built right now,
                fundraiser by fundraiser, donor by donor, volunteer by volunteer.
              </p>
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 text-royalTan font-extrabold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300"
              >
                See Our Impact
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "$100K", l: "Turf Field Goal" },
                { n: "Annual", l: "Scholarship Fund" },
                { n: "50+", l: "Dresses Donated" },
                { n: "∞", l: "Community Pride" },
              ].map((item, i) => (
                <div key={i} className="bg-white bg-opacity-10 p-8 text-center hover:bg-opacity-20 transition-all duration-300">
                  <p className="text-4xl font-extrabold text-white mb-2">{item.n}</p>
                  <p className="text-white text-opacity-50 font-semibold text-xs uppercase tracking-wide">{item.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-center">Join the Mission</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy mb-6">
            Be Part of Something Bigger
          </h2>
          <p className="text-royalNavy text-opacity-70 font-light text-lg mb-10">
            The mission of Friends of the Royals is only possible because of
            people like you. Whether you donate, volunteer, or simply spread the
            word — you are making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
            >
              Donate Now
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center border-2 border-royalNavy text-royalNavy font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-royalNavy hover:text-white hover:-translate-y-0.5"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
