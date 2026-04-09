"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((child) => {
        observer.observe(child);
      });
    }
    return () => observer.disconnect();
  }, []);
  return ref;
}

const stats = [
  { number: "10+", label: "Fundraising Initiatives" },
  { number: "3+", label: "Facilities Improved" },
  { number: "15+", label: "Events Orchestrated" },
  { number: "5+", label: "Scholarships Awarded" },
];

const impactCards = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    number: "$30,000+",
    label: "Raised for Students",
    desc: "Funds raised through community events, sponsorships, and individual donations.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    number: "3+",
    label: "Projects Completed",
    desc: "School facility improvements and programs that benefit students every day.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    number: "50+",
    label: "Alumni Connected",
    desc: "Community members united in their commitment to give back to RHS.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    number: "Annual",
    label: "Scholarships",
    desc: "Scholarship funds awarded to deserving Riverview High School graduates.",
  },
];

const upcomingEvents = [
  {
    title: "Parent Prom Night",
    date: "Spring 2025",
    location: "Riverview, NB",
    desc: "An elegant evening for parents, friends, family, and alumni to come together and raise funds for prom dresses for students in need.",
    href: "/events/parent-prom",
    color: "bg-royalBurgundy",
  },
  {
    title: "Community Fundraiser",
    date: "Summer 2025",
    location: "Riverview, NB",
    desc: "Join us for our annual community fundraiser supporting the Turf Field Project and student programs at Riverview High.",
    href: "/events",
    color: "bg-royalNavy",
  },
];

