import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white py-12 sm:py-16 md:py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-80 sm:w-96 md:w-[500px] h-80 sm:h-96 md:h-[500px] bg-red-600/20 blur-[100px] sm:blur-[120px] md:blur-[140px] rounded-full top-[-100px] sm:top-[-120px] md:top-[-150px] right-[-100px] sm:right-[-120px] md:right-[-150px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Let's Start a Conversation
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you have a question about our products or just want to say hello —
            we’re always ready to connect.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-12 sm:mt-16 md:mt-24 grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-start md:items-center">

          {/* Left Side Bold Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
              Your next step <br />
              starts with a message.
            </h3>

            <p className="mt-4 sm:mt-6 text-gray-400 leading-relaxed text-sm sm:text-base">
              At The Shoes Company, we believe every connection matters.
              Reach out and our team will respond within 24 hours.
            </p>

            <div className="mt-8 sm:mt-10 space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
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
            className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8"
          >
            {/* Floating Input */}
            <div className="relative">
              <input
                type="text"
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/30 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-red-500 transition"
              />
              <label className="absolute left-0 top-2.5 sm:top-3 text-gray-400 text-xs sm:text-sm transition-all peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-red-500 peer-focus:text-xs">
                Full Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/30 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-red-500 transition"
              />
              <label className="absolute left-0 top-2.5 sm:top-3 text-gray-400 text-xs sm:text-sm transition-all peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-red-500 peer-focus:text-xs">
                Email Address
              </label>
            </div>

            <div className="relative">
              <textarea
                rows="3"
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/30 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-red-500 transition resize-none"
              ></textarea>
              <label className="absolute left-0 top-2.5 sm:top-3 text-gray-400 text-xs sm:text-sm transition-all peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-red-500 peer-focus:text-xs">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition duration-300 py-2.5 sm:py-3 rounded-full font-semibold tracking-wide text-sm sm:text-base"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}