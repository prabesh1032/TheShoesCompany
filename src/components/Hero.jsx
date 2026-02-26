import { motion } from "framer-motion";
import heroShoe from "../assets/heroshoes.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative bg-black text-white overflow-hidden pt-16 sm:pt-20 md:pt-10">
      
      {/* Background Glow Effect */}
      <div className="absolute w-80 sm:w-96 md:w-125 h-80 sm:h-96 md:h-125 bg-red-600/20 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full -top-16 sm:-top-20 md:-top-25 -left-16 sm:-left-20 md:-left-25"></div>
      <div className="absolute w-80 sm:w-96 md:w-100 h-80 sm:h-96 md:h-100 bg-blue-600/20 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full -bottom-16 sm:-bottom-20 md:-bottom-25 -right-16 sm:-right-20 md:-right-25"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
        
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:max-w-xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-linear-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Walk With Power. <br /> Step Into Style.
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Discover the perfect blend of comfort, innovation, and bold design. 
            The Shoes Company brings you premium footwear crafted for dreamers, 
            athletes, and trendsetters.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="#about" className="bg-red-600 hover:bg-red-700 transition duration-300 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg shadow-red-600/30 text-sm sm:text-base inline-block text-center">
              Shop Now
            </a>

            <a href="#products" className="border border-white/40 hover:border-white transition duration-300 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base inline-block text-center">
              Explore Collection
            </a>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:flex-1 flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <motion.img
            src={heroShoe}
            alt="Premium Shoe"
            className="w-64 sm:w-80 md:w-96 lg:w-112.5 drop-shadow-2xl"
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