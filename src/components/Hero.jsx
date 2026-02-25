import { motion } from "framer-motion";
import heroShoe from "../assets/heroshoes.jpg";

export default function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden top-10">
      
      {/* Background Glow Effect */}
      <div className="absolute w-125 h-125 bg-red-600/20 blur-[120px] rounded-full -top-25 -left-25"></div>
      <div className="absolute w-100 h-100 bg-blue-600/20 blur-[120px] rounded-full -bottom-25 -right-25"></div>

      <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between relative z-10">
        
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-linear-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Walk With Power. <br /> Step Into Style.
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Discover the perfect blend of comfort, innovation, and bold design. 
            The Shoes Company brings you premium footwear crafted for dreamers, 
            athletes, and trendsetters.
          </p>

          <div className="mt-8 flex gap-6">
            <button className="bg-red-600 hover:bg-red-700 transition duration-300 px-8 py-3 rounded-full font-semibold shadow-lg shadow-red-600/30">
              Shop Now
            </button>

            <button className="border border-white/40 hover:border-white transition duration-300 px-8 py-3 rounded-full font-semibold">
              Explore Collection
            </button>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-0"
        >
          <motion.img
            src={heroShoe}
            alt="Premium Shoe"
            className="w-112.5 drop-shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}