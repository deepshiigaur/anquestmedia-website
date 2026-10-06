import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Code2,
  Smartphone,
  Palette,
  Cloud,
  BarChart3,
  Zap,
  CheckCircle2,
  Target,
  Users,
  Lightbulb,
  Rocket,
  Boxes,
  Megaphone,
} from "lucide-react";

/* ================= EXISTING SERVICES DATA ================= */

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive and scalable websites designed for performance and business growth.",
    linear: "from-blue-600 via-blue-500 to-blue-700",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Smooth and reliable mobile experiences built for modern users and devices.",
    linear: "from-blue-500 via-blue-500 to-blue-700",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Simple, engaging and user-focused interfaces that make digital products easier to use.",
    linear: "from-blue-500 via-indigo-500 to-blue-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Flexible digital infrastructure that helps businesses improve reliability and scalability.",
    linear: "from-blue-700 via-blue-500 to-blue-400",
  },
];

/* ================= WHY CHOOSE US ================= */

const reasons = [
  {
    icon: Target,
    title: "Business First",
    description:
      "We understand your goals first and then build technology around your actual business needs.",
  },
  {
    icon: Lightbulb,
    title: "Smart Solutions",
    description:
      "We focus on practical ideas and modern technology that create real value.",
  },
  {
    icon: Users,
    title: "User Focused",
    description:
      "Every experience is designed to be simple, clear and comfortable for your users.",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    description:
      "Our solutions are built with flexibility and scalability so they can grow with you.",
  },
];

/* ================= PROCESS ================= */

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, goals, users and the challenge you want to solve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a clear digital experience with thoughtful structure and modern design.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We turn the idea into a fast, reliable and scalable digital solution.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We help bring the product to life and keep improving it as your business grows.",
  },
];

/* ================= MAIN HOME SERVICES ================= */

const mainServices = [
  {
    icon: Boxes,
    title: "Software Services",
    description:
      "Explore software solutions designed to support modern business operations and digital workflows.",
    link: "/services#software",
    linear: "from-blue-600 via-blue-500 to-blue-700",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Build a stronger digital presence with focused marketing solutions for visibility, reach and growth.",
    link: "/services#marketing",
    linear: "from-indigo-600 via-blue-500 to-blue-500",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Create modern digital products with flexible development, design and software solutions.",
    link: "/services#development",
    linear: "from-blue-500 via-blue-600 to-indigo-600",
  },
];

/* ================= MOVING WORDS ================= */


