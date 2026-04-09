"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const benefits = [
  {
    title: "Year-Round Training",
    desc: "Natural grass fields in New Brunswick are unusable for months each year. A turf field means uninterrupted athlete development through spring, fall, and indoor seasons.",
    icon: "🌿",
  },
  {
    title: "Reduced Injury Risk",
    desc: "Modern artificial turf systems are engineered to minimize ankle injuries, knee strain, and the uneven surfaces that cause accidents on natural grass fields.",
    icon: "🛡️",
  },
  {
    title: "Lower Long-Term Costs",
    desc: "While the upfront investment is significant, turf fields eliminate ongoing costs associated with grass maintenance, watering, seeding, and weather damage.",
    icon: "💰",
  },
  {
    title: "Community Use",
    desc: "A turf field is not just for school sports. It becomes a community asset available for youth leagues, alumni games, and community recreation year-round.",
    icon: "🏘️",
  },
  {
    title: "Recruiting & Competition",
    desc: "Quality facilities attract quality competition. A turf field raises the profile of RHS athletics and signals to students and families that this school invests in its athletes.",
    icon: "🏆",
  },
  {
    title: "Student Pride",
    desc: "When students see their school investing in world-class facilities, it builds pride, improves morale, and reinforces that their community believes in them.",
    icon: "⭐",
  },
];

const milestones = [
  { amount: "$10,000", label: "Phase 1: Site Assessment & Planning", completed: true },
  { amount: "$30,000", label: "Phase 2: Community Fundraising Drive", completed: true },
  { amount: "$60,000", label: "Phase 3: Design & Engineering", completed: false },
  { amount: "$100,000", label: "Phase 4: Construction & Installation", completed: false },
];

