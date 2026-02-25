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
    <section className="relative bg-black text-white py-24 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full top-[-100px] left-[30%]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Heading (Same Style) */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            How It Works
          </h2>

          <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Getting your perfect pair is simple, fast, and seamless. 
            Just follow these three easy steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 text-center hover:border-red-500/40 transition duration-300 group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 text-red-500 group-hover:scale-110 transition duration-300">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}