import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "See the real-world impact of Friends of the Royals — funds raised, projects completed, scholarships awarded, and students supported at Riverview High School.",
};

const stats = [
  { number: "$30,000+", label: "Total Funds Raised", color: "bg-royalBurgundy", textColor: "text-white" },
  { number: "3+", label: "Projects Completed", color: "bg-royalNavy", textColor: "text-white" },
  { number: "50+", label: "Alumni Connected", color: "bg-royalBurgundy", textColor: "text-white" },
  { number: "100%", label: "Community Volunteer-Led", color: "bg-royalNavy", textColor: "text-white" },
];

const programs = [
  {
    icon: "🏈",
    title: "Turf Field Project",
    status: "Active Campaign",
    raised: "$30,000",
    goal: "$100,000",
    pct: 30,
    desc: "Our flagship project — a full artificial turf field for Riverview High School student athletes. Year-round training, reduced injury risk, and a facility the whole community can be proud of.",
    link: "/projects/turf-field",
  },
  {
    icon: "🎓",
    title: "Scholarship Fund",
    status: "Annual Award",
    raised: "Annual",
    goal: "Growing",
    pct: null,
    desc: "Annual scholarships awarded to deserving RHS graduates who demonstrate academic achievement, community involvement, and the character that embodies the Royals spirit.",
    link: "/donate",
  },
  {
    icon: "👗",
    title: "Prom Dress Program",
    status: "Active Program",
    raised: "50+ dresses",
    goal: "Ongoing",
    pct: null,
    desc: "Ensuring no Riverview High School student misses their prom due to the cost of a dress. Funded through the Parent Prom fundraiser and individual donations.",
    link: "/events/parent-prom",
  },
  {
    icon: "🏫",
    title: "School Facility Improvements",
    status: "Ongoing",
    raised: "3+ Projects",
    goal: "More to Come",
    pct: null,
    desc: "Beyond the Turf Field, Friends of the Royals has funded improvements to school facilities that directly benefit student life at RHS.",
    link: "/projects",
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-28 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #8b3f33 0%, #6d2f24 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute right-0 bottom-0 opacity-5" width="500" height="550" viewBox="0 0 100 110">
            <polygon points="50,5 93,27.5 93,82.5 50,105 7,82.5 7,27.5" fill="none" stroke="white" strokeWidth="1" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-white text-opacity-60 font-extrabold text-xs uppercase tracking-widest mb-5">
            Making a Difference
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Our Impact
          </h1>
          <p className="text-white text-opacity-80 font-light text-xl leading-relaxed max-w-2xl">
            Real numbers. Real students. Real change. See what Friends of the
            Royals has accomplished — and where we&apos;re headed.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-0">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className={`${stat.color} ${stat.textColor} p-12 text-center`}>
              <p className="text-5xl font-extrabold mb-2">{stat.number}</p>
              <p className="font-semibold text-xs uppercase tracking-widest opacity-70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs & Projects */}
      <section className="bg-royalGray py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">What We Fund</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy mb-4">
              Programs & Projects
            </h2>
            <p className="text-royalNavy text-opacity-70 font-light text-xl max-w-2xl mx-auto">
              Every initiative is designed for maximum impact on Riverview High
              School students and the broader community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((prog, i) => (
              <div key={i} className="bg-white p-8 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{prog.icon}</span>
                  <span className="bg-royalGray text-royalNavy font-extrabold text-xs uppercase tracking-widest px-3 py-1">
                    {prog.status}
                  </span>
                </div>
                <h3 className="font-extrabold text-royalNavy text-2xl mb-3">{prog.title}</h3>
                <p className="text-royalNavy text-opacity-60 font-light leading-relaxed mb-6">
                  {prog.desc}
                </p>

                {/* Progress bar for turf field */}
                {prog.pct !== null && (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-royalNavy">{prog.raised} raised</span>
                      <span className="text-royalNavy text-opacity-50 font-light">Goal: {prog.goal}</span>
                    </div>
                    <div className="w-full bg-royalGray h-3">
                      <div
                        className="h-3 bg-royalBurgundy"
                        style={{ width: `${prog.pct}%` }}
                      />
                    </div>
                    <p className="text-royalBurgundy font-extrabold text-sm mt-1">{prog.pct}% funded</p>
                  </div>
                )}

                {prog.pct === null && (
                  <div className="flex gap-6 mb-6">
                    <div>
                      <p className="text-royalBurgundy font-extrabold text-2xl">{prog.raised}</p>
                      <p className="text-royalNavy text-opacity-50 text-xs uppercase tracking-wide font-semibold">To Date</p>
                    </div>
                    <div>
                      <p className="text-royalNavy font-extrabold text-2xl">{prog.goal}</p>
                      <p className="text-royalNavy text-opacity-50 text-xs uppercase tracking-wide font-semibold">Goal</p>
                    </div>
                  </div>
                )}

                <Link
                  href={prog.link}
                  className="inline-flex items-center gap-2 text-royalBurgundy font-extrabold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Education First</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy leading-tight mb-6">
                Scholarships &
                <br />
                Student Support
              </h2>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-6">
                A Riverview High School education should open doors — and
                Friends of the Royals is committed to ensuring it does. Our
                annual scholarship fund awards financial support to graduating
                RHS students who embody the Royals spirit: hard work, community
                commitment, and the drive to succeed.
              </p>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-8">
                Beyond scholarships, we support students through the prom dress
                program, community project funding, and school improvement
                initiatives that create a better learning environment for
                everyone.
              </p>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5"
              >
                Support Scholarships
              </Link>
            </div>

            <div className="space-y-4">
              <div className="bg-royalGray p-8 flex items-center gap-6">
                <div className="text-5xl">🏆</div>
                <div>
                  <p className="font-extrabold text-royalNavy text-lg mb-1">Annual Awards</p>
                  <p className="text-royalNavy text-opacity-60 font-light">
                    Scholarships awarded each year to graduating RHS students.
                  </p>
                </div>
              </div>
              <div className="bg-royalGray p-8 flex items-center gap-6">
                <div className="text-5xl">📚</div>
                <div>
                  <p className="font-extrabold text-royalNavy text-lg mb-1">Merit & Community</p>
                  <p className="text-royalNavy text-opacity-60 font-light">
                    Awards based on academic achievement and community involvement.
                  </p>
                </div>
              </div>
              <div className="bg-royalGray p-8 flex items-center gap-6">
                <div className="text-5xl">🤝</div>
                <div>
                  <p className="font-extrabold text-royalNavy text-lg mb-1">Donor Supported</p>
                  <p className="text-royalNavy text-opacity-60 font-light">
                    Every scholarship is made possible by generous community donations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Turf Progress */}
      <section
        className="py-28 px-6"
        style={{ background: "linear-gradient(135deg, #273742 0%, #1a2530 100%)" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-5">
            Flagship Project
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Turf Field Progress
          </h2>
          <p className="text-white text-opacity-70 font-light text-xl mb-12 max-w-2xl mx-auto">
            We are 30% of the way to our $100,000 goal. Every donation brings
            us closer to giving RHS student athletes the field they deserve.
          </p>

          <div className="bg-white bg-opacity-10 p-10 mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
              <div className="text-left">
                <p className="text-white text-opacity-60 text-sm uppercase tracking-widest font-semibold">Raised</p>
                <p className="text-5xl font-extrabold text-white">$30,000</p>
              </div>
              <div className="text-center hidden md:block">
                <p className="text-royalBurgundy font-extrabold text-2xl">30%</p>
                <p className="text-white text-opacity-40 text-xs uppercase tracking-widest">Progress</p>
              </div>
              <div className="text-right">
                <p className="text-white text-opacity-60 text-sm uppercase tracking-widest font-semibold">Goal</p>
                <p className="text-5xl font-extrabold text-white">$100,000</p>
              </div>
            </div>
            <div className="w-full bg-white bg-opacity-20 h-5 mb-2">
              <div className="h-5 bg-royalBurgundy" style={{ width: "30%" }} />
            </div>
            <p className="text-white text-opacity-50 text-sm font-light">
              $70,000 remaining to reach our goal
            </p>
          </div>

          <Link
            href="/projects/turf-field"
            className="inline-flex items-center gap-2 bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
          >
            Support the Turf Field
          </Link>
        </div>
      </section>

      {/* Student Support */}
      <section className="bg-royalGray py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">Holistic Support</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy mb-4">
              Student Support Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "School Development",
                desc: "Funding for facility improvements, school projects, and resources that create a better environment for every RHS student.",
                icon: "⚽",
              },
              {
                title: "Prom & Milestones",
                desc: "Our Parent Prom fundraiser directly funds prom dresses for students in need, ensuring no one misses out on this milestone.",
                icon: "🌟",
              },
              {
                title: "Community Connection",
                desc: "Events and programs that connect current students with alumni mentors, creating a network of support and inspiration.",
                icon: "🤝",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 card-hover">
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="font-extrabold text-royalNavy text-xl mb-3">{item.title}</h3>
                <p className="text-royalNavy text-opacity-60 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-royalBurgundy py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Add Your Impact to the Story
          </h2>
          <p className="text-white text-opacity-80 font-light text-lg mb-10">
            Every dollar donated to Friends of the Royals goes directly to
            supporting Riverview High School students. Join us.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center bg-white text-royalBurgundy font-extrabold text-sm uppercase tracking-widest px-12 py-5 transition-all duration-300 hover:bg-royalGray hover:shadow-2xl hover:-translate-y-0.5"
          >
            Donate Today
          </Link>
        </div>
      </section>
    </>
  );
}
