import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Search,
  Clock3,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";

const blogs = [
  {
    category: "Software Development",
    title:
      "Software Development Companies in Delhi NCR: Noida vs Ghaziabad vs Delhi",
    description:
      "Comparing software development companies across Delhi NCR? Here's how Noida, Ghaziabad, and Delhi differ on cost, talent pool, and specialization.",
    time: "4 min read",
    date: "9/1/2026",
    linear: "from-blue-500 via-blue-500 to-blue-500",
    content: [
      "Delhi NCR has become a major technology hub with software companies operating across Noida, Ghaziabad and Delhi.",
      "The right location depends on your project requirements, budget, technical expertise and the type of solution you want to build.",
      "Before selecting a software development company, compare experience, technology stack, portfolio, communication process and long-term support.",
    ],
  },
  {
    category: "Web Design & Development",
    title:
      "Best Web Design & Development Company in Noida (2026 Guide)",
    description:
      "A practical comparison of web design and development companies in Noida based on pricing, SEO readiness, technology and portfolios.",
    time: "7 min read",
    date: "8/5/2026",
    linear: "from-blue-500 via-rose-500 to-blue-400",
    content: [
      "Choosing a web development company requires more than checking the visual quality of its websites.",
      "Businesses should also evaluate performance, responsive design, SEO readiness, scalability and ongoing support.",
      "A good development partner should understand both your business goals and your users.",
    ],
  },
  {
    category: "App Development",
    title: "Mobile App Development Cost in Noida (2026 Pricing Guide)",
    description:
      "Understand mobile app development costs in Noida based on app complexity, platform, features and integrations.",
    time: "3 min read",
    date: "7/30/2026",
    linear: "from-blue-500 via-teal-400 to-blue-500",
    content: [
      "Mobile app development cost depends heavily on the type of application being developed.",
      "Platform selection, UI complexity, backend systems, APIs, integrations and advanced features can all affect the project scope.",
      "Planning features clearly before development helps businesses control cost and avoid unnecessary changes.",
    ],
  },
  {
    category: "Web Development",
    title: "Web Design vs Web Development in Noida: Which Do You Actually Need?",
    description:
      "Confused between web design and web development? Compare their scope, purpose, cost and role in a digital project.",
    time: "5 min read",
    date: "7/25/2026",
    linear: "from-blue-500 via-blue-500 to-purple-500",
    content: [
      "Web design focuses on how a website looks, feels and works for users.",
      "Web development focuses on the technical systems that make the website functional and interactive.",
      "Most successful websites need both strong design and reliable development working together.",
    ],
  },
  {
    category: "App Development",
    title: "How to Vet an App Development Company: Questions to Ask Before You Sign",
    description:
      "Use a practical framework to evaluate an app development company before committing your project budget.",
    time: "5 min read",
    date: "7/18/2026",
    linear: "from-blue-500 via-blue-500 to-blue-500",
    content: [
      "Selecting an app development company is an important business decision.",
      "Review previous projects, technical expertise, communication process, timelines, pricing and post-launch support.",
      "A clear development process can reduce risks and create better project outcomes.",
    ],
  },
  {
    category: "Software Development",
    title: "Top 10 Software Development Companies in Delhi NCR (2026)",
    description:
      "Explore software development companies in Delhi NCR and compare them based on project requirements, technology and budget.",
    time: "5 min read",
    date: "7/14/2026",
    linear: "from-blue-500 via-blue-500 to-blue-500",
    content: [
      "Delhi NCR has a wide range of software development companies serving businesses of different sizes.",
      "When comparing companies, consider their technical capabilities, previous work, communication and project management approach.",
      "The right choice should match your specific product requirements and business objectives.",
    ],
  },
  {
    category: "Software Development",
    title:
      "Best Software Development Company in Ghaziabad: What to Look For (and What to Avoid)",
    description:
      "Looking for a reliable software company in Ghaziabad? Learn what to check before choosing a development partner.",
    time: "15 min read",
    date: "7/1/2026",
    linear: "from-blue-500 via-blue-500 to-blue-500",
    content: [
      "Businesses in Ghaziabad can choose from local development teams as well as companies operating across Delhi NCR.",
      "Check technical expertise, portfolio quality, communication, pricing transparency and long-term support before making a decision.",
      "A reliable development partner should focus on business requirements instead of simply delivering technology.",
    ],
  },
];

const categories = [
  "All",
  "Real Estate",
  "CRM Software",
  "Web Development",
  "Software Development",
  "Digital Marketing",
  "Web Design & Development",
  "App Development",
  "Healthcare Software",
  "Software",
  "WhatsApp Automation",
  "Automation Services",
];

