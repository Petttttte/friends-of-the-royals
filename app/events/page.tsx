import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming Friends of the Royals events — fundraisers, community gatherings, and celebrations supporting Riverview High School students.",
};

const events = [
  {
    id: "parent-prom",
    featured: true,
    title: "Parent Prom Night",
    date: "Spring 2025",
    time: "7:00 PM – 11:00 PM",
    location: "Riverview, NB",
    category: "Annual Fundraiser",
    desc: "An elegant evening for parents, friends, family, and alumni to come together and raise money for prom dresses for students in need. Dress up, dance, and support a cause that matters.",
    href: "/events/parent-prom",
    ticketLink: "https://www.eventbrite.ca",
    color: "bg-royalBurgundy",
  },
  {
    id: "community-fundraiser",
    featured: false,
    title: "Annual Community Fundraiser",
    date: "Summer 2025",
    time: "TBD",
    location: "Riverview, NB",
    category: "Fundraiser",
    desc: "Our signature summer fundraiser bringing the community together to support the Turf Field Project and student programs at Riverview High School.",
    href: "/events",
    ticketLink: "https://www.eventbrite.ca",
    color: "bg-royalNavy",
  },
  {
    id: "alumni-night",
    featured: false,
    title: "RHS Alumni Night",
    date: "Fall 2025",
    time: "TBD",
    location: "Riverview, NB",
    category: "Alumni Event",
    desc: "Reconnect with fellow graduates and celebrate everything that makes Riverview High School great. A night of nostalgia, community, and support for our students.",
    href: "/events",
    ticketLink: "https://www.eventbrite.ca",
    color: "bg-royalBurgundy",
  },
];

export default function EventsPage() {
  const featuredEvent = events.find((e) => e.featured);
  const otherEvents = events.filter((e) => !e.featured);

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
            Join Us
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Events
          </h1>
          <p className="text-white text-opacity-70 font-light text-xl leading-relaxed max-w-2xl">
            Come together with the Riverview community to celebrate, fundraise,
            and support Royals students. Every event is an opportunity to make
            a difference.
          </p>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="bg-royalBurgundy py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-white text-royalBurgundy font-extrabold text-xs uppercase tracking-widest px-3 py-1">
                    Featured Event
                  </span>
                  <span className="bg-white bg-opacity-20 text-white font-extrabold text-xs uppercase tracking-widest px-3 py-1">
                    {featuredEvent.category}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                  {featuredEvent.title}
                </h2>
                <p className="text-white text-opacity-80 font-light text-lg leading-relaxed mb-8">
                  {featuredEvent.desc}
                </p>
                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-3 text-white text-opacity-80">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-light">{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white text-opacity-80">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-light">{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white text-opacity-80">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-light">{featuredEvent.location}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={featuredEvent.href}
                    className="inline-flex items-center justify-center bg-white text-royalBurgundy font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-royalGray hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Event Details
                  </Link>
                  <a
                    href={featuredEvent.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border-2 border-white text-white font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-white hover:text-royalBurgundy hover:-translate-y-0.5"
                  >
                    Get Tickets on Eventbrite
                  </a>
                </div>
              </div>

              {/* Decorative card */}
              <div className="bg-white bg-opacity-10 p-10">
                <div className="text-center py-10">
                  <div className="text-8xl mb-6">🥂</div>
                  <p className="text-white font-extrabold text-2xl mb-4">
                    An Evening to Remember
                  </p>
                  <p className="text-white text-opacity-70 font-light text-lg leading-relaxed">
                    Dress your best. Dance the night away. Support Riverview
                    High School students who deserve their own magical evening.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Eventbrite Embed */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label">Live Listings</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-royalNavy mb-4">
              Buy Tickets via Eventbrite
            </h2>
            <p className="text-royalNavy text-opacity-60 font-light text-lg">
              All Friends of the Royals events are ticketed through Eventbrite
              for secure, easy purchase.
            </p>
          </div>

          <div className="border-2 border-dashed border-royalMauve bg-royalGray p-16 text-center">
            <svg
              className="w-16 h-16 text-royalTan mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
            <p className="text-royalNavy font-extrabold text-xl mb-3">
              Eventbrite Event Calendar
            </p>
            <p className="text-royalNavy text-opacity-60 font-light mb-6 max-w-lg mx-auto">
              Embed your Eventbrite event listings here. To add, copy your
              Eventbrite embed code and replace this placeholder. Alternatively,
              link directly to your organizer page.
            </p>
            <a
              href="https://www.eventbrite.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-opacity-90"
            >
              View Events on Eventbrite
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="bg-royalGray py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">All Events</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-royalNavy">
              Upcoming & Recurring Events
            </h2>
          </div>

          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white flex flex-col md:flex-row overflow-hidden card-hover group">
                <div className={`${event.color} md:w-3 md:h-auto h-3 flex-shrink-0`} />
                <div className="flex flex-col md:flex-row flex-grow p-8 gap-8 items-start md:items-center">
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="bg-royalGray text-royalNavy font-extrabold text-xs uppercase tracking-widest px-3 py-1">
                        {event.category}
                      </span>
                      <span className="text-royalNavy text-opacity-40 font-light text-sm">
                        {event.date} · {event.location}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-royalNavy text-2xl mb-2 group-hover:text-royalBurgundy transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-royalNavy text-opacity-60 font-light leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 flex-shrink-0">
                    <Link
                      href={event.href}
                      className="inline-flex items-center justify-center bg-royalNavy text-white font-extrabold text-xs uppercase tracking-widest px-6 py-3 transition-all duration-300 hover:bg-royalBurgundy"
                    >
                      Details
                    </Link>
                    <a
                      href={event.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border-2 border-royalNavy text-royalNavy font-extrabold text-xs uppercase tracking-widest px-6 py-3 transition-all duration-300 hover:bg-royalNavy hover:text-white"
                    >
                      Buy Tickets
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host an event CTA */}
      <section className="bg-royalNavy py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-5">
            Get Involved
          </p>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Want to Organize an Event?
          </h2>
          <p className="text-white text-opacity-60 font-light text-lg mb-10">
            If you have an idea for a fundraising event or want to help organize
            a Friends of the Royals gathering, we want to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:bg-opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