export default function TurfFieldPage() {
  const [progressVisible, setProgressVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setProgressVisible(true);
        });
      },
      { threshold: 0.3 }
    );
    if (progressRef.current) observer.observe(progressRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-28 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #273742 0%, #1a2530 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-5"
            style={{ background: "radial-gradient(circle, #8b3f33 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Link
              href="/projects"
              className="text-white text-opacity-50 font-light text-sm hover:text-opacity-80 transition-colors duration-200"
            >
              Projects
            </Link>
            <span className="text-white text-opacity-30">/</span>
            <span className="text-royalTan font-semibold text-sm">Turf Field</span>
          </div>
          <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-5">
            Featured Project
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            The Turf Field
            <br />
            <span className="text-royalBurgundy">Project</span>
          </h1>
          <p className="text-white text-opacity-70 font-light text-xl leading-relaxed max-w-2xl mb-8">
            Our most ambitious initiative — a professional-grade artificial turf
            field that will transform athletics at Riverview High School for
            generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
            >
              Donate to This Project
            </Link>
            <a
              href="#progress"
              className="inline-flex items-center justify-center border-2 border-white text-white font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-white hover:text-royalNavy hover:-translate-y-0.5"
            >
              See Progress
            </a>
          </div>
        </div>
      </section>

      {/* Why the Field is Needed */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">The Challenge</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy leading-tight mb-6">
                Why Riverview High
                <br />
                Needs This Field
              </h2>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-6">
                Riverview High School is home to hundreds of dedicated student
                athletes who compete at high levels in football, soccer, rugby,
                track and field, and more. Yet their training environment has
                not kept pace with their ambition.
              </p>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-6">
                New Brunswick&apos;s climate means that for months of the year,
                natural grass fields are too wet, too frozen, or too damaged to
                use safely. Student athletes lose critical training time that
                their counterparts in better-funded programs never sacrifice.
              </p>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed">
                A modern artificial turf field changes everything. It is a
                statement that the community believes in its athletes — and a
                practical facility that will serve students for 15-20+ years.
              </p>
            </div>

            {/* Visual block */}
            <div className="space-y-4">
              <div className="bg-royalBurgundy p-8">
                <p className="text-white text-opacity-60 font-extrabold text-xs uppercase tracking-widest mb-2">
                  The Problem
                </p>
                <p className="text-white font-extrabold text-2xl">
                  Months of lost training time every year due to weather-damaged
                  natural grass fields.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-royalGray p-6">
                  <p className="text-royalBurgundy font-extrabold text-3xl mb-1">15+</p>
                  <p className="text-royalNavy font-semibold text-xs uppercase tracking-wide">
                    Sports Benefit
                  </p>
                </div>
                <div className="bg-royalNavy p-6">
                  <p className="text-white font-extrabold text-3xl mb-1">300+</p>
                  <p className="text-white text-opacity-50 font-semibold text-xs uppercase tracking-wide">
                    Athletes Annually
                  </p>
                </div>
                <div className="bg-royalGray p-6">
                  <p className="text-royalBurgundy font-extrabold text-3xl mb-1">20+</p>
                  <p className="text-royalNavy font-semibold text-xs uppercase tracking-wide">
                    Year Lifespan
                  </p>
                </div>
                <div className="bg-royalBurgundy p-6">
                  <p className="text-white font-extrabold text-3xl mb-1">365</p>
                  <p className="text-white text-opacity-60 font-semibold text-xs uppercase tracking-wide">
                    Days Usable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Benefit */}
      <section className="bg-royalGray py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">Community Impact</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy mb-4">
              Benefits for the Whole Community
            </h2>
            <p className="text-royalNavy text-opacity-70 font-light text-xl max-w-2xl mx-auto">
              The Turf Field isn&apos;t just for RHS athletes. It&apos;s a community
              asset that will benefit Riverview for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-8 card-hover">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-extrabold text-royalNavy text-lg mb-3">{benefit.title}</h3>
                <p className="text-royalNavy text-opacity-60 font-light text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fundraising Progress */}
      <section
        id="progress"
        className="py-28 px-6"
        style={{ background: "linear-gradient(135deg, #8b3f33 0%, #6d2f24 100%)" }}
      >
        <div className="max-w-5xl mx-auto" ref={progressRef}>
          <div className="text-center mb-16">
            <p className="text-white text-opacity-60 font-extrabold text-xs uppercase tracking-widest mb-5">
              Campaign Status
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Fundraising Progress
            </h2>
            <p className="text-white text-opacity-80 font-light text-xl">
              We&apos;re 30% of the way there. Help us reach the finish line.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-10 mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
              <div>
                <p className="text-white text-opacity-60 text-xs uppercase tracking-widest font-semibold mb-1">
                  Amount Raised
                </p>
                <p className="text-6xl font-extrabold text-white">$30,000</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-extrabold text-white">30%</p>
                <p className="text-white text-opacity-50 text-xs uppercase tracking-widest">Funded</p>
              </div>
              <div className="text-right">
                <p className="text-white text-opacity-60 text-xs uppercase tracking-widest font-semibold mb-1">
                  Campaign Goal
                </p>
                <p className="text-6xl font-extrabold text-white">$100,000</p>
              </div>
            </div>

            <div className="w-full bg-white bg-opacity-20 h-6 mb-3">
              <div
                className="h-6 bg-white transition-all duration-1500 ease-in-out"
                style={{ width: progressVisible ? "30%" : "0%" }}
              />
            </div>
            <div className="flex justify-between text-white text-opacity-50 text-sm font-light">
              <span>$0</span>
              <span className="text-white text-opacity-80 font-semibold">$70,000 remaining</span>
              <span>$100,000</span>
            </div>
          </div>

          {/* Milestones */}
          <div className="space-y-4">
            <p className="text-white font-extrabold text-sm uppercase tracking-widest mb-6">
              Project Milestones
            </p>
            {milestones.map((milestone, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-5 ${
                  milestone.completed
                    ? "bg-white bg-opacity-20"
                    : "bg-white bg-opacity-5 border border-white border-opacity-10"
                }`}
              >
                <div
                  className={`w-8 h-8 flex-shrink-0 flex items-center justify-center ${
                    milestone.completed ? "bg-white" : "border-2 border-white border-opacity-30"
                  }`}
                >
                  {milestone.completed && (
                    <svg className="w-4 h-4 text-royalBurgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div className="flex-grow">
                  <p className={`font-extrabold ${milestone.completed ? "text-white" : "text-white text-opacity-50"}`}>
                    {milestone.label}
                  </p>
                </div>
                <p className={`font-extrabold text-lg ${milestone.completed ? "text-white" : "text-white text-opacity-30"}`}>
                  {milestone.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Contribute */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Get Involved</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy leading-tight mb-6">
                How to Contribute
              </h2>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-8">
                The Turf Field Project needs the support of the entire Riverview
                community. Whether you&apos;re a former Royal, a local business owner,
                a parent, or simply someone who believes in investing in youth —
                your contribution makes a difference.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-royalBurgundy flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-extrabold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-extrabold text-royalNavy mb-1">Make a Direct Donation</p>
                    <p className="text-royalNavy text-opacity-60 font-light text-sm">
                      Any amount helps. $50, $250, $1,000 — every dollar goes
                      directly toward the Turf Field construction fund.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-royalNavy flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-extrabold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-extrabold text-royalNavy mb-1">Become a Business Sponsor</p>
                    <p className="text-royalNavy text-opacity-60 font-light text-sm">
                      Local businesses can sponsor the project with naming rights
                      opportunities and significant community recognition.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-royalBurgundy flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-extrabold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-extrabold text-royalNavy mb-1">Attend Fundraising Events</p>
                    <p className="text-royalNavy text-opacity-60 font-light text-sm">
                      Friends of the Royals events like Parent Prom contribute
                      directly to the Turf Field fund. Attend, bring friends,
                      and help us raise what we need.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-royalNavy flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-extrabold text-sm">4</span>
                  </div>
                  <div>
                    <p className="font-extrabold text-royalNavy mb-1">Spread the Word</p>
                    <p className="text-royalNavy text-opacity-60 font-light text-sm">
                      Share the campaign on social media. Tell fellow alumni
                      about it. The more people who know, the more support we
                      can generate.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5"
              >
                Donate to the Turf Field
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Impact numbers */}
            <div className="bg-royalGray p-10">
              <p className="section-label mb-6">What Your Donation Does</p>
              <div className="space-y-6">
                {[
                  { amount: "$50", impact: "Covers materials for one section of field boundary marking." },
                  { amount: "$100", impact: "Funds the engineering assessment for one section of the field." },
                  { amount: "$250", impact: "Contributes to subsurface drainage installation." },
                  { amount: "$500", impact: "Pays for a significant portion of turf materials." },
                  { amount: "$1,000+", impact: "Makes a major impact on our construction timeline and brings us closer to breaking ground." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-center">
                    <div className="flex-shrink-0 w-24 bg-royalBurgundy text-white font-extrabold text-lg text-center py-3">
                      {item.amount}
                    </div>
                    <p className="text-royalNavy text-opacity-70 font-light text-sm leading-relaxed">
                      {item.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual storytelling */}
      <section
        className="py-24 px-6"
        style={{ background: "linear-gradient(135deg, #273742 0%, #1a2530 100%)" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
            Help Us Build the Field
            <br />
            <span className="text-royalBurgundy">Our Athletes Deserve</span>
          </h2>
          <p className="text-white text-opacity-70 font-light text-xl mb-12 max-w-2xl mx-auto">
            The Riverview Royals have a proud athletic tradition. The next chapter
            of that tradition will be written on a turf field funded by the
            community that loves them most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-12 py-5 transition-all duration-300 hover:bg-opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
            >
              Donate to the Turf Field
            </Link>
            <Link
              href="/sponsors"
              className="inline-flex items-center justify-center border-2 border-white text-white font-extrabold text-sm uppercase tracking-widest px-12 py-5 transition-all duration-300 hover:bg-white hover:text-royalNavy hover:-translate-y-0.5"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
