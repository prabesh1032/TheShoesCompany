import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Prabesh Acharya",
      role: "Athlete",
      message:
        "These shoes completely changed my performance. Super lightweight and extremely comfortable!",
      image: "../assets/user.jpg",
    },
    {
      name: "Pratik Tiwari",
      role: "Fashion Designer",
      message:
        "Stylish, bold, and premium quality. I wear them almost every day!",
      image: "../assets/pratik.jpg",
    },
    {
      name: "Pradip Khanal",
      role: "Entrepreneur",
      message:
        "The delivery was fast and the quality exceeded my expectations. Highly recommended!",
      image: "../assets/pradip.jpg",
    },
    {
      name: "Arjun Bhusal",
      role: "Teacher",
      message:
        "Best shoes I've ever owned. The comfort level is unmatched and they look amazing!",
      image: "../assets/arjun.jpg",
    },
    {
      name: "Ritesh kafle",
      role: "Musician",
      message:
        "From stage performances to daily wear, these shoes never disappoint. Truly exceptional!",
      image: "../assets/studentcamera.jpg",
    },
    {
      name: "Raju Shrestha",
      role: "Marathon Runner",
      message:
        "I've tested many running shoes, but these are by far the best. Highly recommended for athletes!",
      image: "../assets/hero.png",
    },
  ];

  return (
    <section id="testimonials" className="bg-black text-white py-12 sm:py-16 md:py-24 relative overflow-hidden">
      
      {/* Soft Background Glow */}
      <div className="absolute w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] bg-yellow-500/20 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full top-[-80px] sm:top-[-100px] right-[15%] sm:right-[30%]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading (Same Style Consistency) */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Real experiences from real people who walk with confidence.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            slidesPerGroup={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 w-full h-80 sm:h-[350px] md:h-[380px] flex flex-col">
                  <div className="flex flex-col items-center gap-6 text-center flex-1">
                    {/* Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-red-500/40"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      {/* Stars */}
                      <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>

                      {/* Message */}
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        "{item.message}"
                      </p>

                      {/* Name */}
                      <div className="mt-6">
                        <h4 className="text-lg sm:text-xl font-semibold text-white">
                          {item.name}
                        </h4>
                        <p className="text-gray-400 text-xs sm:text-sm">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}