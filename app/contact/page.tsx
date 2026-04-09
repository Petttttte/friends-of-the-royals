"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";

// Note: metadata export won't work in client components
// For SEO, consider converting to server component or using generateMetadata

const contactReasons = [
  "General Inquiry",
  "Donation Question",
  "Sponsorship Opportunity",
  "Volunteer Interest",
  "Event Information",
  "Media / Press",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call — replace with actual form submission logic
    // e.g., send to a backend route or use a service like Formspree
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-royalGray flex items-center justify-center px-6 pt-20">
        <div className="max-w-md w-full bg-white p-12 text-center">
          <div className="w-20 h-20 bg-royalNavy flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-royalNavy mb-4">
            Message Sent!
          </h2>
          <p className="text-royalNavy text-opacity-70 font-light leading-relaxed mb-8">
            Thank you for reaching out, {formData.name.split(" ")[0]}. We&apos;ll get
            back to you at{" "}
            <span className="font-semibold text-royalNavy">{formData.email}</span>{" "}
            as soon as possible.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="block text-center bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-opacity-90"
            >
              Back to Home
            </Link>
            <Link
              href="/donate"
              className="block text-center border-2 border-royalNavy text-royalNavy font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-royalNavy hover:text-white"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
            Reach Out
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-white text-opacity-70 font-light text-xl leading-relaxed max-w-2xl">
            Questions about donating, sponsoring, volunteering, or attending
            events? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-royalGray py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-10">
              <h2 className="text-3xl font-extrabold text-royalNavy mb-2">
                Send Us a Message
              </h2>
              <p className="text-royalNavy text-opacity-60 font-light mb-8">
                Fill out the form below and a member of the Friends of the
                Royals team will respond within 2 business days.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-royalNavy font-semibold text-sm mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border-2 border-royalMauve font-light text-royalNavy focus:outline-none focus:border-royalBurgundy transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-royalNavy font-semibold text-sm mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border-2 border-royalMauve font-light text-royalNavy focus:outline-none focus:border-royalBurgundy transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-royalNavy font-semibold text-sm mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(506) 555-0000"
                      className="w-full px-4 py-3 border-2 border-royalMauve font-light text-royalNavy focus:outline-none focus:border-royalBurgundy transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-royalNavy font-semibold text-sm mb-2">
                      Reason for Contact *
                    </label>
                    <select
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-royalMauve font-light text-royalNavy focus:outline-none focus:border-royalBurgundy transition-colors duration-200 bg-white appearance-none"
                    >
                      <option value="">Select a reason...</option>
                      {contactReasons.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-royalNavy font-semibold text-sm mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is your message about?"
                    className="w-full px-4 py-3 border-2 border-royalMauve font-light text-royalNavy focus:outline-none focus:border-royalBurgundy transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-royalNavy font-semibold text-sm mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help, or share your thoughts..."
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-royalMauve font-light text-royalNavy focus:outline-none focus:border-royalBurgundy transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest py-5 transition-all duration-300 hover:bg-opacity-90 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="bg-royalNavy p-8">
                <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-6">
                  Contact Information
                </p>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-royalBurgundy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-white font-extrabold text-sm mb-0.5">Email</p>
                      <a
                        href="mailto:info@friendsoftheroyals.ca"
                        className="text-white text-opacity-60 font-light text-sm hover:text-opacity-100 transition-colors duration-200"
                      >
                        info@friendsoftheroyals.ca
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-royalBurgundy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-white font-extrabold text-sm mb-0.5">Location</p>
                      <p className="text-white text-opacity-60 font-light text-sm">
                        Riverview, New Brunswick
                        <br />
                        Canada
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-royalBurgundy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-white font-extrabold text-sm mb-0.5">Response Time</p>
                      <p className="text-white text-opacity-60 font-light text-sm">
                        Within 2 business days
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-8 pt-6 border-t border-white border-opacity-10">
                  <p className="text-white text-opacity-40 font-semibold text-xs uppercase tracking-widest mb-4">
                    Follow Us
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-white border-opacity-20 flex items-center justify-center text-white text-opacity-50 hover:text-white hover:border-royalBurgundy hover:bg-royalBurgundy transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-white border-opacity-20 flex items-center justify-center text-white text-opacity-50 hover:text-white hover:border-royalBurgundy hover:bg-royalBurgundy transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="17.5" cy="6.5" r="1.5"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Location placeholder */}
              <div className="bg-white overflow-hidden">
                <div
                  className="h-48 flex items-center justify-center relative"
                  style={{
                    background: "linear-gradient(135deg, #eff1f3 0%, #dbd3d8 100%)",
                  }}
                >
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 text-royalNavy text-opacity-30 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="text-royalNavy text-opacity-40 font-extrabold text-xs uppercase tracking-widest">
                      Riverview, NB
                    </p>
                    <p className="text-royalNavy text-opacity-30 font-light text-xs mt-1">
                      Map embed can go here
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-extrabold text-royalNavy text-sm">Riverview, New Brunswick</p>
                  <p className="text-royalNavy text-opacity-50 font-light text-xs mt-1">
                    Home of the Royals — Serving the community since day one.
                  </p>
                </div>
              </div>

              {/* Quick links */}
              <div className="bg-royalBurgundy p-8">
                <p className="text-white font-extrabold text-xs uppercase tracking-widest mb-5">
                  Quick Actions
                </p>
                <div className="space-y-3">
                  <Link
                    href="/donate"
                    className="flex items-center justify-between text-white font-semibold text-sm hover:text-opacity-70 transition-colors duration-200"
                  >
                    Make a Donation
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <div className="w-full h-px bg-white bg-opacity-20" />
                  <Link
                    href="/events"
                    className="flex items-center justify-between text-white font-semibold text-sm hover:text-opacity-70 transition-colors duration-200"
                  >
                    View Events
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <div className="w-full h-px bg-white bg-opacity-20" />
                  <Link
                    href="/sponsors"
                    className="flex items-center justify-between text-white font-semibold text-sm hover:text-opacity-70 transition-colors duration-200"
                  >
                    Become a Sponsor
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <div className="w-full h-px bg-white bg-opacity-20" />
                  <Link
                    href="/projects/turf-field"
                    className="flex items-center justify-between text-white font-semibold text-sm hover:text-opacity-70 transition-colors duration-200"
                  >
                    Turf Field Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-royalNavy">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How is my donation used?",
                a: "100% of donations go directly to Friends of the Royals programs, including the Turf Field Project, scholarship fund, prom dress program, and school facility improvements. We are a volunteer-led organization with minimal overhead.",
              },
              {
                q: "How do I get tickets for Parent Prom Night?",
                a: "Tickets for Parent Prom Night and all Friends of the Royals events are available through Eventbrite. Visit our Events page for links to purchase tickets.",
              },
              {
                q: "Can my business become a sponsor?",
                a: "Absolutely. We offer Platinum, Gold, and Community sponsor tiers with varying benefits and investment levels. Visit our Sponsors page or contact us directly to discuss partnership opportunities.",
              },
              {
                q: "How do RHS students apply for the prom dress program?",
                a: "Students in need of prom dress assistance should contact Riverview High School guidance counselors, who coordinate with Friends of the Royals to connect eligible students with available dresses.",
              },
              {
                q: "Is my donation tax deductible?",
                a: "Please contact us to confirm current charitable registration status and eligibility for tax receipts. We are committed to transparency about our financial status.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-royalGray p-6">
                <p className="font-extrabold text-royalNavy mb-2">{item.q}</p>
                <p className="text-royalNavy text-opacity-60 font-light leading-relaxed text-sm">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
