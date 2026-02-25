import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpg";

export default function About() {
  return (
    <section className="relative bg-black text-white overflow-hidden py-24">
      
      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full top-[-80px] right-[-80px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-red-600/20 blur-[120px] rounded-full bottom-[-80px] left-[-80px]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Heading (Consistent Style) */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            About The Shoes Company
          </h2>

          <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            We don't just create shoes. We create confidence, movement, and 
            identity. Every pair tells a story — your story.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="mt-20 flex flex-col md:flex-row items-center gap-16">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <motion.img
              src={aboutImage}
              alt="About Shoes"
              className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-2xl font-semibold text-white">
              Crafted for Performance & Style
            </h3>

            <p className="mt-6 text-gray-300 leading-relaxed text-lg">
              Founded with a vision to redefine footwear culture, The Shoes Company 
              blends cutting-edge design with unmatched comfort. From athletes 
              chasing records to creators chasing dreams — we build shoes that 
              move with ambition.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Our materials are carefully selected, our designs are future-focused, 
              and our mission is simple — empower every step you take.
            </p>

            <button className="mt-8 bg-red-600 hover:bg-red-700 transition duration-300 px-8 py-3 rounded-full font-semibold shadow-lg shadow-red-600/30">
              Learn More
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}