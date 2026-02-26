import { motion } from "framer-motion";
import { Search, ShoppingCart, Truck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search size={40} />,
      title: "Browse Collection",
      description:
        "Explore our premium designs crafted for comfort, performance, and bold street style.",
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "Choose & Order",
      description:
        "Select your favorite pair, customize size and style, and place your order securely.",
    },
    {
      icon: <Truck size={40} />,
      title: "Fast Delivery",
      description:
        "We deliver your shoes quickly and safely right to your doorstep.",
    },
  ];

  return (
    <section id="how-it-works" className="relative bg-black text-white py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading (Same Style) */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            How It Works
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Getting your perfect pair is simple, fast, and seamless. 
            Just follow these three easy steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center hover:border-red-500/40 transition duration-300 group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 sm:mb-6 text-red-500 group-hover:scale-110 transition duration-300">
                {step.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 sm:mt-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}