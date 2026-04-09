import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parent Prom Night",
  description:
    "Parent Prom Night — an elegant fundraising evening for parents, friends, family, and alumni raising money for prom dresses for Riverview High School students in need.",
};

const gallery = [
  { label: "A Night of Elegance", desc: "Guests arrive dressed to impress for a memorable evening." },
  { label: "Community Dancing", desc: "Laughter, music, and memories made together." },
  { label: "Fundraising in Style", desc: "Every ticket purchase supports prom dresses for students in need." },
  { label: "Alumni Reunion", desc: "Reconnecting with fellow Royals graduates from every era." },
  { label: "The Giving Wall", desc: "Guests pledge support for the students who need it most." },
  { label: "Royal Night Out", desc: "Celebrating community, pride, and the Royals spirit." },
];

export default function ParentPromPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-28 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #8b3f33 0%, #6d2f24 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10"
            style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
          />
          <svg className="absolute left-0 bottom-0 opacity-5" width="400" height="440" viewBox="0 0 100 110">
            <polygon points="50,5 93,27.5 93,82.5 50,105 7,82.5 7,27.5" fill="none" stroke="white" strokeWidth="1" />
          </svg>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Link
              href="/events"
              className="text-white text-opacity-50 font-light text-sm hover:text-opacity-80 transition-colors duration-200"
            >
              Events
            </Link>
            <span className="text-white text-opacity-30">/</span>
            <span className="text-white font-semibold text-sm">Parent Prom</span>
          </div>
          <p className="text-white text-opacity-60 font-extrabold text-xs uppercase tracking-widest mb-5">
            Annual Fundraiser
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Parent Prom
            <br />
            Night
          </h1>
          <p className="text-white text-opacity-80 font-light text-2xl leading-relaxed max-w-2xl mb-10">
            An evening for Parents, Friends, Family, and Alumni to raise money
            for prom dresses for students in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.eventbrite.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-royalBurgundy font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-royalGray hover:shadow-2xl hover:-translate-y-0.5"
            >
              Get Tickets on Eventbrite
            </a>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center border-2 border-white text-white font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-white hover:text-royalBurgundy hover:-translate-y-0.5"
            >
              Donate Instead
            </Link>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label">About the Event</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy leading-tight mb-6">
                What is Parent
                <br />
                Prom Night?
              </h2>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-6">
                Parent Prom Night is one of Friends of the Royals&apos; most beloved
                annual traditions. It&apos;s a formal evening — think gowns, tuxedos,
                dinner, dancing, and an incredible sense of community — designed
                specifically for parents, grandparents, family members, alumni,
                and friends of Riverview High School.
              </p>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-6">
                The concept is simple and beautiful: the adults get their own
                &quot;prom night,&quot; complete with all the elegance and fun of the real
                thing — and every ticket purchased goes directly to funding prom
                dresses for RHS students who cannot afford one.
              </p>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed">
                It&apos;s a night where the Riverview community comes alive. Where
                alumni from every graduating class reconnect over shared
                memories. Where parents and friends celebrate the school that
                means so much to so many — all while ensuring the next
                generation of Royals gets the prom night they deserve.
              </p>
            </div>

            {/* Event Info Card */}
            <div className="space-y-4">
              <div className="bg-royalNavy p-8">
                <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-6">
                  Event Details
                </p>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-royalBurgundy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-white font-extrabold">Date</p>
                      <p className="text-white text-opacity-60 font-light">Spring 2025 — Check Eventbrite for exact date</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-royalBurgundy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-white font-extrabold">Time</p>
                      <p className="text-white text-opacity-60 font-light">7:00 PM – 11:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-royalBurgundy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-white font-extrabold">Location</p>
                      <p className="text-white text-opacity-60 font-light">Riverview, New Brunswick</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-royalBurgundy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <p className="text-white font-extrabold">Who Can Attend</p>
                      <p className="text-white text-opacity-60 font-light">Parents, Family, Alumni, Friends of RHS (19+)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-royalBurgundy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <div>
                      <p className="text-white font-extrabold">Dress Code</p>
                      <p className="text-white text-opacity-60 font-light">Formal — gowns, suits, and tuxedos welcome</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://www.eventbrite.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-8 py-5 transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5"
              >
                Get Tickets on Eventbrite
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why it Supports RHS Students */}
      <section className="bg-royalGray py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">The Cause</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy leading-tight mb-6">
                Why This Matters for
                <br />
                RHS Students
              </h2>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-6">
                Prom is one of high school&apos;s most iconic milestones. It is a
                night of celebration, self-expression, and shared memory that
                students look forward to for years. But for students whose
                families face financial hardship, the cost of a prom dress can
                be an insurmountable barrier.
              </p>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed mb-6">
                No Riverview High School student should have to miss prom because
                they cannot afford to attend. Parent Prom Night exists to change
                that. Every ticket sold, every drink purchased, every dollar
                raised goes directly to ensuring students who need a dress can
                have one — and can attend their prom with pride and dignity.
              </p>
              <p className="text-royalNavy text-opacity-70 font-light text-lg leading-relaxed">
                This is the Royals way. We show up for each other. We make sure
                no one is left out of the moments that matter most.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-royalBurgundy p-10">
                <div className="text-6xl mb-5">👗</div>
                <p className="text-white font-extrabold text-2xl mb-3">
                  Every Ticket = A Dress
                </p>
                <p className="text-white text-opacity-80 font-light leading-relaxed">
                  The funds raised from Parent Prom Night go directly to
                  purchasing prom dresses for RHS students in need. Your night
                  out gives a student their moment to shine.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-royalNavy p-6 text-center">
                  <p className="text-white font-extrabold text-3xl mb-1">50+</p>
                  <p className="text-white text-opacity-50 font-semibold text-xs uppercase tracking-wide">Dresses Donated</p>
                </div>
                <div className="bg-white p-6 text-center border border-royalMauve">
                  <p className="text-royalBurgundy font-extrabold text-3xl mb-1">100%</p>
                  <p className="text-royalNavy text-opacity-50 font-semibold text-xs uppercase tracking-wide">to Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">Past Events</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy mb-4">
              Evening Gallery
            </h2>
            <p className="text-royalNavy text-opacity-60 font-light text-lg">
              Moments from past Parent Prom Nights — a celebration of
              community, generosity, and Royals pride.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item, i) => (
              <div
                key={i}
                className={`relative aspect-square flex items-end overflow-hidden group cursor-pointer ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                style={{
                  background: `linear-gradient(135deg, ${
                    i % 3 === 0 ? "#273742, #1a2530" : i % 3 === 1 ? "#8b3f33, #6d2f24" : "#dbd3d8, #d1b6a2"
                  })`,
                }}
              >
                <div className="absolute inset-0 bg-royalNavy opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="relative z-10 p-6">
                  <p className="text-white font-extrabold text-sm">{item.label}</p>
                  <p className="text-white text-opacity-60 font-light text-xs">{item.desc}</p>
                </div>
                {/* Image placeholder indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-royalNavy text-opacity-40 font-light text-sm mt-4">
            Photos from past events — add real photography here to bring the event to life.
          </p>
        </div>
      </section>

      {/* Eventbrite Embed */}
      <section className="bg-royalGray py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label">Purchase Tickets</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-royalNavy mb-4">
              Get Your Tickets
            </h2>
            <p className="text-royalNavy text-opacity-60 font-light text-lg">
              Tickets are available through Eventbrite. Reserve your spot for an
              unforgettable evening.
            </p>
          </div>

          <div className="bg-white border-2 border-dashed border-royalMauve p-16 text-center">
            <svg
              className="w-14 h-14 text-royalTan mx-auto mb-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
            <p className="text-royalNavy font-extrabold text-xl mb-3">
              Eventbrite Ticket Widget
            </p>
            <p className="text-royalNavy text-opacity-60 font-light mb-6 max-w-lg mx-auto">
              Paste your Eventbrite event embed code here to show live ticket
              availability and allow direct purchases. Contact your Eventbrite
              organizer account to generate the embed code.
            </p>
            <a
              href="https://www.eventbrite.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-opacity-90"
            >
              Purchase Tickets on Eventbrite
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #8b3f33 0%, #6d2f24 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Be Part of the Evening
          </h2>
          <p className="text-white text-opacity-80 font-light text-lg mb-10">
            Your presence at Parent Prom Night means a student at Riverview
            High School will have the prom dress they deserve. That&apos;s the power
            of showing up for your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.eventbrite.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-royalBurgundy font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-royalGray hover:shadow-2xl hover:-translate-y-0.5"
            >
              Get Tickets
            </a>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center border-2 border-white text-white font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-white hover:text-royalBurgundy hover:-translate-y-0.5"
            >
              Donate Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
