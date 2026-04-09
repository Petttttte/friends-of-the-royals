import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the projects funded by Friends of the Royals — from the Turf Field Project to school facility improvements at Riverview High School.",
};

const projects = [
  {
    id: "turf-field",
    featured: true,
    title: "Turf Field Project",
    category: "Athletic Facilities",
    status: "Active Campaign",
    statusColor: "bg-royalBurgundy text-white",
    raised: "$30,000",
    goal: "$100,000",
    pct: 30,
    description:
      "Our most ambitious initiative to date — a full-size artificial turf field for Riverview High School student athletes. This project will provide a year-round, all-weather training surface that reduces injury risk and elevates the quality of athletic programming at RHS.",
    impact:
      "Hundreds of student athletes will benefit annually from a professional-grade field that enables year-round athletic development.",
    href: "/projects/turf-field",
    icon: "🏟️",
  },
  {
    id: "prom-dress",
    featured: false,
    title: "Prom Dress Fund",
    category: "Student Support",
    status: "Ongoing",
    statusColor: "bg-royalNavy text-white",
    raised: "50+ Dresses",
    goal: "Annual",
    pct: null,
    description:
      "No Riverview High School student should miss their prom because they cannot afford a dress. Through the annual Parent Prom fundraiser, we collect and fund prom dresses for students in need — ensuring every Royal gets their moment.",
    impact:
      "Dozens of students each year receive beautiful prom dresses at no cost, allowing them to fully participate in this milestone event.",
    href: "/events/parent-prom",
    icon: "✨",
  },
  {
    id: "scholarships",
    featured: false,
    title: "Annual Scholarship Fund",
    category: "Education",
    status: "Annual Award",
    statusColor: "bg-royalBurgundy text-white",
    raised: "Annual Awards",
    goal: "Growing",
    pct: null,
    description:
      "Each year, Friends of the Royals awards scholarships to deserving graduating students from Riverview High School. Recipients are chosen based on academic achievement, community involvement, and the character that defines the Royals spirit.",
    impact:
      "Scholarship recipients gain financial support that opens doors to post-secondary education and career opportunities.",
    href: "/donate",
    icon: "🎓",
  },
  {
    id: "facility-improvements",
    featured: false,
    title: "School Facility Improvements",
    category: "Infrastructure",
    status: "Completed Projects",
    statusColor: "bg-royalNavy text-white",
    raised: "3+ Projects",
    goal: "Ongoing",
    pct: null,
    description:
      "Beyond major projects, Friends of the Royals funds targeted improvements to Riverview High School facilities — upgrades that enhance the learning and athletic environment for all students.",
    impact:
      "Facility improvements create a better, safer, and more inspiring environment for RHS students every single day.",
    href: "/impact",
    icon: "🏫",
  },
];

export default function ProjectsPage() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #273742 0%, #1a2530 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -right-10 top-0 opacity-5" width="400" height="440" viewBox="0 0 100 110">
            <polygon points="50,5 93,27.5 93,82.5 50,105 7,82.5 7,27.5" fill="none" stroke="white" strokeWidth="1" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-5">
            What We Build
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Our Projects
          </h1>
          <p className="text-white text-opacity-70 font-light text-xl leading-relaxed max-w-2xl">
            Every project Friends of the Royals undertakes is chosen for one
            reason: maximum impact for Riverview High School students.
          </p>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="bg-royalBurgundy py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-4">
              <span className="bg-white text-royalBurgundy font-extrabold text-xs uppercase tracking-widest px-4 py-2">
                Featured Project
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-10">
              <div>
                <p className="text-white text-opacity-60 font-semibold text-xs uppercase tracking-widest mb-4">
                  {featuredProject.category}
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                  {featuredProject.title}
                </h2>
                <p className="text-white text-opacity-80 font-light text-lg leading-relaxed mb-6">
                  {featuredProject.description}
                </p>
                <div className="bg-white bg-opacity-10 p-6 mb-8">
                  <p className="text-white font-extrabold text-sm uppercase tracking-widest mb-2">
                    Community Impact
                  </p>
                  <p className="text-white text-opacity-80 font-light">{featuredProject.impact}</p>
                </div>
                <Link
                  href={featuredProject.href}
                  className="inline-flex items-center gap-2 bg-white text-royalBurgundy font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-royalGray hover:shadow-xl hover:-translate-y-0.5"
                >
                  Full Project Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="bg-white bg-opacity-10 p-10">
                <p className="text-white font-extrabold text-sm uppercase tracking-widest mb-6">
                  Campaign Progress
                </p>
                <div className="flex justify-between mb-3">
                  <div>
                    <p className="text-4xl font-extrabold text-white">{featuredProject.raised}</p>
                    <p className="text-white text-opacity-50 text-xs uppercase tracking-wide font-semibold">Raised</p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-extrabold text-white">{featuredProject.goal}</p>
                    <p className="text-white text-opacity-50 text-xs uppercase tracking-wide font-semibold">Goal</p>
                  </div>
                </div>
                <div className="w-full bg-white bg-opacity-20 h-4 mb-2">
                  <div className="h-4 bg-white" style={{ width: `${featuredProject.pct}%` }} />
                </div>
                <p className="text-white text-opacity-60 text-sm font-light mb-8">
                  {featuredProject.pct}% of goal reached
                </p>
                <Link
                  href="/donate"
                  className="block text-center bg-white text-royalBurgundy font-extrabold text-sm uppercase tracking-widest px-6 py-4 transition-all duration-300 hover:bg-royalGray"
                >
                  Donate to This Project
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Projects */}
      <section className="bg-royalGray py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">All Initiatives</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy">
              More Programs & Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProjects.map((proj) => (
              <div key={proj.id} className="bg-white p-8 flex flex-col card-hover group">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{proj.icon}</span>
                  <span className={`${proj.statusColor} font-extrabold text-xs uppercase tracking-widest px-3 py-1`}>
                    {proj.status}
                  </span>
                </div>
                <p className="text-royalBurgundy font-extrabold text-xs uppercase tracking-widest mb-2">
                  {proj.category}
                </p>
                <h3 className="font-extrabold text-royalNavy text-xl mb-3 group-hover:text-royalBurgundy transition-colors duration-300">
                  {proj.title}
                </h3>
                <p className="text-royalNavy text-opacity-60 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {proj.description}
                </p>
                <div className="bg-royalGray p-4 mb-6">
                  <p className="text-royalNavy font-extrabold text-xs uppercase tracking-widest mb-1">Impact</p>
                  <p className="text-royalNavy text-opacity-70 font-light text-sm leading-relaxed">{proj.impact}</p>
                </div>
                <Link
                  href={proj.href}
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

      {/* Propose a Project */}
      <section className="bg-royalNavy py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-5">
            Have an Idea?
          </p>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Suggest a Project
          </h2>
          <p className="text-white text-opacity-60 font-light text-lg mb-10">
            Do you have an idea for a project that would benefit Riverview High
            School students? We want to hear from you. Get in touch and let us
            explore it together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center border-2 border-white text-white font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-white hover:text-royalNavy hover:-translate-y-0.5"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
