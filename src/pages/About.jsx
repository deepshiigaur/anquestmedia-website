
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Users,
  Target,
  Link as LinkIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We continuously explore better ideas, modern technologies and smarter ways to solve real business problems.",
  },
  {
    icon: Target,
    title: "Purpose",
    text: "Every solution we create is focused on solving a real problem and delivering meaningful business value.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "We work closely with our clients to understand their goals and turn their ideas into practical solutions.",
  },
  {
    icon: Rocket,
    title: "Growth",
    text: "Our solutions are designed to grow with your business and support long-term digital success.",
  },
];

function About() {
  return (
    <main className="overflow-hidden bg-[#F7FBFF] text-[#0F172A]">

      <Helmet>
      <title>About aNquest Media | Technology & Digital Solutions</title>

       <meta
       name="description"
      content="Learn about aNquest Media, a technology and digital solutions company helping businesses grow through software, marketing, design and automation."
       />
      </Helmet>

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative px-6 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
        {/* Background Blobs */}
        <div className="pointer-events-none absolute -left-30 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-30 top-28 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
             

              {/* Heading */}
              <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
                Technology with {" "}
                <span className=" bg-linear-to-r from-blue-600 via-blue-500 to-blue-500  bg-clip-text text-transparent">
                  purpose.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                We believe technology should do more than simply work.
                It should solve problems, create better experiences and
                help businesses move confidently into the future.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-lg"
                >
                  Explore Services
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 via-blue-500  to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
                >
                  Let’s Talk
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT TECHNOLOGY DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-10 rounded-[40px] bg-linear-to-r from-blue-400/20 via-blue-400/20 blur-3xl" />

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10">

                {/* Browser Bar */}
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                  </div>

                  <div className="h-2 w-24 rounded-full bg-slate-200" />

                  <div className="h-7 w-7 rounded-full bg-linear-to-r from-blue-500 via-blue-500 to-blue-500" />
                </div>

                {/* Dashboard */}
                <div className="mt-3 rounded-3x1 bg-linear-to-br from-[#172015] via-[#202116] to-[#063F32] p-6 text-white">

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/50">
                        Digital System
                      </p>

                      <h3 className="mt-1 text-xl font-semibold">
                        Technology Dashboard
                      </h3>
                    </div>

                    <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                      Live
                    </span>
                  </div>

                  {/* Chart */}
                  <div className="mt-8 flex h-48 items-end gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                    {[38, 55, 44, 68, 61, 82, 74, 96].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.08,
                          }}
                          className="flex-1 rounded-t-lg bg-linear-to-t from-blue-500 via-blue-500 to-blue-300"
                        />
                      )
                    )}
                  </div>

                  {/* Stats */}
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-white/50">
                        Performance
                      </p>
                      <p className="mt-2 text-2xl font-semibold">
                        +84%
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-white/50">
                        Growth
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-blue-300">
                        +62%
                      </p>
                    </div>
                  </div>

                  {/* Bottom Cards */}
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-blue-500">
                        <Lightbulb size={17} />
                      </div>

                      <p className="text-sm font-medium">
                        Innovation
                      </p>

                      <p className="mt-1 text-xs text-white/50">
                        Smart digital ideas
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-green-400">
                        <Rocket size={17} />
                      </div>

                      <p className="text-sm font-medium">
                        Scalability
                      </p>

                      <p className="mt-1 text-xs text-white/50">
                        Built for growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-5 top-16 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 via-blue-500 to-blue-500 text-white">
                    <Rocket size={18} />
                  </div>

                  <div>
                    <p className="text-[11px] text-slate-400">
                      Built for
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      What’s Next
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STORY SECTION
      ========================================================= */}
      <section className="relative border-t border-slate-100 bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* STORY CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                Our Story
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                We turn ideas into{" "}
                <span className="bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent">
                  digital experiences.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Every great digital product starts with an idea. Our role
                is to transform that idea into a useful, reliable and
                engaging experience that people can actually use.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                We combine thoughtful design, modern technology and a
                clear understanding of business goals to create solutions
                that are simple to use, easy to scale and built for the
                future.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Human-centered digital experiences",
                  "Modern and scalable technology",
                  "Clear and practical solutions",
                  "Long-term business value",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-blue-500"
                    />

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                Work With Us
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>

            {/* APPROACH VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-[40px] bg-linear-to-r from-blue-300/20 via-blue-300/20 to-blue-300/20 blur-3xl" />

              <div className="relative rounded-[30px] border border-slate-200 bg-[#F7FBFF] p-7 shadow-xl">

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 via-blue-500 to-blue-500 text-white">
                    <Target size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Our Approach
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-slate-900">
                      Simple. Smart. Scalable.
                    </h3>
                  </div>
                </div>

                {/* Progress Items */}
                <div className="mt-9 space-y-6">
                  {[
                    ["Strategy", "92%"],
                    ["Design", "86%"],
                    ["Technology", "96%"],
                    ["Growth", "88%"],
                  ].map(([label, value], index) => (
                    <div key={label}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-700">
                          {label}
                        </span>

                        <span className="text-sm font-semibold text-blue-500">
                          {value}
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: value }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: index * 0.15,
                          }}
                          className="h-full rounded-full bg-linear-to-r from-blue-500 via-blue-500 to-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Cards */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                      <Lightbulb size={17} />
                    </div>

                    <p className="mt-3 text-sm font-semibold text-slate-800">
                      Think Better
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Start with the right strategy.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                      <Rocket size={17} />
                    </div>

                    <p className="mt-3 text-sm font-semibold text-slate-800">
                      Build Better
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Create solutions that scale.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NUMBERS SECTION
      ========================================================= */}
      <section className="px-6 py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 p-8 shadow-2xl shadow-blue-500/20 sm:p-12"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["10+", "Years of Experience"],
              ["50+", "Projects Delivered"],
              ["25+", "Business Solutions"],
              ["99%", "Client Satisfaction"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="text-center text-white"
              >
                <p className="text-4xl font-bold">
                  {number}
                </p>

                <p className="mt-2 text-sm text-white/80">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          VALUES SECTION
      ========================================================= */}
      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              What We Believe
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              The values behind{" "}
              <span className="bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent">
                our work.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We believe successful digital products are built on strong
              ideas, meaningful collaboration and a clear purpose.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 via-blue-500 to-blue-500 text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-6 pb-24 pt-8 lg:px-8 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 px-8 py-16 text-center shadow-2xl shadow-blue-500/20 sm:px-12 lg:py-20"
        >
          {/* Decorative Elements */}
          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Let’s Build Together
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let’s Build Ideas Together
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80">
              Have an idea, a business challenge or a digital product
              you want to bring to life? Let’s turn it into something
              meaningful, useful and ready for what’s next.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-blue-600 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Let’s Build Ideas Together
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}

export default About;