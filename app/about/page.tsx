import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Friends of the Royals — a community-driven alumni association dedicated to supporting Riverview High School students in Riverview, NB.",
};

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Community First",
    desc: "Every decision we make centers on what's best for Riverview High School students and the broader Riverview community.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Transparency",
    desc: "We hold ourselves accountable. Every dollar raised is tracked and directed to programs that directly benefit RHS students.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Inclusion",
    desc: "We believe every RHS student deserves equal opportunity — regardless of financial circumstance, background, or ability.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Action",
    desc: "We don't just talk about change — we fund it, build it, and make it happen with the hands-on support of our alumni network.",
  },
];

const team = [
  {
    name: "Community Volunteers",
    role: "Board of Directors",
    desc: "Dedicated alumni and community members who give their time, expertise, and passion to lead the organization.",
  },
  {
    name: "Event Committee",
    role: "Event Planning & Execution",
    desc: "The creative and organizational force behind Parent Prom, fundraisers, and community gatherings.",
  },
  {
    name: "Fundraising Team",
    role: "Development & Outreach",
    desc: "Alumni who work tirelessly to secure sponsorships, organize campaigns, and grow our donor community.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #273742 0%, #1a2530 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute right-0 top-0 opacity-5" width="500" height="550" viewBox="0 0 100 110">
            <polygon points="50,5 93,27.5 93,82.5 50,105 7,82.5 7,27.5" fill="none" stroke="white" strokeWidth="1" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-5">
            About Friends of the Royals
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Rooted in Community.
            <br />
            <span className="text-royalBurgundy">Driven by Pride.</span>
          </h1>
          <p className="text-white text-opacity-70 font-light text-xl leading-relaxed max-w-2xl">
            We are alumni, parents, community members, and local businesses united
            by a shared love for Riverview High School and a commitment to its
            students.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy leading-tight mb-6">
                Who We Are
              </h2>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-6">
                Friends of the Royals was born from a simple but powerful idea:
                that the people who benefited most from Riverview High School
                should be the ones who give back to it. Founded by a group of
                proud RHS alumni and community champions, we set out to build an
                organization that bridges the gap between what school budgets can
                provide and what our students truly deserve.
              </p>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-6">
                From fundraising galas to turf field campaigns, from scholarship
                funds to prom dress drives, we show up for RHS students in every
                way we can. We believe the Royals spirit lives beyond graduation —
                and that the strongest communities are the ones that remember
                where they came from.
              </p>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed">
                Riverview, New Brunswick is more than a place on a map. It is
                home. And Friends of the Royals is committed to making sure the
                next generation of students experiences it at its very best.
              </p>
            </div>

            {/* Visual block */}
            <div className="space-y-4">
              <div className="bg-royalBurgundy p-10">
                <p className="text-white font-extrabold text-5xl mb-3">2020+</p>
                <p className="text-white text-opacity-80 font-light text-lg">
                  Years of building something meaningful for Riverview High School students.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-royalGray p-8 text-center">
                  <p className="text-royalBurgundy font-extrabold text-4xl mb-2">100%</p>
                  <p className="text-royalNavy font-semibold text-xs uppercase tracking-wide">Volunteer Led</p>
                </div>
                <div className="bg-royalNavy p-8 text-center">
                  <p className="text-white font-extrabold text-4xl mb-2">RHS</p>
                  <p className="text-white text-opacity-60 font-semibold text-xs uppercase tracking-wide">Our Heart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="bg-royalGray py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="section-label">Our Purpose</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy leading-tight mb-6">
              Why We Exist
            </h2>
            <p className="text-royalNavy text-opacity-70 font-light text-xl leading-relaxed">
              Schools do incredible work with limited resources. Our role is to
              extend what&apos;s possible — to fund the programs, facilities, and
              opportunities that fall outside what standard budgets can cover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 card-hover">
              <div className="w-12 h-1 bg-royalBurgundy mb-6" />
              <h3 className="font-extrabold text-royalNavy text-xl mb-4">
                Bridging the Gap
              </h3>
              <p className="text-royalNavy text-opacity-70 font-light leading-relaxed">
                School funding covers the essentials, but student success requires
                more. We raise funds to fill the gaps — scholarships, community
                projects, and student programs that shape well-rounded graduates.
              </p>
            </div>
            <div className="bg-white p-8 card-hover">
              <div className="w-12 h-1 bg-royalBurgundy mb-6" />
              <h3 className="font-extrabold text-royalNavy text-xl mb-4">
                Supporting Every Student
              </h3>
              <p className="text-royalNavy text-opacity-70 font-light leading-relaxed">
                Financial barriers should never prevent a student from
                participating in milestone experiences. Our programs ensure every
                student — regardless of means — can fully participate in RHS life.
              </p>
            </div>
            <div className="bg-white p-8 card-hover">
              <div className="w-12 h-1 bg-royalBurgundy mb-6" />
              <h3 className="font-extrabold text-royalNavy text-xl mb-4">
                Building Lasting Legacy
              </h3>
              <p className="text-royalNavy text-opacity-70 font-light leading-relaxed">
                The Turf Field, the scholarships, the improved facilities — these
                aren&apos;t temporary wins. They are investments that will benefit
                Royals students for decades to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label">Getting Involved</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy leading-tight mb-6">
                Community
                <br />
                Involvement
              </h2>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-6">
                Friends of the Royals thrives because of the community around it.
                Our events bring together alumni from across graduation years,
                parents who want to make a difference, local businesses that
                believe in education, and community members who share our pride
                in Riverview.
              </p>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-8">
                Whether you attend a Parent Prom fundraiser, sponsor the Turf
                Field Project, volunteer at a community event, or simply make a
                donation — every act of support counts. Together, we are more
                than an alumni association. We are Royals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Donate Now
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center border-2 border-royalNavy text-royalNavy font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-royalNavy hover:text-white hover:-translate-y-0.5"
                >
                  View Events
                </Link>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {values.map((val, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-6 border border-royalGray hover:border-royalBurgundy transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0 text-royalBurgundy group-hover:scale-110 transition-transform duration-300">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-royalNavy mb-2">{val.title}</h4>
                    <p className="text-royalNavy text-opacity-60 font-light text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support for RHS Students */}
      <section
        className="py-28 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #8b3f33 0%, #6d2f24 100%)" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-white text-opacity-60 font-extrabold text-xs uppercase tracking-widest mb-4">
              Our Commitment
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Support for RHS Students
            </h2>
            <p className="text-white text-opacity-80 font-light text-xl max-w-2xl mx-auto">
              Everything we do comes back to one thing: creating the best possible
              experience for Riverview High School students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Facility Projects",
                desc: "Funding community infrastructure including the Turf Field Project that will benefit Riverview High School students for generations.",
              },
              {
                title: "Prom Support",
                desc: "Ensuring every student can attend prom with dignity through our prom dress fund, removing financial barriers to milestone moments.",
              },
              {
                title: "Scholarship Fund",
                desc: "Annual scholarships awarded to graduating students who demonstrate commitment, character, and community involvement.",
              },
              {
                title: "School Programs",
                desc: "Supplementing school budgets for extracurricular activities, arts programs, and student enrichment opportunities.",
              },
              {
                title: "Community Events",
                desc: "Bringing alumni, families, and the community together through events that celebrate the Royals spirit and raise vital funds.",
              },
              {
                title: "Student Wellbeing",
                desc: "Supporting student mental health and wellbeing initiatives so that every Royal can thrive inside and outside the classroom.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white bg-opacity-10 p-8 hover:bg-opacity-20 transition-all duration-300">
                <div className="w-8 h-1 bg-white mb-5" />
                <h3 className="font-extrabold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-white text-opacity-70 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-royalGray py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">The People</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy">
              Powered by Volunteers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white p-10 text-center card-hover">
                <div className="w-20 h-20 bg-royalNavy mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="font-extrabold text-royalNavy text-lg mb-1">{member.name}</p>
                <p className="text-royalBurgundy font-semibold text-xs uppercase tracking-widest mb-4">
                  {member.role}
                </p>
                <p className="text-royalNavy text-opacity-60 font-light text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-royalNavy py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-white text-opacity-60 font-light text-lg mb-10">
            Join hundreds of alumni and community members who support Riverview
            High School students every year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
            >
              Donate Today
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-white hover:text-royalNavy hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