export default function HomePage() {
  const section1 = useReveal();
  const section2 = useReveal();
  const section3 = useReveal();
  const section4 = useReveal();
  const section5 = useReveal();
  const section6 = useReveal();

  const [progressVisible, setProgressVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setProgressVisible(true);
        });
      },
      { threshold: 0.5 }
    );
    if (progressRef.current) observer.observe(progressRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0f1a22 0%, #1a2d3a 40%, #273742 70%, #1a2530 100%)",
          }}
        />
        {/* Decorative geometric elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 right-0 w-96 h-96 opacity-10"
            style={{
              background: "radial-gradient(circle, #8b3f33 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 opacity-10"
            style={{
              background: "radial-gradient(circle, #8b3f33 0%, transparent 70%)",
            }}
          />
          {/* Hexagon decorations */}
          <svg
            className="absolute top-32 right-16 opacity-5"
            width="300"
            height="330"
            viewBox="0 0 100 110"
          >
            <polygon
              points="50,5 93,27.5 93,82.5 50,105 7,82.5 7,27.5"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
          <svg
            className="absolute bottom-24 left-16 opacity-5"
            width="200"
            height="220"
            viewBox="0 0 100 110"
          >
            <polygon
              points="50,5 93,27.5 93,82.5 50,105 7,82.5 7,27.5"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fadeIn">
            <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-6">
              Riverview, New Brunswick
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-none mb-6">
              Friends of the
              <br />
              <span className="text-royalBurgundy">Royals</span>
              <br />
              Alumni Association
            </h1>
            <p className="text-white text-opacity-70 font-light text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Join a vibrant community of former students dedicated to fostering
              connections, empowering the next generation, and creating lasting
              impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
              >
                Donate Today
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center justify-center border-2 border-white text-white font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-white hover:text-royalNavy hover:-translate-y-0.5"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white text-opacity-40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* ============================================================
          WHAT IS FRIENDS OF THE ROYALS
      ============================================================ */}
      <section className="bg-white py-28 px-6" ref={section1}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <p className="section-label">Who We Are</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-royalNavy leading-tight mb-6">
                What is Friends
                <br />
                of the Royals?
              </h2>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-6">
                Friends of the Royals is a volunteer-driven alumni association
                built on one simple belief: that every student at Riverview High
                School deserves the opportunity to thrive. Founded by proud
                graduates of RHS, we channel community pride and alumni
                generosity into real, lasting impact.
              </p>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-8">
                From funding community projects to supporting students who
                cannot afford prom attire, every initiative we undertake is
                rooted in the Royals spirit — pride, community, and the drive to
                be better together.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-royalBurgundy font-extrabold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300"
              >
                Learn Our Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="reveal-right grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-royalGray p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <p className="text-4xl font-extrabold text-royalBurgundy mb-2">
                    {stat.number}
                  </p>
                  <p className="text-royalNavy font-semibold text-sm uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          IMPACT SNAPSHOT
      ============================================================ */}
      <section className="bg-royalGray py-28 px-6" ref={section2}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label">By the Numbers</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy">
              Our Impact Snapshot
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactCards.map((card, i) => (
              <div
                key={i}
                className="reveal bg-white p-8 flex flex-col card-hover"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-royalBurgundy mb-4">{card.icon}</div>
                <p className="text-4xl font-extrabold text-royalBurgundy mb-1">
                  {card.number}
                </p>
                <p className="font-extrabold text-royalNavy text-sm uppercase tracking-wide mb-3">
                  {card.label}
                </p>
                <p className="text-royalNavy text-opacity-60 font-light text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURED PROJECT - TURF FIELD
      ============================================================ */}
      <section className="bg-royalBurgundy py-28 px-6" ref={section3}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <p className="text-white text-opacity-60 font-extrabold text-xs uppercase tracking-widest mb-4">
                Featured Project
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                The Turf Field
                <br />
                Project
              </h2>
              <p className="text-white text-opacity-80 font-light text-lg leading-relaxed mb-6">
                Riverview High School's student athletes deserve a world-class
                playing surface. The Turf Field Project is our largest and most
                ambitious initiative — a full-size artificial turf field that
                will serve RHS students for generations.
              </p>
              <p className="text-white text-opacity-80 font-light text-lg leading-relaxed mb-10">
                This field means year-round practice regardless of weather,
                reduced injury risk, and a facility that brings the community
                together for Friday night games.
              </p>
              <Link
                href="/projects/turf-field"
                className="inline-flex items-center gap-2 bg-white text-royalBurgundy font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-royalGray hover:shadow-lg hover:-translate-y-0.5"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="reveal-right">
              <div className="bg-white bg-opacity-10 p-10">
                <p className="text-white font-extrabold text-sm uppercase tracking-widest mb-2">
                  Fundraising Progress
                </p>
                <div className="flex items-end gap-3 mb-4">
                  <p className="text-5xl font-extrabold text-white">$30,000</p>
                  <p className="text-white text-opacity-60 font-light pb-1">raised</p>
                </div>
                <div
                  className="w-full bg-white bg-opacity-20 h-4 mb-3"
                  ref={progressRef}
                >
                  <div
                    className="h-4 bg-white transition-all duration-1500 ease-in-out"
                    style={{ width: progressVisible ? "30%" : "0%" }}
                  />
                </div>
                <div className="flex justify-between text-white text-opacity-60 text-sm font-light">
                  <span>$0</span>
                  <span>Goal: $100,000</span>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-10 p-4 text-center">
                    <p className="text-2xl font-extrabold text-white">30%</p>
                    <p className="text-white text-opacity-60 text-xs uppercase tracking-wide">Funded</p>
                  </div>
                  <div className="bg-white bg-opacity-10 p-4 text-center">
                    <p className="text-2xl font-extrabold text-white">$70K</p>
                    <p className="text-white text-opacity-60 text-xs uppercase tracking-wide">Remaining</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          UPCOMING EVENTS
      ============================================================ */}
      <section className="bg-white py-28 px-6" ref={section4}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div className="reveal">
              <p className="section-label">Mark Your Calendar</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy">
                Upcoming Events
              </h2>
            </div>
            <Link
              href="/events"
              className="mt-6 md:mt-0 reveal inline-flex items-center gap-2 text-royalBurgundy font-extrabold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300"
            >
              View All Events
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="reveal group card-hover border border-royalGray overflow-hidden">
                <div className={`${event.color} h-3`} />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-royalGray text-royalNavy font-extrabold text-xs uppercase tracking-widest px-3 py-1">
                      {event.date}
                    </span>
                    <span className="text-royalNavy text-opacity-40 text-sm font-light">
                      {event.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-royalNavy mb-3 group-hover:text-royalBurgundy transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-royalNavy text-opacity-70 font-light leading-relaxed mb-6">
                    {event.desc}
                  </p>
                  <Link
                    href={event.href}
                    className="inline-flex items-center gap-2 text-royalBurgundy font-extrabold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300"
                  >
                    Event Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Eventbrite embed placeholder */}
          <div className="mt-12 reveal border-2 border-dashed border-royalMauve bg-royalGray p-12 text-center">
            <svg className="w-12 h-12 text-royalTan mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-royalNavy font-extrabold text-lg mb-2">
              Eventbrite Integration
            </p>
            <p className="text-royalNavy text-opacity-60 font-light">
              Live event listings and ticket sales will appear here via Eventbrite embed.
              <br />
              Visit{" "}
              <a
                href="https://www.eventbrite.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-royalBurgundy underline"
              >
                eventbrite.ca
              </a>{" "}
              to find and purchase tickets for Friends of the Royals events.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SPONSORS
      ============================================================ */}
      <section className="bg-royalGray py-24 px-6" ref={section5}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="section-label">Proud Partners</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy mb-4">
              Our Sponsors
            </h2>
            <p className="text-royalNavy text-opacity-60 font-light text-lg max-w-xl mx-auto">
              These community leaders and businesses make our work possible. Their
              generosity directly supports Riverview High School students.
            </p>
          </div>

          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white h-32 flex items-center justify-center border border-royalMauve card-hover"
              >
                <p className="text-royalNavy text-opacity-30 font-extrabold text-xs uppercase tracking-widest">
                  Sponsor Logo
                </p>
              </div>
            ))}
          </div>

          <div className="text-center reveal">
            <Link
              href="/sponsors"
              className="inline-flex items-center gap-2 text-royalBurgundy font-extrabold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300"
            >
              View All Sponsors & Become a Partner
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          COMMUNITY PRIDE
      ============================================================ */}
      <section
        className="py-28 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #273742 0%, #1a2530 100%)" }}
        ref={section6}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -right-16 top-0 opacity-5" width="400" height="440" viewBox="0 0 100 110">
            <polygon points="50,5 93,27.5 93,82.5 50,105 7,82.5 7,27.5" fill="none" stroke="white" strokeWidth="1" />
          </svg>
          <svg className="absolute -left-16 bottom-0 opacity-5" width="300" height="330" viewBox="0 0 100 110">
            <polygon points="50,5 93,27.5 93,82.5 50,105 7,82.5 7,27.5" fill="none" stroke="white" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center reveal">
          <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-6">
            Royals Forever
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
            Once a Royal,
            <br />
            <span className="text-royalBurgundy">Always a Royal.</span>
          </h2>
          <p className="text-white text-opacity-70 font-light text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            The Royals spirit doesn&apos;t fade when you walk across that stage.
            It lives in every alumnus who shows up for the next generation — in
            every dollar donated, every event attended, every hand raised in
            support of Riverview High School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center border-2 border-white text-white font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-white hover:text-royalNavy hover:-translate-y-0.5"
            >
              Our Story
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
            >
              Support the Royals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
