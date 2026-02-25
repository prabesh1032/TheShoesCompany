import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-red-600/20 blur-[140px] rounded-full top-[-150px] right-[-150px]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Let’s Start a Conversation
          </h2>

          <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you have a question about our products or just want to say hello —
            we’re always ready to connect.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-24 grid md:grid-cols-2 gap-20 items-center">

          {/* Left Side Bold Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold leading-snug">
              Your next step <br />
              starts with a message.
            </h3>

            <p className="mt-6 text-gray-400 leading-relaxed">
              At The Shoes Company, we believe every connection matters.
              Reach out and our team will respond within 24 hours.
            </p>

            <div className="mt-10 space-y-3 text-gray-300">
              <p>Email: support@theshoescompany.com</p>
              <p>Location: Kathmandu, Nepal</p>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 space-y-8"
          >
            {/* Floating Input */}
            <div className="relative">
              <input
                type="text"
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-red-500 transition"
              />
              <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-red-500 peer-focus:text-xs">
                Full Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-red-500 transition"
              />
              <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-red-500 peer-focus:text-xs">
                Email Address
              </label>
            </div>

            <div className="relative">
              <textarea
                rows="3"
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-red-500 transition resize-none"
              ></textarea>
              <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-red-500 peer-focus:text-xs">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition duration-300 py-3 rounded-full font-semibold tracking-wide"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}