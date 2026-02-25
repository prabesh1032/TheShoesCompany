import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Athlete",
      message:
        "These shoes completely changed my performance. Super lightweight and extremely comfortable!",
    },
    {
      name: "Sophia Williams",
      role: "Fashion Designer",
      message:
        "Stylish, bold, and premium quality. I wear them almost every day!",
    },
    {
      name: "Michael Brown",
      role: "Entrepreneur",
      message:
        "The delivery was fast and the quality exceeded my expectations. Highly recommended!",
    },
  ];

  return (
    <section className="bg-black text-white py-24 relative overflow-hidden">
      
      {/* Soft Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-yellow-500/20 blur-[120px] rounded-full top-[-100px] right-[30%]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading (Same Style Consistency) */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Real experiences from real people who walk with confidence.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-20 max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 text-center"
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1 text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-gray-300 text-lg leading-relaxed">
                    "{item.message}"
                  </p>

                  {/* Name */}
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold text-white">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.role}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}