import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Building2,
  Briefcase,
  MessageSquare,
  Send,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@anquest.com",
    description: "Send us your project details anytime.",
    href: "mailto:info@anquest.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91-9266140654",
    description: "Let's discuss your project directly.",
    href: "tel:+919266140654",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "Orbit Plaza, Crossing Republik, Ghaziabad India, 201016",
    description: "Working with businesses across the globe.",
    href: "https://www.google.com/maps/search/?api=1&query=Orbit+Plaza+Crossing+Republik+Ghaziabad+India+201016",
  },
];

const services = [
  "Software Development",
  "Digital Marketing",
  "Web Development",
  "App Development",
  "UI/UX Design",
  "CRM Software",
  "Healthcare Software",
  "Automation Services",
  "Other",
];

function Contact() {
   const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      const cleaned = value
        .replace(/[^a-zA-Z\s]/g, "")
        .slice(0, 50);

      setFormData((prev) => ({
        ...prev,
        name: cleaned,
      }));
    } else if (name === "phone") {
      const cleaned = value
        .replace(/\D/g, "")
        .slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        phone: cleaned,
      }));
    } else if (name === "email") {
      setFormData((prev) => ({
        ...prev,
        email: value.slice(0, 100),
      }));
    } else if (name === "company") {
      setFormData((prev) => ({
        ...prev,
        company: value.slice(0, 100),
      }));
    } else if (name === "message") {
      setFormData((prev) => ({
        ...prev,
        message: value.slice(0, 500),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const company = formData.company.trim();
    const message = formData.message.trim();

    // NAME
    if (!name) {
      newErrors.name = "Full name is required.";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    // EMAIL
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    // PHONE
    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9][0-9]{9}$/.test(phone)) {
      newErrors.phone =
        "Phone number must be exactly 10 digits.";
    }

    // COMPANY
    if (company.length > 100) {
      newErrors.company =
        "Company name cannot exceed 100 characters.";
    }

    // SERVICE
    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    // MESSAGE
    if (!message) {
      newErrors.message = "Message is required.";
    } else if (message.length < 10) {
      newErrors.message =
        "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  console.log("Contact Form Submitted:", formData);

  navigate("/thank-you");
};
  return (
    <main className="overflow-hidden bg-[#f7fbff]">

      <Helmet>
      <title>
        Contact aNquest Media | Let's Build Something Meaningful
      </title>

      <meta
        name="description"
        content="Get in touch with aNquest Media for software development, digital marketing, web development, CRM, healthcare software and automation solutions."
      />
     </Helmet>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative px-6 pb-20 pt-32 md:pb-28 md:pt-40">

        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Let's Connect
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Let's build something{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                meaningful together.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Have an idea, a challenge or a project in mind?
              Tell us about it and let's create something
              great together.
            </p>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          CONTACT DETAILS
      ====================================================== */}
      <section className="px-6 pb-20">

        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">

          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={
                  item.title === "Our Location"
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.title === "Our Location"
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon
                    size={22}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 break-words text-sm font-semibold text-slate-700 transition-colors group-hover:text-blue-600">
                  {item.value}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </motion.a>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          MAIN CONTACT AREA
      ====================================================== */}
      <section className="px-6 pb-28">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            {/* QUICK RESPONSE */}
            <div className="rounded-[30px] bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-500 p-8 text-white shadow-xl shadow-blue-500/15 md:p-10">

              <div className="flex items-center gap-3">
                <CheckCircle2 size={24} />

                <h2 className="text-2xl font-bold">
                  Quick Response
                </h2>
              </div>

              <p className="mt-5 leading-7 text-white/80">
                Tell us what you're looking to build.
                Our team will review your requirements
                and get back to you as soon as possible.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span className="text-sm text-white/90">
                    Strategy
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span className="text-sm text-white/90">
                    Design
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span className="text-sm text-white/90">
                    Technology
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span className="text-sm text-white/90">
                    Growth
                  </span>
                </div>

              </div>
            </div>


            {/* START SOMETHING NEW */}
            <div className="relative mt-6 overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">

              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Start Something New
                </p>

                <h3 className="mt-4 text-3xl font-bold leading-tight text-slate-900">
                  Your next big idea
                  could start here.
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  No complicated process. Just a
                  conversation about what you want
                  to build.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">

                  {[
                    "Strategy",
                    "Design",
                    "Technology",
                    "Growth",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>
            </div>

          </motion.div>


          {/* =================================================
              CONTACT FORM
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <form
              onSubmit={handleSubmit}
              noValidate
              className="overflow-hidden rounded-[30px] bg-white shadow-2xl shadow-slate-900/10"
            >

              {/* BLUE HEADER */}
              <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5 md:px-8">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                    Get Started
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-white md:text-2xl">
                    Send Project Inquiry
                  </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <Send
                    size={21}
                    className="text-white"
                  />
                </div>

              </div>


              {/* FORM BODY */}
              <div className="space-y-5 p-6 md:p-8">

                {/* =========================================
                    FULL NAME
                ========================================== */}
                <div>

                  <label className="mb-2 block text-sm font-bold text-slate-800">
                    Full Name{" "}
                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <div
                    className={`flex items-center rounded-2xl border-2 bg-white px-4 transition ${
                      errors.name
                        ? "border-red-400"
                        : "border-slate-300 focus-within:border-blue-500"
                    }`}
                  >

                    <User
                      size={21}
                      className="shrink-0 text-slate-500"
                    />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      maxLength={50}
                      autoComplete="name"
                      placeholder="Enter your full name"
                      className="w-full bg-transparent px-4 py-3.5 text-base text-slate-800 outline-none placeholder:text-slate-400"
                    />

                  </div>

                  <div className="mt-1 flex min-h-[20px] justify-between">

                    {errors.name ? (
                      <p className="text-sm text-red-500">
                        {errors.name}
                      </p>
                    ) : (
                      <span />
                    )}

                    <span className="text-xs text-slate-400">
                      {formData.name.length}/50
                    </span>

                  </div>

                </div>


                {/* =========================================
                    EMAIL
                ========================================== */}
                <div>

                  <label className="mb-2 block text-sm font-bold text-slate-800">
                    Email{" "}
                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <div
                    className={`flex items-center rounded-2xl border-2 bg-white px-4 transition ${
                      errors.email
                        ? "border-red-400"
                        : "border-slate-300 focus-within:border-blue-500"
                    }`}
                  >

                    <Mail
                      size={21}
                      className="shrink-0 text-slate-500"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength={100}
                      autoComplete="email"
                      placeholder="Enter your email"
                      className="w-full bg-transparent px-4 py-3.5 text-base text-slate-800 outline-none placeholder:text-slate-400"
                    />

                  </div>

                  <div className="mt-1 flex min-h-[20px] justify-between">

                    {errors.email ? (
                      <p className="text-sm text-red-500">
                        {errors.email}
                      </p>
                    ) : (
                      <span />
                    )}

                    <span className="text-xs text-slate-400">
                      {formData.email.length}/100
                    </span>

                  </div>

                </div>


                {/* =========================================
                    PHONE
                ========================================== */}
                <div>

                  <label className="mb-2 block text-sm font-bold text-slate-800">
                    Phone Number{" "}
                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <div
                    className={`flex items-center overflow-hidden rounded-2xl border-2 bg-white transition ${
                      errors.phone
                        ? "border-red-400"
                        : "border-slate-300 focus-within:border-blue-500"
                    }`}
                  >

                    <div className="flex h-full items-center gap-2 border-r border-slate-200 px-4 py-3.5 text-sm font-semibold text-slate-700">
                      <span>IN</span>
                      <span>+91</span>
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={10}
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder="Enter phone number"
                      className="w-full bg-transparent px-4 py-3.5 text-base text-slate-800 outline-none placeholder:text-slate-400"
                    />

                  </div>

                  <div className="mt-1 flex min-h-[20px] justify-between">

                    {errors.phone ? (
                      <p className="text-sm text-red-500">
                        {errors.phone}
                      </p>
                    ) : (
                      <span />
                    )}

                    <span className="text-xs text-slate-400">
                      {formData.phone.length}/10
                    </span>

                  </div>

                </div>


                {/* =========================================
                    COMPANY
                ========================================== */}
                <div>

                  <label className="mb-2 block text-sm font-bold text-slate-800">
                    Company
                  </label>

                  <div
                    className={`flex items-center rounded-2xl border-2 bg-white px-4 transition ${
                      errors.company
                        ? "border-red-400"
                        : "border-slate-300 focus-within:border-blue-500"
                    }`}
                  >

                    <Building2
                      size={21}
                      className="shrink-0 text-slate-500"
                    />

                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      maxLength={100}
                      autoComplete="organization"
                      placeholder="Enter company name"
                      className="w-full bg-transparent px-4 py-3.5 text-base text-slate-800 outline-none placeholder:text-slate-400"
                    />

                  </div>

                  <div className="mt-1 flex min-h-[20px] justify-between">

                    {errors.company ? (
                      <p className="text-sm text-red-500">
                        {errors.company}
                      </p>
                    ) : (
                      <span />
                    )}

                    <span className="text-xs text-slate-400">
                      {formData.company.length}/100
                    </span>

                  </div>

                </div>


                {/* =========================================
                    SERVICE
                ========================================== */}
                <div>

                  <label className="mb-2 block text-sm font-bold text-slate-800">
                    Service{" "}
                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <div
                    className={`flex items-center rounded-2xl border-2 bg-white px-4 transition ${
                      errors.service
                        ? "border-red-400"
                        : "border-slate-300 focus-within:border-blue-500"
                    }`}
                  >

                    <Briefcase
                      size={21}
                      className="shrink-0 text-slate-500"
                    />

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-transparent px-4 py-3.5 text-base text-slate-700 outline-none"
                    >
                      <option value="">
                        Select a service
                      </option>

                      {services.map((service) => (
                        <option
                          key={service}
                          value={service}
                        >
                          {service}
                        </option>
                      ))}
                    </select>

                  </div>

                  <div className="mt-1 min-h-[20px]">

                    {errors.service && (
                      <p className="text-sm text-red-500">
                        {errors.service}
                      </p>
                    )}

                  </div>

                </div>


                {/* =========================================
                    MESSAGE
                ========================================== */}
                <div>

                  <label className="mb-2 block text-sm font-bold text-slate-800">
                    Message{" "}
                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <div
                    className={`flex items-start rounded-2xl border-2 bg-white px-4 transition ${
                      errors.message
                        ? "border-red-400"
                        : "border-slate-300 focus-within:border-blue-500"
                    }`}
                  >

                    <MessageSquare
                      size={21}
                      className="mt-3.5 shrink-0 text-slate-500"
                    />

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      maxLength={500}
                      rows={4}
                      placeholder="Write your message..."
                      className="w-full resize-none bg-transparent px-4 py-3.5 text-base text-slate-800 outline-none placeholder:text-slate-400"
                    />

                  </div>

                  <div className="mt-1 flex min-h-[20px] justify-between">

                    {errors.message ? (
                      <p className="text-sm text-red-500">
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}

                    <span className="text-xs text-slate-400">
                      {formData.message.length}/500
                    </span>

                  </div>

                </div>


                {/* =========================================
                    SUBMIT BUTTON
                ========================================== */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/25"
                >
                  Send Project Inquiry

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs leading-5 text-slate-400">
                  By submitting this form, you agree to be
                  contacted regarding your inquiry.
                </p>

              </div>

            </form>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="px-6 pb-24">

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[35px] bg-slate-950 px-8 py-16 md:px-14 md:py-20"
        >

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Let's Build
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
              Your next big idea could start here.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
              No complicated process. Just a conversation
              about what you want to build.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {[
                "Strategy",
                "Design",
                "Technology",
                "Growth",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300"
                >
                  {tag}
                </span>
              ))}

            </div>

          </div>

        </motion.div>

      </section>

    </main>
  );
}

export default Contact;