function Home() {
  return (
    <div className="overflow-hidden bg-[#F7FBFF] text-slate-900">

      <Helmet>
      <title>aNquest Media | Technology & Digital Solutions</title>

     <meta
     name="description"
      content="aNquest Media provides software development, digital marketing, web development, app development, CRM and healthcare technology solutions."
      />
     </Helmet>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative flex min-h-screen items-center overflow-hidden pt-28">

        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-linear(rgba(37,99,235,0.04)_1px,transparent_1px),linear-linear(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Blue Moving Glow */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl"
        />

        {/* Green Moving Glow */}
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl"
        />

        {/* Horizontal Moving Words */}

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">

          {/* HERO CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >

            

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Building

              <motion.span
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="block bg-linear-to-r  from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent"
              >
                what's next.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
            >
              We create modern digital experiences, intelligent software and
              scalable technology solutions that help businesses move faster
              and grow smarter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-blue-600 via-blue-500 to-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
              >
                Explore Services
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50"
              >
                Let's Talk
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-9 flex flex-wrap items-center gap-3 text-sm text-slate-500"
            >
              <div className="flex -space-x-2">
                <span className="h-8 w-8 rounded-full border-2 border-white bg-blue-600" />
                <span className="h-8 w-8 rounded-full border-2 border-white bg-blue-500" />
                <span className="h-8 w-8 rounded-full border-2 border-white bg-blue-500" />
              </div>

              <span>Built for ambitious businesses</span>
            </motion.div>

          </motion.div>


          {/* HERO VISUAL */}

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="relative mx-auto h-[430px] w-full max-w-xl sm:h-[500px] lg:h-[550px]"
          >

            {/* Main Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-3xl"
            />

            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-300/60 sm:h-[400px] sm:w-[400px]"
            />

            {/* Second Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/40 sm:h-[340px] sm:w-[340px]"
            />

            {/* Dashboard */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 0.5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 w-[88%] max-w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-2xl shadow-blue-900/10 backdrop-blur-xl"
            >

              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-xs font-medium tracking-wide text-slate-400">
                    DIGITAL SYSTEM
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    Business Overview
                  </h3>
                </div>

                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 via-blue-500 to-blue-700 text-white shadow-lg"
                >
                  <BarChart3 size={18} />
                </motion.div>
              </div>

              {/* Graph */}
              <div className="mt-6 flex h-40 items-end gap-2 sm:h-44 sm:gap-3">
                {[35, 55, 42, 75, 60, 88, 70, 95].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: false }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.7,
                      }}
                      className="flex-1 rounded-t-lg bg-linear-to-t from-blue-600 via-blue-500 to-blue-700"
                    />
                  )
                )}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                >
                  <p className="text-xs text-slate-400">Performance</p>
                  <p className="mt-1 text-xl font-bold text-slate-900">
                    +84%
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="rounded-2xl border border-blue-100 bg-blue-50 p-4"
                >
                  <p className="text-xs text-slate-400">Growth</p>
                  <p className="mt-1 text-xl font-bold text-blue-600">
                    +62%
                  </p>
                </motion.div>
              </div>
            </motion.div>


            {/* Floating Card 1 */}
            <motion.div
              animate={{
                y: [0, -18, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-10 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-xl sm:top-16"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Zap size={19} />
                </div>

                <div>
                  <p className="text-xs text-slate-400">Automation</p>
                  <p className="text-sm font-semibold text-slate-900">
                    Active
                  </p>
                </div>
              </div>
            </motion.div>


            {/* Floating Card 2 */}
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 left-0 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-xl sm:bottom-16"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Code2 size={19} />
                </div>

                <div>
                  <p className="text-xs text-slate-400">Technology</p>
                  <p className="text-sm font-semibold text-slate-900">
                    Scalable
                  </p>
                </div>
              </div>
            </motion.div>


            {/* Small Floating Badge */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-4 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-xs font-medium text-slate-600 shadow-lg backdrop-blur-md sm:flex"
            >
              <CheckCircle2 size={14} className="text-blue-500" />
              Smart & Scalable
            </motion.div>

          </motion.div>
        </div>


        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-slate-400 sm:block"
        >
          Scroll to explore
        </motion.div>

      </section>


      {/* =========================================================
          STATS
      ========================================================= */}

      <section className="relative border-y border-slate-200/70 bg-white py-16">

        <motion.div
          animate={{
            x: ["-10%", "10%", "-10%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-0 h-px w-1/3 bg-linear-to-r from-transparent via-blue-600 to-transparent"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

            {[
              {
                number: "10+",
                label: "Years of Experience",
              },
              {
                number: "50+",
                label: "Projects Delivered",
              },
              {
                number: "25+",
                label: "Business Solutions",
              },
              {
                number: "99%",
                label: "Client Satisfaction",
              },
            ].map((stat, index) => (

              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-2xl border border-slate-200 bg-[#F7FBFF] p-5 text-center shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl sm:p-7"
              >

                <motion.div
                  initial={{ scale: 0.7 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12 + 0.15,
                  }}
                  className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl"
                >
                  {stat.number}
                </motion.div>

                <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
                  {stat.label}
                </p>

              </motion.div>

            ))}

          </div>
        </div>
      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#F7FBFF] py-24 sm:py-28">

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

          {/* LEFT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: -70, rotate: -3 }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            viewport={{
              once: false,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              type: "spring",
            }}
            className="relative"
          >

            <div className="relative mx-auto max-w-lg">

              {/* Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-5 rounded-4x1 border border-dashed border-blue-200"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-10 rounded-[2.5rem] border border-dashed border-blue-200/70"
              />

              <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-900/10">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                      Our Approach
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      Technology with purpose.
                    </h3>
                  </div>

                  <motion.div
                    animate={{
                      rotate: [0, 10, 0],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 via-blue-500 to-blue-700 text-white shadow-lg"
                  >
                    <Sparkles size={21} />
                  </motion.div>

                </div>


                {/* Progress Lines */}

                <div className="mt-8 space-y-5">

                  {[
                    {
                      title: "Strategy",
                      width: "92%",
                    },
                    {
                      title: "Design",
                      width: "86%",
                    },
                    {
                      title: "Technology",
                      width: "96%",
                    },
                    {
                      title: "Growth",
                      width: "88%",
                    },
                  ].map((item, index) => (

                    <div key={item.title}>

                      <div className="mb-2 flex justify-between text-sm">
                        <span className="font-medium text-slate-700">
                          {item.title}
                        </span>

                        <span className="text-slate-400">
                          {item.width}
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">

                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.width }}
                          viewport={{
                            once: false,
                          }}
                          transition={{
                            duration: 1,
                            delay: index * 0.15,
                          }}
                          className="h-full rounded-full bg-linear-to-r from-blue-600 via-blue-500 to-blue-700"
                        />

                      </div>
                    </div>

                  ))}

                </div>


                {/* Bottom Mini Cards */}

                <div className="mt-8 grid grid-cols-2 gap-3">

                  <motion.div
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                    }}
                    className="rounded-2xl bg-blue-50 p-4"
                  >
                    <p className="text-xs text-slate-500">
                      Innovation
                    </p>

                    <p className="mt-1 text-lg font-bold text-blue-600">
                      Always On
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                    }}
                    className="rounded-2xl bg-blue-50 p-4"
                  >
                    <p className="text-xs text-slate-500">
                      Scalability
                    </p>

                    <p className="mt-1 text-lg font-bold text-blue-600">
                      Future Ready
                    </p>
                  </motion.div>

                </div>

              </div>


              {/* Floating Badge */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -bottom-5 -right-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                    <CheckCircle2 size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Status
                    </p>

                    <p className="text-sm font-bold text-slate-900">
                      Ready to Scale
                    </p>
                  </div>

                </div>

              </motion.div>

            </div>

          </motion.div>


          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.25,
            }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Introduction
            </span>

            <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">

              Technology that

              <motion.span
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7 }}
                className="block bg-linear-to-r from-blue-500 bg-blue-600 bg-clip-text text-transparent"
              >
                makes a difference.
              </motion.span>

            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              We create digital solutions that make businesses simpler,
              smarter and ready for the future. Our approach brings strategy,
              design and technology together to solve real business challenges.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
              From websites and applications to digital systems and experiences,
              we focus on building products that are useful, reliable and ready
              to grow.
            </p>

            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-600"
            >
              Know More About Us

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-28 lg:px-8">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* VISUAL */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
              rotate: -4,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
            }}
            className="relative"
          >

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="rounded-3xl bg-linear-to-br from-blue-500 bg-blue-500 p-8 text-white shadow-2xl"
            >

              <p className="text-sm font-semibold uppercase tracking-widest">
                Digital Experience Flow
              </p>

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="my-10 text-center text-4xl font-black"
              >
                Digital
              </motion.div>

              <div className="grid grid-cols-2 gap-3 text-sm font-semibold">

                {[
                  "Idea",
                  "Design",
                  "Technology",
                  "Growth",
                ].map((item, index) => (

                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: false,
                    }}
                    transition={{
                      delay: index * 0.12,
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="rounded-xl bg-white/15 p-4 text-center backdrop-blur-sm"
                  >
                    {item}
                  </motion.div>

                ))}

              </div>

              <p className="mt-8 text-center text-lg font-bold">
                Idea → Experience → Growth
              </p>

            </motion.div>

          </motion.div>


          {/* CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
              About Us
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">

              We turn ideas into

              <motion.span
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="block bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent"
              >
                digital experiences.
              </motion.span>

            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              We combine strategy, design and technology to create digital
              solutions that are simple to use, powerful to operate and ready
              to grow with your business.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {[
                "Modern technology",
                "User-focused design",
                "Scalable solutions",
                "Long-term thinking",
              ].map((feature, index) => (

                <motion.div
                  key={feature}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -30 : 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: false,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  className="flex items-center gap-3"
                >

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <CheckCircle2 size={16} />
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    {feature}
                  </span>

                </motion.div>

              ))}

            </div>

            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-2 font-semibold text-blue-600"
            >
              Discover more about us

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#F7FBFF] px-6 py-24 sm:py-28 lg:px-8">

        <motion.div
          animate={{
            x: [0, 100, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
          }}
          className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-300/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-2xl"
          >

            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">

              More than technology.

              <span className="block bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent">
                We build with purpose.
              </span>

            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We focus on the bigger picture so your digital solution is not
              only beautiful, but also useful, reliable and ready for growth.
            </p>

          </motion.div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {reasons.map((reason, index) => {

              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  initial={{
                    opacity: 0,
                    x:
                      index === 0
                        ? -70
                        : index === 3
                          ? 70
                          : 0,
                    y: index === 1 || index === 2 ? 60 : 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12,
                    type: "spring",
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:border-blue-200 hover:shadow-2xl"
                >

                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      rotate: index % 2 === 0 ? [0, 4, 0] : [0, -4, 0],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 via-blue-500 to-blue-500 text-white"
                  >
                    <Icon size={25} />
                  </motion.div>

                  <h3 className="mt-6 text-xl font-bold">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {reason.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#F7FBFF] px-6 py-24 sm:py-28 lg:px-8">

        {/* Moving Glows */}

        <motion.div
          animate={{
            x: [0, 90, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <motion.div
              initial={{
                opacity: 0,
                x: -80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
              }}
              className="max-w-2xl"
            >

              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                }}
                className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600"
              >
                Our Services
              </motion.span>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">

                Solutions for every

                <motion.span
                  initial={{
                    opacity: 0,
                    x: 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: false,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="block bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent"
                >
                  digital need.
                </motion.span>

              </h2>

              <motion.p
                initial={{
                  opacity: 0,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                className="mt-5 text-base leading-8 text-slate-600"
              >
                From software and marketing to development, we bring the right
                digital solutions together to help your business move forward.
              </motion.p>

            </motion.div>


            <Link
              to="/services"
              className="group inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 lg:self-auto"
            >
              View All Services

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>


          {/* THREE MAIN SERVICES */}

          <div className="mt-12 grid gap-6 lg:grid-cols-3">

            {mainServices.map((service, index) => {

              const Icon = service.icon;

              return (
                <Link
                  to={service.link}
                  key={service.title}
                >

                  <motion.div
                    initial={{
                      opacity: 0,

                      x:
                        index === 0
                          ? -100
                          : index === 2
                            ? 100
                            : 0,

                      y:
                        index === 1
                          ? 90
                          : 0,

                      scale:
                        index === 1
                          ? 0.8
                          : 0.92,

                      rotate:
                        index === 0
                          ? -4
                          : index === 2
                            ? 4
                            : 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 1,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 75,
                    }}
                    whileHover={{
                      y: -14,
                      scale: 1.025,
                    }}
                    className="group relative min-h-[320px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
                  >

                    {/* Moving Card Glow */}

                    <motion.div
                      animate={{
                        x: [0, 35, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.25, 1],
                      }}
                      transition={{
                        duration: 5 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-linear-to-br ${service.linear} opacity-10 blur-2xl`}
                    />


                    {/* Small Moving Circle */}

                    <motion.div
                      animate={{
                        x: [0, 15, 0],
                        y: [0, 15, 0],
                      }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                      }}
                      className={`absolute right-10 top-10 h-3 w-3 rounded-full bg-linear-to-r ${service.linear} opacity-60`}
                    />


                    {/* Icon */}

                    <motion.div
                      animate={{
                        y: [0, -7, 0],
                        rotate:
                          index === 1
                            ? [0, 8, -8, 0]
                            : [0, 4, 0],
                      }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{
                        scale: 1.15,
                        rotate: 12,
                      }}
                      className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${service.linear} text-white shadow-lg`}
                    >
                      <Icon size={27} />
                    </motion.div>


                    {/* Content */}

                    <h3 className="relative mt-7 text-2xl font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="relative mt-3 text-sm leading-7 text-slate-500">
                      {service.description}
                    </p>


                    {/* Explore */}

                    <div className="absolute bottom-7 left-7 right-7">

                      <div className="flex items-center justify-between border-t border-slate-100 pt-5">

                        <span className="text-sm font-semibold text-slate-400 transition-colors group-hover:text-blue-600">
                          Explore
                        </span>

                        <motion.div
                          whileHover={{
                            scale: 1.15,
                            rotate: 8,
                          }}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-linear-to-r group-hover:from-blue-500 group-hover:via-blue-500 group-hover:to-blue-500 group-hover:text-white"
                        >
                          <ArrowRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </motion.div>

                      </div>

                    </div>


                    {/* Moving Number */}

                    <motion.span
                      animate={{
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="absolute bottom-2 right-5 text-7xl font-black text-slate-50"
                    >
                      0{index + 1}
                    </motion.span>

                  </motion.div>

                </Link>
              );
            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          HOW WE WORK
      ========================================================= */}

      <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-28 lg:px-8">

        <motion.div
          animate={{
            x: [0, 100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-2xl"
          >

            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Process
            </span>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">

              From idea to

              <span className="block bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent">
                impact.
              </span>

            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              A simple and transparent process that keeps your project moving
              from the first idea to the final launch.
            </p>

          </motion.div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {process.map((item, index) => (

              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: index % 2 === 0 ? -60 : 60,
                  rotate: index % 2 === 0 ? -3 : 3,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  type: "spring",
                }}
                whileHover={{
                  y: -10,
                  rotate: index % 2 === 0 ? 1 : -1,
                  scale: 1.02,
                }}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#F7FBFF] p-7 shadow-sm transition-shadow duration-500 hover:shadow-xl"
              >

                <motion.div
                  animate={{
                    x: [0, 30, 0],
                  }}
                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                  }}
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-linear-to-br from-blue-400/10 via-blue-400/10 to-blue-400/10 blur-xl"
                />

                <span className="relative text-5xl font-black text-blue-100">
                  {item.number}
                </span>

                <h3 className="relative mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="px-6 py-24 sm:py-28 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
          }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-linear-to-br from-blue-500 via-blue-500 to-blue-500 px-7 py-16 text-center text-white shadow-2xl sm:px-12"
        >

          {/* Moving Glow 1 */}

          <motion.div
            animate={{
              x: [0, 120, 0],
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"
          />

          {/* Moving Glow 2 */}

          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
            }}
            className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative">

            <motion.span
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: false,
              }}
              className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]"
            >
              Let's Create
            </motion.span>

            <h2 className="mt-6 text-4xl font-black sm:text-5xl">

              Have an idea?

              <motion.span
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="block"
              >
                Let's build it together.
              </motion.span>

            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85">
              Tell us what you are building and let's explore how technology
              can turn your idea into something valuable.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Let's Talk
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </motion.div>

      </section>

    </div>
  );
}

export default Home;