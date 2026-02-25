import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-red-600/20 blur-[120px] rounded-full bottom-[-100px] left-[20%]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Have questions? Want to collaborate? We'd love to hear from you.
            Reach out and let’s move forward together.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-20 grid md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <Mail className="text-red-500" size={28} />
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="text-gray-400">support@theshoescompany.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-red-500" size={28} />
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-gray-400">+977 9812965110</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-red-500" size={28} />
              <div>
                <h4 className="font-semibold text-white">Location</h4>
                <p className="text-gray-400">Kathmandu, Nepal</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3 focus:outline-none focus:border-red-500 transition duration-300 text-white placeholder-gray-400"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3 focus:outline-none focus:border-red-500 transition duration-300 text-white placeholder-gray-400"
              />
            </div>

            <div>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3 focus:outline-none focus:border-red-500 transition duration-300 text-white placeholder-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition duration-300 py-3 rounded-xl font-semibold shadow-lg shadow-red-600/30"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}