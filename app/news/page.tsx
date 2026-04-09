import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news from Friends of the Royals — updates on projects, events, scholarships, and community efforts supporting Riverview High School.",
};

const articles = [
  {
    id: "turf-field-campaign-update",
    featured: true,
    category: "Project Update",
    categoryColor: "bg-royalBurgundy text-white",
    title: "Turf Field Campaign Reaches $30,000 Milestone — 30% Funded",
    date: "March 2025",
    author: "Friends of the Royals",
    excerpt:
      "Thanks to the incredible generosity of our community, the Turf Field Project campaign has crossed the $30,000 fundraising mark. This puts us 30% of the way to our $100,000 goal — a significant achievement that reflects the power of community-driven support.",
    readTime: "3 min read",
    href: "/projects/turf-field",
  },
  {
    id: "parent-prom-2025",
    featured: false,
    category: "Event",
    categoryColor: "bg-royalNavy text-white",
    title: "Parent Prom Night 2025: Tickets Now Available — Help Fund Prom Dresses for Students",
    date: "February 2025",
    author: "Friends of the Royals",
    excerpt:
      "Parent Prom Night is back for 2025, and tickets are available now through Eventbrite. Join us for an evening of elegance, community, and meaningful fundraising as we raise money to ensure every RHS student can attend their prom.",
    readTime: "2 min read",
    href: "/events/parent-prom",
  },
  {
    id: "scholarship-announcement",
    featured: false,
    category: "Scholarships",
    categoryColor: "bg-royalBurgundy text-white",
    title: "Friends of the Royals Announces Annual Scholarship Fund for RHS Graduates",
    date: "January 2025",
    author: "Friends of the Royals",
    excerpt:
      "We are proud to announce the continuation of the Friends of the Royals annual scholarship fund, supporting deserving graduates of Riverview High School. Applications will be accepted from current Grade 12 students who demonstrate academic achievement and community commitment.",
    readTime: "4 min read",
    href: "/donate",
  },
  {
    id: "sponsor-feature",
    featured: false,
    category: "Community",
    categoryColor: "bg-royalNavy text-white",
    title: "Community Businesses Rally Behind Riverview High School Students",
    date: "December 2024",
    author: "Friends of the Royals",
    excerpt:
      "Riverview&apos;s business community has shown up in a big way for Friends of the Royals this year. Local sponsors from across the region have stepped up to support our mission, contributing to our most successful fundraising year to date.",
    readTime: "3 min read",
    href: "/sponsors",
  },
  {
    id: "turf-field-vision",
    featured: false,
    category: "Project",
    categoryColor: "bg-royalBurgundy text-white",
    title: "The Vision Behind the Turf Field: Why Riverview's Athletes Deserve World-Class Facilities",
    date: "November 2024",
    author: "Friends of the Royals",
    excerpt:
      "For too long, Riverview High School&apos;s dedicated athletes have trained on fields that fall short of their potential. The Turf Field Project aims to change that — permanently. We sat down with founders of Friends of the Royals to discuss the vision.",
    readTime: "5 min read",
    href: "/projects/turf-field",
  },
  {
    id: "impact-report-2024",
    featured: false,
    category: "Impact",
    categoryColor: "bg-royalNavy text-white",
    title: "2024 Impact Report: A Year of Community Action for Riverview Students",
    date: "October 2024",
    author: "Friends of the Royals",
    excerpt:
      "As we reflect on 2024, the numbers tell a compelling story: over $30,000 raised, dozens of prom dresses donated, scholarships awarded, and a community growing stronger in its commitment to Riverview High School students.",
    readTime: "6 min read",
    href: "/impact",
  },
];

export default function NewsPage() {
  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #273742 0%, #1a2530 100%)" }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-5">
            Stay Informed
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            News &<br />Updates
          </h1>
          <p className="text-white text-opacity-70 font-light text-xl leading-relaxed max-w-2xl">
            Stay up to date with the latest from Friends of the Royals —
            project milestones, event announcements, scholarship awards, and
            community stories.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="section-label mb-6">Featured Story</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
              <div
                className="min-h-64 lg:min-h-auto"
                style={{
                  background: "linear-gradient(135deg, #8b3f33 0%, #6d2f24 100%)",
                }}
              >
                <div className="h-full flex items-end p-10">
                  <div>
                    <span className={`inline-block mb-4 ${featuredArticle.categoryColor} font-extrabold text-xs uppercase tracking-widest px-3 py-1`}>
                      {featuredArticle.category}
                    </span>
                    <p className="text-white text-opacity-60 font-light text-4xl leading-none font-extrabold">
                      30%
                    </p>
                    <p className="text-white text-opacity-40 font-light text-lg">
                      of goal reached
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-royalGray p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${featuredArticle.categoryColor} font-extrabold text-xs uppercase tracking-widest px-3 py-1`}>
                    {featuredArticle.category}
                  </span>
                  <span className="text-royalNavy text-opacity-40 font-light text-sm">
                    {featuredArticle.date}
                  </span>
                  <span className="text-royalNavy text-opacity-40 font-light text-sm">
                    · {featuredArticle.readTime}
                  </span>
                </div>
                <h2 className="font-extrabold text-royalNavy text-2xl md:text-3xl leading-snug mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-royalNavy text-opacity-70 font-light leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <Link
                  href={featuredArticle.href}
                  className="inline-flex items-center gap-2 text-royalBurgundy font-extrabold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300"
                >
                  Read Full Story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="bg-royalGray py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white flex flex-col card-hover group"
              >
                {/* Color top bar */}
                <div className={`h-1 ${article.category.includes("Project") || article.category.includes("Scholar") || article.category.includes("Impact") ? "bg-royalBurgundy" : "bg-royalNavy"}`} />

                {/* Article header color block */}
                <div
                  className="h-32 flex items-end p-5"
                  style={{
                    background: `linear-gradient(135deg, ${
                      article.category.includes("Project") || article.category.includes("Scholar") || article.category.includes("Impact")
                        ? "#8b3f33, #6d2f24"
                        : "#273742, #1a2530"
                    })`,
                  }}
                >
                  <span className={`${article.categoryColor} font-extrabold text-xs uppercase tracking-widest px-3 py-1`}>
                    {article.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-royalNavy text-opacity-40 font-light text-xs">
                      {article.date}
                    </span>
                    <span className="text-royalNavy text-opacity-40 font-light text-xs">
                      · {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-royalNavy text-lg leading-snug mb-3 group-hover:text-royalBurgundy transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-royalNavy text-opacity-60 font-light text-sm leading-relaxed mb-6 flex-grow">
                    {article.excerpt}
                  </p>
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-2 text-royalBurgundy font-extrabold text-xs uppercase tracking-widest hover:gap-4 transition-all duration-300"
                  >
                    Read More
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-royalNavy py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-royalTan font-extrabold text-xs uppercase tracking-widest mb-5">
            Stay Connected
          </p>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Follow Our Journey
          </h2>
          <p className="text-white text-opacity-60 font-light text-lg mb-10">
            Follow Friends of the Royals on social media for the latest updates
            on projects, events, and community news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-royalBurgundy text-white font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
              Follow on Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-white text-white font-extrabold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-white hover:text-royalNavy"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5"/>
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