function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredBlogs = useMemo(
    () =>
      blogs.filter((blog) => {
        const categoryMatch =
          activeCategory === "All" || blog.category === activeCategory;

        const text = `${blog.title} ${blog.description} ${blog.category}`.toLowerCase();
        return categoryMatch && text.includes(search.toLowerCase());
      }),
    [activeCategory, search]
  );

  return (
    <div className="overflow-hidden bg-[#F7FBFF] text-slate-900">

      <Helmet>
      <title>aNquest Media Blog | Technology, SEO & Digital Growth</title>

      <meta
      name="description"
      content="Read the aNquest Media blog for insights on technology, software, SEO, digital marketing, web development, automation and business growth."
      />
      </Helmet>
      {/* HERO */}
      <section className="relative px-6 pb-20 pt-36 lg:px-8">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute left-10 top-28 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute right-10 top-40 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="relative mx-auto max-w-7xl"
        >
          

          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
            Explore Our{" "}
            <span className="bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent">
              Knowledge Hub
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Deep dives into technology, design, and digital growth. Expert
            insights curated by the aNquest team to keep you ahead of the curve.
          </p>

          <div className="mt-8 flex gap-8">
            <div>
              <b className="text-3xl">29+</b>
              <p className="text-sm text-slate-500">Articles</p>
            </div>
            <div>
              <b className="text-3xl">11</b>
              <p className="text-sm text-slate-500">Categories</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURED */}
      <section className="px-6 pb-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-4x1 bg-linear-to-br from-blue-500 via-blue-500 to-blue-500 p-6 text-white shadow-2xl sm:p-10"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/20"
          />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold">
                Featured
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
                Software Development Companies in Delhi NCR: Noida vs
                Ghaziabad vs Delhi
              </h2>

              <p className="mt-5 leading-7 text-white/80">
                Comparing software development companies across Delhi NCR?
                Here's how Noida, Ghaziabad, and Delhi differ on cost, talent
                pool, and specialization.
              </p>

              <button
                onClick={() => setSelectedArticle(blogs[0])}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition hover:-translate-y-1"
              >
                Read More <ArrowUpRight size={17} />
              </button>
            </div>

            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl"
            >
              <div className="rounded-2xl bg-slate-950/80 p-6">
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs text-slate-400">Business Growth</p>
                    <p className="mt-1 text-3xl font-bold">+68.4%</p>
                  </div>
                  <TrendingUp className="text-blue-300" />
                </div>

                <div className="mt-8 flex h-32 items-end gap-2">
                  {[35, 48, 42, 60, 55, 74, 68, 86, 78, 96].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.7, delay: i * 0.06 }}
                      className="flex-1 rounded-t-md bg-linear-to-t from-blue-500 via-blue-500 to-blue-400"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FILTER + SEARCH */}
      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${
                    active
                      ? "bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 text-white shadow-lg"
                      : "border border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-blue-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="flex w-full items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm focus-within:ring-4 focus-within:ring-blue-500/10 lg:w-64">
            <Search size={18} className="text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="px-6 pb-24 lg:px-8">
        <motion.div
          layout
          className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredBlogs.map((blog, index) => (
            <motion.article
              layout
              key={blog.title}
              initial={{ opacity: 0, y: 35, rotate: index % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -10, rotate: index % 2 ? -1 : 1 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-2xl hover:shadow-blue-900/10"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${blog.linear}`}
                />
                <motion.div
                  animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                  transition={{ duration: 5 + index, repeat: Infinity }}
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl"
                />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <div className="flex justify-between text-white">
                    <span className="text-xs font-bold uppercase">
                      {blog.category}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="transition group-hover:rotate-45"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>{blog.category}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock3 size={13} /> {blog.time}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold leading-7 transition group-hover:text-blue-600">
                  {blog.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {blog.description}
                </p>

                <button
                  onClick={() => setSelectedArticle(blog)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:gap-3"
                >
                  Read <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {!filteredBlogs.length && (
          <div className="mx-auto max-w-7xl rounded-3xl bg-white px-6 py-16 text-center">
            <Search size={35} className="mx-auto text-slate-300" />
            <h3 className="mt-4 text-xl font-bold">No articles found</h3>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearch("");
              }}
              className="mt-6 rounded-full bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Show All Articles
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mx-auto max-w-7xl rounded-4x1 bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 px-6 py-16 text-center text-white shadow-2xl"
        >
          <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
            Have something to build?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            Let's turn your ideas into a digital experience that creates real
            value for your business.
          </p>
        </motion.div>
      </section>

      {/* ARTICLE MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-4x1 bg-white p-6 shadow-2xl sm:p-10"
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-slate-100"
            >
              <X size={19} />
            </button>

            <span className="inline-flex rounded-full bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 px-3 py-1.5 text-xs font-bold text-white">
              {selectedArticle.category}
            </span>

            <h2 className="mt-5 pr-8 text-3xl font-black leading-tight sm:text-4xl">
              {selectedArticle.title}
            </h2>

            <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
              <Clock3 size={15} />
              {selectedArticle.date} • {selectedArticle.time}
            </div>

            <div className="mt-8 space-y-5">
              <p className="text-base font-medium leading-8 text-slate-600">
                {selectedArticle.description}
              </p>

              {selectedArticle.content.map((paragraph, i) => (
                <p key={i} className="text-sm leading-8 text-slate-600 sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <button
              onClick={() => setSelectedArticle(null)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white"
            >
              <ArrowLeft size={17} /> Back to Articles
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Blogs;