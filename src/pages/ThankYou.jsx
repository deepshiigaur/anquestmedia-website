import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7fbff] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl rounded-4x1 bg-white p-8 text-center shadow-2xl md:p-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
          }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50"
        >
          <CheckCircle2
            size={44}
            className="text-blue-600"
          />
        </motion.div>

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
          Thank You
        </p>

        <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
          Your request has been received.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
          Thank you for getting in touch with aNquest Media.
          Our team will review your details and get back to
          you shortly.
        </p>

        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5"
        >
          Back to Home

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </main>
  );
}

export default ThankYou;