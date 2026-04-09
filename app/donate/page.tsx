/*
 * STRIPE INTEGRATION SETUP
 * ========================
 * To enable live Stripe payments:
 * 1. Create a .env.local file in the root of the project
 * 2. Add your Stripe publishable key:
 *    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_KEY_HERE
 * 3. Add your Stripe secret key (for server-side API routes):
 *    STRIPE_SECRET_KEY=sk_live_YOUR_KEY_HERE
 * 4. Uncomment the Stripe Elements code below
 * 5. Create an API route at app/api/create-payment-intent/route.ts
 *
 * For test mode, use:
 *    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
 *    STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
 *
 * See https://stripe.com/docs/payments/quickstart for full setup guide.
 */

"use client";

import { useState } from "react";
import Link from "next/link";

const presetAmounts = [50, 100, 250, 500];

const impactLevels = [
  {
    amount: 50,
    title: "Community Supporter",
    impact: "Contributes to event costs and community outreach materials for Friends of the Royals.",
    icon: "🤝",
  },
  {
    amount: 100,
    title: "Royals Backer",
    impact: "Helps fund student programs, community outreach materials, and scholarship fund contributions.",
    icon: "⭐",
  },
  {
    amount: 250,
    title: "Field Builder",
    impact: "Makes a meaningful contribution toward the Turf Field Project and school facility improvements.",
    icon: "🏟️",
  },
  {
    amount: 500,
    title: "Royals Champion",
    impact: "Funds a significant portion of an RHS student's prom dress, or directly contributes to a community project.",
    icon: "🏆",
  },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = isCustom
    ? parseFloat(customAmount) || 0
    : selectedAmount || 0;

  const activeImpact = impactLevels.reduce((prev, curr) => {
    if (finalAmount >= curr.amount) return curr;
    return prev;
  }, impactLevels[0]);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustom = (value: string) => {
    setCustomAmount(value);
    setIsCustom(true);
    setSelectedAmount(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: integrate Stripe payment here
    // Example:
    // const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    // Then create a payment intent via API and confirm payment
    console.log("Donation submitted:", { amount: finalAmount, name, email, message });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-royalGray flex items-center justify-center px-6 pt-20">
        <div className="max-w-md w-full bg-white p-12 text-center">
          <div className="w-20 h-20 bg-royalBurgundy flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-royalNavy mb-4">
            Thank You!
          </h2>
          <p className="text-royalNavy text-opacity-70 font-light leading-relaxed mb-3">
            Your donation of{" "}
            <span className="text-royalBurgundy font-extrabold">
              ${finalAmount.toFixed(2)}
            </span>{" "}
            has been received. You are making a real difference for Riverview
            High School students.
          </p>
          <p className="text-royalNavy text-opacity-50 font-light text-sm mb-8">
            A confirmation email will be sent to{" "}
            <span className="font-semibold">{email}</span>.
          </p>
          <p className="text-royalNavy text-opacity-40 text-sm font-light mb-8 italic">
            Note: This is a demo form. Stripe payment integration is required
            for live transactions. See the STRIPE INTEGRATION SETUP comment in
            donate/page.tsx.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="block text-center bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-opacity-90"
            >
              Back to Home
            </Link>
            <button
              onClick={() => {
                setSubmitted(false);
                setSelectedAmount(100);
                setCustomAmount("");
                setIsCustom(false);
                setName("");
                setEmail("");
                setMessage("");
              }}
              className="block text-center border-2 border-royalNavy text-royalNavy font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-royalNavy hover:text-white"
            >
              Donate Again
            </button>
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
        style={{ background: "linear-gradient(135deg, #8b3f33 0%, #6d2f24 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute right-0 top-0 opacity-5" width="400" height="440" viewBox="0 0 100 110">
            <polygon points="50,5 93,27.5 93,82.5 50,105 7,82.5 7,27.5" fill="none" stroke="white" strokeWidth="1" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-white text-opacity-60 font-extrabold text-xs uppercase tracking-widest mb-5">
            Give Today
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Support the Royals
          </h1>
          <p className="text-white text-opacity-80 font-light text-xl leading-relaxed max-w-2xl mx-auto">
            Your donation supports Riverview High School students through
            scholarships, community projects, prom programs, and more.
          </p>
        </div>
      </section>

      {/* Donation Form + Impact */}
      <section className="bg-royalGray py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Donation Form */}
            <div className="lg:col-span-2 bg-white p-10">
              <h2 className="text-3xl font-extrabold text-royalNavy mb-2">
                Make a Donation
              </h2>
              <p className="text-royalNavy text-opacity-60 font-light mb-8">
                Your donation supports Friends of the Royals Alumni Association
                and Riverview High School students.
              </p>

              {/* Stripe Notice */}
              <div className="bg-royalGray border-l-4 border-royalBurgundy p-4 mb-8">
                <p className="text-royalNavy font-semibold text-sm">
                  Developer Note
                </p>
                <p className="text-royalNavy text-opacity-70 font-light text-sm mt-1">
                  Stripe payment integration is ready to be connected. Add your{" "}
                  <code className="font-mono text-royalBurgundy text-xs bg-white px-1 py-0.5">
                    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
                  </code>{" "}
                  to <code className="font-mono text-royalBurgundy text-xs bg-white px-1 py-0.5">.env.local</code> to
                  enable live payments. See the setup instructions at the top of{" "}
                  <code className="font-mono text-royalBurgundy text-xs bg-white px-1 py-0.5">app/donate/page.tsx</code>.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Amount Selection */}
                <div className="mb-8">
                  <p className="font-extrabold text-royalNavy text-sm uppercase tracking-widest mb-4">
                    Select Amount
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountSelect(amount)}
                        className={`py-4 font-extrabold text-lg transition-all duration-200 ${
                          !isCustom && selectedAmount === amount
                            ? "bg-royalBurgundy text-white"
                            : "bg-royalGray text-royalNavy hover:bg-royalTan hover:text-white"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-royalNavy font-extrabold text-lg">
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="Custom Amount"
                      value={customAmount}
                      onChange={(e) => handleCustom(e.target.value)}
                      min="1"
                      className={`w-full pl-10 pr-4 py-4 border-2 font-light text-royalNavy text-lg transition-all duration-200 focus:outline-none ${
                        isCustom
                          ? "border-royalBurgundy"
                          : "border-royalMauve hover:border-royalNavy"
                      }`}
                    />
                  </div>
                </div>

                {/* Personal Details */}
                <div className="mb-8">
                  <p className="font-extrabold text-royalNavy text-sm uppercase tracking-widest mb-4">
                    Your Details
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-royalNavy font-semibold text-sm mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 border-2 border-royalMauve font-light text-royalNavy focus:outline-none focus:border-royalBurgundy transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-royalNavy font-semibold text-sm mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border-2 border-royalMauve font-light text-royalNavy focus:outline-none focus:border-royalBurgundy transition-colors duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-royalNavy font-semibold text-sm mb-2">
                      Dedication or Message (Optional)
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="In honour of a student, family member, or personal message..."
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-royalMauve font-light text-royalNavy focus:outline-none focus:border-royalBurgundy transition-colors duration-200 resize-none"
                    />
                  </div>
                </div>

                {/* Payment Section */}
                <div className="mb-8">
                  <p className="font-extrabold text-royalNavy text-sm uppercase tracking-widest mb-4">
                    Payment Details
                  </p>
                  {/* Stripe Elements Placeholder */}
                  <div className="border-2 border-dashed border-royalMauve bg-royalGray p-8 text-center mb-4">
                    <svg
                      className="w-10 h-10 text-royalTan mx-auto mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <p className="text-royalNavy font-extrabold text-sm mb-1">
                      Stripe Payment Form
                    </p>
                    <p className="text-royalNavy text-opacity-50 font-light text-sm">
                      Stripe Elements credit card form will appear here once your
                      Stripe publishable key is added to the environment
                      variables.
                    </p>
                  </div>

                  {/* Secure badges */}
                  <div className="flex items-center gap-3 text-royalNavy text-opacity-40 text-xs font-light">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure payment powered by Stripe
                    <span>·</span>
                    <span>256-bit SSL encrypted</span>
                    <span>·</span>
                    <span>PCI compliant</span>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest py-5 transition-all duration-300 hover:bg-opacity-90 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Donate ${finalAmount > 0 ? finalAmount.toFixed(2) : "0.00"} Now
                </button>
              </form>
            </div>

            {/* Sidebar: Impact */}
            <div className="space-y-6">
              {/* Current impact level */}
              <div className="bg-royalNavy p-8">
                <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-4">
                  Your Impact
                </p>
                {finalAmount > 0 ? (
                  <>
                    <div className="text-4xl mb-3">{activeImpact.icon}</div>
                    <p className="text-white font-extrabold text-xl mb-2">
                      {activeImpact.title}
                    </p>
                    <p className="text-white text-opacity-60 font-light text-sm leading-relaxed">
                      {activeImpact.impact}
                    </p>
                  </>
                ) : (
                  <p className="text-white text-opacity-40 font-light">
                    Select an amount above to see your impact.
                  </p>
                )}
              </div>

              {/* All impact levels */}
              <div className="bg-white p-6">
                <p className="font-extrabold text-royalNavy text-sm uppercase tracking-widest mb-5">
                  Impact Guide
                </p>
                <div className="space-y-4">
                  {impactLevels.map((level) => (
                    <button
                      key={level.amount}
                      type="button"
                      onClick={() => handleAmountSelect(level.amount)}
                      className={`w-full text-left flex gap-3 p-3 transition-all duration-200 ${
                        finalAmount >= level.amount &&
                        finalAmount < (impactLevels[impactLevels.indexOf(level) + 1]?.amount || Infinity)
                          ? "bg-royalBurgundy bg-opacity-10 border-l-4 border-royalBurgundy"
                          : "hover:bg-royalGray"
                      }`}
                    >
                      <span className="text-xl flex-shrink-0">{level.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-royalNavy text-sm">
                            ${level.amount}
                          </span>
                          <span className="text-royalBurgundy font-semibold text-xs">
                            — {level.title}
                          </span>
                        </div>
                        <p className="text-royalNavy text-opacity-50 font-light text-xs mt-0.5 leading-relaxed">
                          {level.impact}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-royalGray p-6">
                <p className="font-extrabold text-royalNavy text-sm uppercase tracking-widest mb-4">
                  Your Gift is Safe
                </p>
                <div className="space-y-3">
                  {[
                    "100% goes to RHS student programs",
                    "Volunteer-led organization",
                    "Transparent fund allocation",
                    "Community accountability",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-royalBurgundy flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-royalNavy font-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other ways to help */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">More Ways to Help</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-royalNavy">
              Other Ways to Support
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-royalGray p-8 card-hover text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="font-extrabold text-royalNavy text-lg mb-3">Attend an Event</h3>
              <p className="text-royalNavy text-opacity-60 font-light text-sm leading-relaxed mb-4">
                Buy tickets to Parent Prom Night or our annual fundraiser and enjoy a great night out while supporting RHS students.
              </p>
              <Link href="/events" className="text-royalBurgundy font-extrabold text-xs uppercase tracking-widest hover:underline">
                View Events
              </Link>
            </div>
            <div className="bg-royalGray p-8 card-hover text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-extrabold text-royalNavy text-lg mb-3">Become a Sponsor</h3>
              <p className="text-royalNavy text-opacity-60 font-light text-sm leading-relaxed mb-4">
                Businesses can partner with Friends of the Royals for visibility, community recognition, and meaningful impact.
              </p>
              <Link href="/sponsors" className="text-royalBurgundy font-extrabold text-xs uppercase tracking-widest hover:underline">
                Sponsorship Info
              </Link>
            </div>
            <div className="bg-royalGray p-8 card-hover text-center">
              <div className="text-4xl mb-4">📣</div>
              <h3 className="font-extrabold text-royalNavy text-lg mb-3">Spread the Word</h3>
              <p className="text-royalNavy text-opacity-60 font-light text-sm leading-relaxed mb-4">
                Share Friends of the Royals on social media. Tell your network about the Turf Field Project. Every share helps us grow.
              </p>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-royalBurgundy font-extrabold text-xs uppercase tracking-widest hover:underline"
              >
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
