"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
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

const upcomingEvents = [
  { date: "MAY 31, 2025", title: "Annual Fundraiser Night", href: "/events" },
  { date: "JUNE 15, 2025", title: "Scholarship Awards Ceremony", href: "/events" },
  { date: "AUGUST 10, 2025", title: "Community Meet & Greet", href: "/events" },
];

export default function HomePage() {
  const s1 = useReveal();
  const s2 = useReveal();
  const s3 = useReveal();
  const s4 = useReveal();
  const s5 = useReveal();

  const [progressVisible, setProgressVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setProgressVisible(true); }); },
      { threshold: 0.5 }
    );
    if (progressRef.current) observer.observe(progressRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ============================================================
          ABOVE-THE-FOLD: 5-panel magazine grid, all visible no scroll
          Cols: navy sidebar | grad photo | events | turf | donate
      ============================================================ */}
      <section
        className="overflow-hidden w-full"
        style={{
          height: "calc(100vh - 70px)",
          minHeight: "580px",
          maxHeight: "900px",
          display: "grid",
          gridTemplateColumns: "1.6fr 2.4fr 1.5fr 1.3fr 1.2fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        {/* ══ COL 1 (rows 1-2): Navy sidebar — headline, CTAs, 6 stats ══ */}
        <div
          className="bg-royalNavy flex flex-col justify-between p-4 lg:p-5"
          style={{ gridRow: "1 / 3" }}
        >
          <div>
            <p className="text-royalTan font-extrabold text-[10px] uppercase tracking-widest mb-2">
              Riverview, New Brunswick · Est. Alumni Association
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-2">
              Fellow Royals,
              <br />
              <span className="text-royalBurgundy">Helping Royals.</span>
            </h1>
            <p className="text-white/60 font-light text-xs leading-relaxed mb-4">
              We recognize character. We support potential. We build futures —
              for every student at Riverview High School.
            </p>
            <div className="flex flex-col gap-2 mb-4">
              <Link href="/donate"
                className="flex items-center justify-center gap-1 bg-royalBurgundy text-white font-extrabold text-[10px] uppercase tracking-widest px-3 py-2 hover:bg-opacity-90 transition-all duration-200">
                ♥ Support a Student Today
              </Link>
              <Link href="/about"
                className="flex items-center justify-center border border-white/30 text-white font-extrabold text-[10px] uppercase tracking-widest px-3 py-2 hover:border-white transition-all duration-200">
                Apply for a Scholarship
              </Link>
              <Link href="/events"
                className="flex items-center justify-center border border-white/30 text-white font-extrabold text-[10px] uppercase tracking-widest px-3 py-2 hover:border-white transition-all duration-200">
                View Upcoming Events
              </Link>
              <Link href="/sponsors"
                className="flex items-center justify-center border border-royalBurgundy/50 text-royalTan font-extrabold text-[10px] uppercase tracking-widest px-3 py-2 hover:border-royalBurgundy transition-all duration-200">
                Become a Sponsor
              </Link>
            </div>
            <div className="border-t border-white/10 pt-3">
              <p className="text-white/40 text-[9px] uppercase tracking-widest mb-2">Latest</p>
              <p className="text-white/70 text-xs font-semibold leading-snug">
                🎓 Scholarship applications open for 2025 graduates
              </p>
            </div>
          </div>

          {/* 6 stats in 3×2 grid */}
          <div className="grid grid-cols-3 gap-1.5 mt-3">
            {[
              { number: "$5K+",  label: "Scholarships" },
              { number: "100+",  label: "Students"     },
              { number: "15+",   label: "Events"       },
              { number: "$30K+", label: "Raised"       },
              { number: "50+",   label: "Alumni"       },
              { number: "3+",    label: "Projects"     },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 border border-white/10 p-2 text-center">
                <p className="text-sm font-extrabold text-royalBurgundy leading-none">{s.number}</p>
                <p className="text-white/50 text-[9px] uppercase tracking-wide mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ COL 2 (rows 1-2): Graduation photo — CSS filtered red+white ══ */}
        <div className="relative overflow-hidden" style={{ gridRow: "1 / 3" }}>
          {/* CSS filter: sepia → hue-rotate → red, bright highlights stay white */}
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
            alt="Riverview graduates celebrating"
            className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
            style={{ filter: "sepia(1) hue-rotate(315deg) saturate(6) brightness(0.88)" }}
          />
          {/* Soft white screen to lift highlights toward white */}
          <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.08)", mixBlendMode: "screen" }} />
          {/* Bottom gradient + text */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-royalNavy/95 via-royalNavy/40 to-transparent px-5 py-5">
            <p className="text-white font-extrabold text-lg leading-tight">
              Every student deserves a champion.
            </p>
            <p className="text-royalTan text-[10px] uppercase tracking-widest mt-1">
              Friends of the Royals — Riverview High School
            </p>
          </div>
          {/* Top badge */}
          <div className="absolute top-3 right-3 bg-royalBurgundy px-3 py-1">
            <p className="text-white font-extrabold text-[10px] uppercase tracking-widest">Class of 2025</p>
          </div>
        </div>

        {/* ══ COL 3 ROW 1: White events panel ══ */}
        <div className="bg-white border-l-4 border-royalBurgundy flex flex-col p-4 overflow-hidden">
          <p className="text-royalBurgundy font-extrabold text-[10px] uppercase tracking-widest mb-3">
            📅 Upcoming Events
          </p>
          <div className="space-y-2.5 flex-1">
            {[
              { date: "MAY 31", title: "Annual Fundraiser Night", loc: "Riverview, NB" },
              { date: "JUN 15", title: "Scholarship Awards Ceremony", loc: "RHS Auditorium" },
              { date: "AUG 10", title: "Community Meet & Greet", loc: "Riverview, NB" },
              { date: "FALL",   title: "Parent Prom Night", loc: "TBD" },
            ].map((event, i) => (
              <Link key={i} href="/events" className="flex gap-2 group">
                <span className="text-royalBurgundy font-extrabold text-[10px] w-9 flex-shrink-0 mt-0.5">{event.date}</span>
                <div>
                  <p className="text-royalNavy font-semibold text-xs leading-tight group-hover:text-royalBurgundy transition-colors duration-150">{event.title}</p>
                  <p className="text-royalNavy/45 text-[10px]">{event.loc}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/events"
            className="mt-3 text-royalBurgundy font-extrabold text-[10px] uppercase tracking-widest inline-flex items-center gap-1 hover:gap-2 transition-all duration-200">
            View All Events →
          </Link>
        </div>

        {/* ══ COL 4 ROW 1: Turf Field progress ══ */}
        <div className="bg-royalNavy flex flex-col p-4 overflow-hidden">
          <p className="text-royalTan font-extrabold text-[10px] uppercase tracking-widest mb-2">
            🏈 Featured Project
          </p>
          <p className="text-white font-extrabold text-sm leading-tight mb-1">Turf Field Initiative</p>
          <p className="text-white/55 text-[10px] leading-snug mb-3">
            Bringing a world-class artificial turf field to RHS student athletes.
          </p>
          <div className="mb-1">
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-royalBurgundy font-extrabold">$30,000 raised</span>
              <span className="text-white/50">Goal: $100K</span>
            </div>
            <div className="w-full bg-white/20 h-2">
              <div className="h-2 bg-royalBurgundy" style={{ width: "30%" }} />
            </div>
            <p className="text-white/40 text-[10px] mt-1">30% funded · $70,000 remaining</p>
          </div>
          <div className="grid grid-cols-2 gap-1.5 mt-auto">
            <div className="bg-white/10 p-2 text-center">
              <p className="text-sm font-extrabold text-white">30%</p>
              <p className="text-white/45 text-[9px] uppercase">Funded</p>
            </div>
            <div className="bg-white/10 p-2 text-center">
              <p className="text-sm font-extrabold text-white">$70K</p>
              <p className="text-white/45 text-[9px] uppercase">To Go</p>
            </div>
          </div>
          <Link href="/projects/turf-field"
            className="mt-2 text-royalTan font-extrabold text-[10px] uppercase tracking-widest hover:text-white transition-colors duration-200">
            Learn More →
          </Link>
        </div>

        {/* ══ COL 5 ROW 1: Sponsor a student photo panel ══ */}
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=600&q=80"
            alt="Student supported by Friends of the Royals"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0" style={{ background: "rgba(39,55,66,0.78)" }} />
          <div className="relative z-10 flex flex-col justify-between h-full p-4">
            <p className="text-royalTan font-extrabold text-[10px] uppercase tracking-widest">Student Stories</p>
            <div>
              <p className="text-white font-extrabold text-xs leading-snug mb-1">
                "This scholarship changed everything for me."
              </p>
              <p className="text-white/55 text-[10px] mb-3">— Recent Recipient</p>
              <Link href="/news"
                className="text-royalTan font-extrabold text-[10px] uppercase tracking-widest hover:text-white transition-colors duration-200">
                Read Stories →
              </Link>
            </div>
          </div>
        </div>

        {/* ══ COL 3 ROW 2: Mission + About ══ */}
        <div className="bg-royalGray border-l-4 border-royalNavy flex flex-col p-4 overflow-hidden">
          <p className="text-royalNavy font-extrabold text-[10px] uppercase tracking-widest mb-2">Our Mission</p>
          <p className="text-royalNavy font-extrabold text-sm leading-tight mb-2">
            Every Student Deserves a Champion
          </p>
          <p className="text-royalNavy/65 text-[11px] leading-relaxed flex-1">
            We recognize character. We support potential. We build futures — for every student at RHS regardless of their circumstances.
          </p>
          <div className="mt-3 space-y-1">
            {["Scholarships", "Mentorship", "Community Events", "Facility Projects"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royalBurgundy flex-shrink-0" />
                <p className="text-royalNavy/70 text-[10px] font-semibold">{item}</p>
              </div>
            ))}
          </div>
          <Link href="/about"
            className="mt-3 text-royalBurgundy font-extrabold text-[10px] uppercase tracking-widest hover:underline transition-all duration-200">
            Learn More →
          </Link>
        </div>

        {/* ══ COL 4 ROW 2: Sponsors ══ */}
        <div className="bg-white flex flex-col p-4 overflow-hidden border-t border-royalMauve">
          <p className="text-royalNavy font-extrabold text-[10px] uppercase tracking-widest mb-2">Proud Sponsors</p>
          <div className="grid grid-cols-2 gap-1.5 flex-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-royalGray border border-royalMauve flex items-center justify-center">
                <p className="text-royalNavy/30 text-[9px] font-extrabold uppercase text-center px-1">Sponsor</p>
              </div>
            ))}
          </div>
          <Link href="/sponsors"
            className="mt-2 text-royalBurgundy font-extrabold text-[10px] uppercase tracking-widest hover:underline">
            Become a Partner →
          </Link>
        </div>

        {/* ══ COL 5 ROW 2: Donate CTA ══ */}
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
            alt="Royals community"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(139,63,51,0.90)" }} />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
            <p className="text-2xl font-extrabold text-white mb-0.5">$30K+</p>
            <p className="text-white/60 text-[10px] uppercase tracking-widest mb-3">Raised</p>
            <p className="text-white/70 text-[10px] leading-snug mb-3">$25 · $100 · $500<br/>Every dollar counts</p>
            <Link href="/donate"
              className="bg-white text-royalBurgundy font-extrabold text-[10px] uppercase tracking-widest px-4 py-2 hover:bg-royalGray transition-all duration-200">
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          EVERY STUDENT DESERVES A CHAMPION
      ============================================================ */}
      <section className="bg-royalGray py-20 px-6" ref={s1}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <p className="section-label">Our Mission</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-royalNavy mb-6">
              Every Student Deserves a Champion
            </h2>
            <p className="text-royalNavy/70 font-light text-lg leading-relaxed mb-4">
              Some students have the drive — but not always the support. Friends of the Royals exists to
              ensure that every student at Riverview High School has the opportunity to succeed, regardless
              of their circumstances.
            </p>
            <p className="text-royalNavy/70 font-light text-lg leading-relaxed mb-8">
              We recognize character. We support potential. We build futures.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-2 border-royalNavy text-royalNavy font-extrabold text-sm uppercase tracking-widest px-6 py-3 hover:bg-royalNavy hover:text-white transition-all duration-300"
            >
              Learn How You Can Help
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="reveal-right space-y-4">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />,
                number: "$5,000+",
                label: "Awarded in Scholarships Each Year",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
                number: "100+",
                label: "Students Supported",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
                number: "1",
                label: "Strong Community Giving Back",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white flex items-center gap-6 p-6 border-l-4 border-royalBurgundy shadow-sm">
                <div className="text-royalBurgundy flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-royalNavy">{item.number}</p>
                  <p className="text-royalNavy/60 font-light text-sm uppercase tracking-wide">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIAL (left photo) + DONATION TIERS (right white)
      ============================================================ */}
      <section className="grid grid-cols-1 lg:grid-cols-2" ref={s2}>
        {/* Left — student photo + burgundy quote overlay */}
        <div className="relative min-h-[480px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80"
            alt="Scholarship recipient"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0" style={{ background: "rgba(139,63,51,0.83)" }} />
          <div className="relative z-10 p-10 md:p-14 flex flex-col justify-end h-full">
            <p className="text-white/50 font-extrabold text-5xl leading-none mb-2">"</p>
            <blockquote className="text-white font-extrabold text-2xl md:text-3xl leading-tight mb-4">
              This scholarship helped me take my next step.
            </blockquote>
            <p className="text-white/75 font-light text-sm leading-relaxed mb-5">
              Receiving support from Friends of the Royals meant more than financial help — it showed
              me my community believed in me.
            </p>
            <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest">
              — Recent Scholarship Recipient
            </p>
            <Link
              href="/news"
              className="mt-6 self-start border border-white/40 text-white font-extrabold text-xs uppercase tracking-widest px-5 py-3 hover:bg-white hover:text-royalBurgundy transition-all duration-300"
            >
              Read More Stories
            </Link>
          </div>
        </div>

        {/* Right — donation tiers */}
        <div className="bg-white px-10 py-14 md:px-14 flex flex-col justify-center reveal">
          <p className="section-label">Make a Difference</p>
          <h2 className="text-3xl font-extrabold text-royalNavy mb-8">Your Support Changes Lives</h2>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { amount: "$25", desc: "Helps provide student resources" },
              { amount: "$100", desc: "Supports scholarship funding" },
              { amount: "$500", desc: "Directly impacts a student's future" },
            ].map((tier, i) => (
              <div
                key={i}
                className="text-center border-2 border-royalMauve p-5 hover:border-royalBurgundy transition-colors duration-300 cursor-pointer"
              >
                <p className="text-2xl font-extrabold text-royalNavy mb-2">{tier.amount}</p>
                <p className="text-royalNavy/60 font-light text-xs leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/donate"
            className="flex items-center justify-center bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest py-5 transition-all duration-300 hover:bg-opacity-90 hover:shadow-xl hover:-translate-y-0.5"
          >
            Donate Now
          </Link>
        </div>
      </section>

      {/* ============================================================
          MORE THAN DONATIONS — COMMUNITY INVOLVEMENT
      ============================================================ */}
      <section className="bg-white py-20 px-6 border-t border-royalGray" ref={s3}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="section-label">Get Involved</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-royalNavy">
              More Than Donations — Be Part of the Community
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            {[
              {
                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                title: "Mentor a Student",
                desc: "Make a lasting impact.",
              },
              {
                d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                title: "Volunteer at Events",
                desc: "Help create memorable experiences.",
              },
              {
                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Sponsor a Scholarship",
                desc: "Invest in a student's future.",
              },
              {
                d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
                title: "Spread the Word",
                desc: "Every voice makes a difference.",
              },
            ].map((item, i) => (
              <div key={i} className="reveal text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-20 h-20 bg-royalGray flex items-center justify-center mx-auto mb-4 text-royalBurgundy">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.d} />
                  </svg>
                </div>
                <p className="font-extrabold text-royalNavy text-sm uppercase tracking-wide mb-2">{item.title}</p>
                <p className="text-royalNavy/55 font-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center reveal">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-2 border-royalNavy text-royalNavy font-extrabold text-sm uppercase tracking-widest px-8 py-4 hover:bg-royalNavy hover:text-white transition-all duration-300"
            >
              Join the Royals Community
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          UPCOMING EVENTS (left navy) + VENUE PHOTO (right)
      ============================================================ */}
      <section className="grid grid-cols-1 lg:grid-cols-2" ref={s4}>
        <div className="bg-royalNavy px-10 py-16 md:px-14 flex flex-col justify-center">
          <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-4">Stay Connected</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Upcoming Events</h2>
          <p className="text-white/55 font-light mb-10">Show your support.</p>
          <div className="space-y-6 mb-10">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="reveal flex items-start gap-4" style={{ transitionDelay: `${i * 100}ms` }}>
                <svg className="w-5 h-5 text-royalBurgundy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-royalBurgundy font-extrabold text-xs uppercase tracking-widest mb-0.5">{event.date}</p>
                  <p className="text-white font-semibold">{event.title}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/events"
            className="self-start inline-flex items-center gap-2 border-2 border-white text-white font-extrabold text-sm uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-royalNavy transition-all duration-300"
          >
            View All Events
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="relative min-h-80 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80"
            alt="Friends of the Royals community event"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "rgba(39,55,66,0.30)" }} />
        </div>
      </section>

      {/* ============================================================
          TURF FIELD PROJECT
      ============================================================ */}
      <section className="bg-royalBurgundy py-24 px-6" ref={s5}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <p className="text-white/55 font-extrabold text-xs uppercase tracking-widest mb-4">Featured Project</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              The Turf Field Project
            </h2>
            <p className="text-white/80 font-light text-lg leading-relaxed mb-10">
              Riverview High School's student athletes deserve a world-class playing surface. This full-size
              artificial turf field will serve RHS students for generations — year-round practice, reduced
              injuries, and a facility the whole community rallies around.
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
            <div className="bg-white/10 p-10">
              <p className="text-white font-extrabold text-sm uppercase tracking-widest mb-2">Fundraising Progress</p>
              <div className="flex items-end gap-3 mb-4">
                <p className="text-5xl font-extrabold text-white">$30,000</p>
                <p className="text-white/60 font-light pb-1">raised</p>
              </div>
              <div className="w-full bg-white/20 h-4 mb-3" ref={progressRef}>
                <div
                  className="h-4 bg-white transition-all duration-1500 ease-in-out"
                  style={{ width: progressVisible ? "30%" : "0%" }}
                />
              </div>
              <div className="flex justify-between text-white/60 text-sm font-light mb-8">
                <span>$0</span>
                <span>Goal: $100,000</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 text-center">
                  <p className="text-2xl font-extrabold text-white">30%</p>
                  <p className="text-white/60 text-xs uppercase tracking-wide">Funded</p>
                </div>
                <div className="bg-white/10 p-4 text-center">
                  <p className="text-2xl font-extrabold text-white">$70K</p>
                  <p className="text-white/60 text-xs uppercase tracking-wide">Remaining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SPONSORS
      ============================================================ */}
      <section className="bg-royalGray py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Proud Partners</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-royalNavy mb-3">Our Sponsors</h2>
            <p className="text-royalNavy/60 font-light max-w-lg mx-auto">
              These community leaders make our work possible. Their generosity directly supports Riverview students.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white h-28 flex items-center justify-center border border-royalMauve card-hover">
                <p className="text-royalNavy/30 font-extrabold text-xs uppercase tracking-widest">Sponsor Logo</p>
              </div>
            ))}
          </div>
          <div className="text-center">
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
          BOTTOM CTA STRIP
      ============================================================ */}
      <section
        className="py-16 px-6"
        style={{ background: "linear-gradient(135deg, #273742 0%, #1a2530 100%)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white text-center md:text-left leading-tight">
            Be the reason a student gets<br className="hidden md:block" /> their opportunity.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-opacity-90 hover:shadow-xl hover:-translate-y-0.5"
            >
              Donate Today
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center border-2 border-white text-white font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-white hover:text-royalNavy hover:-translate-y-0.5"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
