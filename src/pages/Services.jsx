import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  X,
  Boxes,
  Megaphone,
  Code2,
  BriefcaseBusiness,
  Database,
  Bot,
  MessageCircle,
  Package,
  Search,
  MousePointerClick,
  Share2,
  Mail,
  MapPin,
  FileText,
  Globe2,
  Smartphone,
  Palette,
  Layers3,
  Workflow,
  Rocket,
  Lightbulb,
  PenTool,
  Hammer,
  CheckCircle2,
} from "lucide-react";

const serviceCategories = [
  {
    id: "software",
    title: "Software Services",
    description:
      "Explore software solutions designed to support modern business operations and digital workflows.",
    icon: Boxes,
    linear: "from-blue-500 via-blue-500 to-blue-500",
    services: [
      {
        title: "aNquest CRM",
        icon: BriefcaseBusiness,
        link: "https://anquestmedia.com/services/software/anquest-crm",
      },
      {
        title: "CRM Features & Systems",
        icon: Database,
        link: "https://anquestmedia.com/crm-features",
      },
      {
        title: "aNquest+ EMR",
        icon: FileText,
        link: "https://anquestmedia.com/services/software/anquest-plus-emr",
      },
      {
        title: "aNquest HRMS",
        icon: Workflow,
        link: "https://anquestmedia.com/services/software/hrms",
      },
      {
        title: "AI Calling",
        icon: Bot,
        link: "https://anquestmedia.com/services/software/ai-calling-automation",
      },
      {
        title: "WhatsApp Automation",
        icon: MessageCircle,
        link: "https://anquestmedia.com/services/software/whatsapp-automation",
      },
      {
        title: "Inventory Management",
        icon: Package,
        link: "https://anquestmedia.com/services/software/inventory-management",
      },
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description:
      "Build a stronger digital presence with focused marketing solutions for visibility, reach and growth.",
    icon: Megaphone,
    linear: "from-blue-500 via-rose-500 to-blue-500",
    services: [
      {
        title: "SEO (Search Engine Opt)",
        icon: Search,
        link: "https://anquestmedia.com/services/digital-marketing/search-engine-optimization",
      },
      {
        title: "PPC Advertising",
        icon: MousePointerClick,
        link: "https://anquestmedia.com/services/digital-marketing/pay-per-click",
      },
      {
        title: "Social Media Optimization",
        icon: Share2,
        link: "https://anquestmedia.com/services/digital-marketing/social-media-optimization",
      },
      {
        title: "Email Marketing",
        icon: Mail,
        link: "https://anquestmedia.com/services/digital-marketing/email-marketing",
      },
      {
        title: "Local SEO Services",
        icon: MapPin,
        link: "https://anquestmedia.com/services/digital-marketing/local-seo-services",
      },
      {
        title: "Content Marketing",
        icon: FileText,
        link: "https://anquestmedia.com/services/digital-marketing/content-marketing",
      },
      {
        title: "WhatsApp Marketing",
        icon: MessageCircle,
        link: "https://anquestmedia.com/services/digital-marketing/whatsapp-marketing",
      },
    ],
  },
  {
    id: "development",
    title: "Development",
    description:
      "Create modern digital products with flexible development, design and software solutions.",
    icon: Code2,
    linear: "from-blue-500 via-teal-500 to-blue-500",
    services: [
      {
        title: "Custom Web Solutions",
        icon: Globe2,
        link: "https://anquestmedia.com/services/development/custom-web-solutions",
      },
      {
        title: "Mobile App Development",
        icon: Smartphone,
        link: "https://anquestmedia.com/services/development/mobile-app-development",
      },
      {
        title: "UI/UX Design",
        icon: Palette,
        link: "https://anquestmedia.com/services/development/ui-ux-design-solutions",
      },
      {
        title: "Software Solutions",
        icon: Layers3,
        link: "https://anquestmedia.com/services/development/software-solutions",
      },
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your goals, challenges and requirements before starting the project.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create clear structures and engaging experiences that match your business needs.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our team develops reliable digital solutions using modern technologies.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We launch the solution and help you move forward with continuous improvement.",
    icon: Rocket,
  },
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <main className="overflow-hidden bg-[#F7FBFF] text-slate-900">

      <Helmet>
       <title>
        Services | Software, Digital Marketing & Development | aNquest Media
      </title>

     <meta
       name="description"
      content="Explore aNquest Media services including CRM, EMR, HRMS, SEO, PPC, web development, mobile apps, UI/UX design and automation solutions."
     />
      </Helmet>

      {/* HERO */}
      <section className="relative px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -left-30 top-32 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"
        />

        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.15 }}
          className="absolute -right-25 top-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* HERO CONTENT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -70,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
            >
              

              <h1 className="mt-7 max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Digital solutions
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="block bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent"
                >
                  built to move forward.
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="mt-7 max-w-xl text-lg leading-8 text-slate-600"
              >
                We create modern digital experiences, intelligent software
                and scalable technology solutions that help businesses move
                faster and grow smarter.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Start Your Project
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600"
                >
                  Explore Services
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </motion.div>
            </motion.div>

            {/* HERO VISUAL */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
                rotate: 5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="relative"
            >
              <div className="relative mx-auto max-w-lg">

                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative overflow-hidden rounded-4x1 border border-white bg-white p-5 shadow-2xl shadow-slate-300/40"
                >
                  <div className="rounded-3x1 bg-linear-to-br from-blue-50 via-white to-blue-50 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                          Digital System
                        </p>

                        <h3 className="mt-1 text-xl font-bold text-slate-900">
                          Business Overview
                        </h3>
                      </div>

                      <motion.div
                        animate={{
                          rotate: [0, 8, -8, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                        className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 via-blue-500 to-blue-500 text-white shadow-lg"
                      >
                        <Boxes size={21} />
                      </motion.div>
                    </div>

                    <div className="mt-8 flex h-48 items-end gap-3 rounded-2xl border border-slate-100 bg-white p-5">
                      {[42, 58, 48, 76, 63, 91, 78].map((height, index) => (
                        <motion.div
                          key={index}
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: `${height}%`,
                            opacity: 1,
                          }}
                          transition={{
                            duration: 0.8,
                            delay: 0.8 + index * 0.08,
                          }}
                          className="flex-1 rounded-t-xl bg-linear-to-t from-blue-500 via-blue-500 to-blue-400"
                        />
                      ))}
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-4">
                      <motion.div
                        whileHover={{ scale: 1.04 }}
                        className="rounded-2xl border border-slate-100 bg-white p-4"
                      >
                        <p className="text-xs text-slate-400">
                          Performance
                        </p>
                        <p className="mt-1 text-2xl font-bold text-slate-900">
                          +84%
                        </p>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.04 }}
                        className="rounded-2xl border border-slate-100 bg-white p-4"
                      >
                        <p className="text-xs text-slate-400">
                          Growth
                        </p>
                        <p className="mt-1 text-2xl font-bold text-slate-900">
                          +62%
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* FLOATING LEFT */}
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-8 top-12 hidden rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                      <Bot size={18} />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Automation
                      </p>

                      <p className="text-sm font-bold text-slate-900">
                        Active
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* FLOATING RIGHT */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-8 bottom-16 hidden rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                      <CheckCircle2 size={18} />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Technology
                      </p>

                      <p className="text-sm font-bold text-slate-900">
                        Scalable
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADING */}
          <motion.div
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.75,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600"
            >
              Our Services
            </motion.span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Solutions for every
              <span className="block bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent">
                digital need.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
              From software and digital marketing to development, we bring
              different digital capabilities together to help businesses
              build, improve and grow.
            </p>
          </motion.div>

          <div className="mt-16 space-y-16">

            {serviceCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;

              return (
                <motion.div
                  key={category.id}
                  initial={{
                    opacity: 0,
                    x:
                      categoryIndex === 0
                        ? -80
                        : categoryIndex === 1
                          ? 80
                          : 0,
                    scale:
                      categoryIndex === 2
                        ? 0.94
                        : 1,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="group relative overflow-hidden rounded-4x1 border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8 lg:p-10"
                >
                  {/* Background glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.07, 0.12, 0.07],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute -right-24 -top-24 h-64 w-64 rounded-full bg-linear-to-br ${category.linear} blur-3xl`}
                  />

                  <div className="relative">

                    {/* CATEGORY HEADER */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex items-start gap-5">

                        <motion.div
                          whileHover={{
                            rotate: 10,
                            scale: 1.08,
                            y: -3,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                          }}
                          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${category.linear} text-white shadow-lg`}
                        >
                          <CategoryIcon size={29} />
                        </motion.div>

                        <div>
                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.1,
                            }}
                            className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400"
                          >
                            0{categoryIndex + 1}
                          </motion.p>

                          <h3 className="mt-1 text-3xl font-bold text-slate-900">
                            {category.title}
                          </h3>

                          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <motion.div
                        initial={{
                          scaleX: 0,
                          transformOrigin: "left",
                        }}
                        whileInView={{
                          scaleX: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.25,
                        }}
                        className={`hidden h-px flex-1 bg-linear-to-r ${category.linear} opacity-30 lg:ml-8 lg:block`}
                      />
                    </div>

                    {/* SUB SERVICES */}
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {category.services.map((service, serviceIndex) => {
                        const ServiceIcon = service.icon;

                        return (
                          <motion.div
                            key={service.title}
                            initial={{
                              opacity: 0,
                              x:
                                serviceIndex % 2 === 0
                                  ? -35
                                  : 35,
                              y:
                                serviceIndex % 3 === 0
                                  ? 20
                                  : 0,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              y: 0,
                            }}
                            viewport={{
                              once: true,
                              amount: 0.15,
                            }}
                            transition={{
                              duration: 0.55,
                              delay: serviceIndex * 0.08,
                              ease: "easeOut",
                            }}
                            whileHover={{
                              y: -8,
                              scale: 1.015,
                            }}
                            className="group/card relative overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FBFF] p-5 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-100/50"
                          >
                            {/* Hover linear glow */}
                            <motion.div
                              initial={{
                                opacity: 0,
                              }}
                              whileHover={{
                                opacity: 1,
                              }}
                              className={`pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-linear-to-br ${category.linear} opacity-10 blur-2xl`}
                            />

                            <div className="relative flex items-start justify-between gap-4">

                              <motion.div
                                whileHover={{
                                  rotate: [0, -8, 8, 0],
                                  scale: 1.12,
                                }}
                                transition={{
                                  duration: 0.45,
                                }}
                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${category.linear} text-white shadow-md`}
                              >
                                <ServiceIcon size={19} />
                              </motion.div>

                              <motion.button
                                whileHover={{
                                  x: 3,
                                  y: -3,
                                  rotate: 5,
                                }}
                                transition={{
                                  duration: 0.2,
                                }}
                                onClick={() =>
                                  setSelectedService({
                                    ...service,
                                    category: category.title,
                                    linear: category.linear,
                                  })
                                }
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-colors duration-300 hover:border-blue-300 hover:text-blue-500"
                                aria-label={`Explore ${service.title}`}
                              >
                                <ArrowUpRight size={17} />
                              </motion.button>
                            </div>

                            <h4 className="relative mt-5 text-lg font-bold text-slate-900">
                              {service.title}
                            </h4>

                            <motion.button
                              whileHover={{
                                x: 5,
                              }}
                              onClick={() =>
                                setSelectedService({
                                  ...service,
                                  category: category.title,
                                  linear: category.linear,
                                })
                              }
                              className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors duration-300 group-hover/card:text-blue-600"
                            >
                              Explore Service
                              <ArrowRight size={15} />
                            </motion.button>

                            {/* Bottom sweep */}
                            <motion.div
                              initial={{
                                scaleX: 0,
                                transformOrigin: "left",
                              }}
                              whileHover={{
                                scaleX: 1,
                              }}
                              transition={{
                                duration: 0.35,
                              }}
                              className={`absolute bottom-0 left-0 h-1 w-full bg-linear-to-r ${category.linear}`}
                            />
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8">
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-25 top-20 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 -right-25 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            {/* PROCESS CONTENT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                Our Process
              </span>

              <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                From idea to
                <span className="block bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent">
                  impact.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-600">
                We follow a clear and practical process to transform ideas
                into useful digital experiences and scalable solutions.
              </p>

              <motion.div
                whileHover={{
                  x: 5,
                }}
                className="inline-block"
              >
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Start Your Project
                  <ArrowUpRight size={17} />
                </Link>
              </motion.div>
            </motion.div>

            {/* PROCESS CARDS */}
            <div className="grid gap-5 sm:grid-cols-2">
              {processSteps.map((step, index) => {
                const StepIcon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -45 : 45,
                      rotate: index % 2 === 0 ? -2 : 2,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      rotate: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.12,
                    }}
                    whileHover={{
                      y: -7,
                    }}
                    className="group rounded-3xl border border-slate-200 bg-[#F8FBFF] p-6 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-100/40"
                  >
                    <div className="flex items-center justify-between">
                      <motion.span
                        whileHover={{
                          x: 5,
                        }}
                        className="text-sm font-bold text-blue-500"
                      >
                        {step.number}
                      </motion.span>

                      <motion.div
                        whileHover={{
                          rotate: 360,
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.55,
                        }}
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm group-hover:bg-linear-to-br group-hover:from-blue-500 group-hover:via-blue-500 group-hover:to-blue-500 group-hover:text-white"
                      >
                        <StepIcon size={19} />
                      </motion.div>
                    </div>

                    <h3 className="mt-7 text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-4x1 bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 px-7 py-16 text-center shadow-2xl shadow-blue-500/20 sm:px-12 lg:py-20"
        >
          {/* Decorative circles */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.08, 1],
            }}
            transition={{
              rotate: {
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 5,
                repeat: Infinity,
              },
            }}
            className="absolute left-10 top-10 h-32 w-32 rounded-full border border-white/20"
          />

          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.12, 1],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 6,
                repeat: Infinity,
              },
            }}
            className="absolute -bottom-12.5 right-10 h-48 w-48 rounded-full border border-white/20"
          />

          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl"
          />

          <div className="relative">
            <motion.span
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.15,
              }}
              className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
            >
              Let’s Create Something Great
            </motion.span>

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                duration: 0.65,
              }}
              className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Have an idea?
              <span className="block">Let's build it together.</span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
              }}
              className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85"
            >
              Let’s turn your idea into a modern digital solution that
              creates real value for your business.
            </motion.p>

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-900 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SERVICE MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/60 px-5 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 40,
                rotateX: 8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotateX: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-4x1 bg-white p-7 shadow-2xl sm:p-9"
            >
              <motion.button
                whileHover={{
                  rotate: 90,
                  scale: 1.08,
                }}
                onClick={() => setSelectedService(null)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-blue-200 hover:text-blue-500"
                aria-label="Close service details"
              >
                <X size={19} />
              </motion.button>

              <motion.div
                initial={{
                  scale: 0.7,
                  rotate: -15,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: 0.15,
                  type: "spring",
                }}
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${selectedService.linear} text-white shadow-lg`}
              >
                {(() => {
                  const Icon = selectedService.icon;
                  return <Icon size={24} />;
                })()}
              </motion.div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-blue-500">
                {selectedService.category}
              </p>

              <h3 className="mt-2 pr-8 text-3xl font-bold text-slate-900">
                {selectedService.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Explore more details about this service and see how it can
                support your digital requirements.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <motion.a
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  href={selectedService.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 via-blue-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300"
                >
                  View Service
                  <ArrowUpRight size={16} />
                </motion.a>

                <button
                  onClick={() => setSelectedService(null)}
                  className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Services;