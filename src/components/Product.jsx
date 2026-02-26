import { motion } from "framer-motion";
import shoe1 from "../assets/shoes1.webp";
import shoe2 from "../assets/shoes2.webp";
import shoe3 from "../assets/shoes3.webp";
import shoe4 from "../assets/shoes4.webp";

export default function Product() {
  const products = [
    {
      name: "Air Flex Pro",
      price: "$129",
      image: shoe1,
    },
    {
      name: "Urban Runner X",
      price: "$149",
      image: shoe2,
    },
    {
      name: "Street Impact",
      price: "$119",
      image: shoe3,
    },
    {
      name: "Velocity Max",
      price: "$169",
      image: shoe4,
    },
  ];

  return (
    <section id="products" className="relative bg-black text-white py-28 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full bottom-[-150px] right-[-150px]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading (Consistent Style) */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Our Latest Collection
          </h2>

          <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Designed for performance. Built for style. Choose your perfect pair.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 group overflow-hidden"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-white">
                  {product.name}
                </h3>

                <p className="mt-2 text-gray-400">
                  {product.price}
                </p>

                <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition duration-300 py-2 rounded-full font-medium">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}