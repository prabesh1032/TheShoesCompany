import aboutImage from "../assets/about.jpg";

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white overflow-hidden py-12 sm:py-16 md:py-24">
      
      {/* Background Glow */}
      <div className="absolute w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] bg-purple-600/20 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full top-[-60px] sm:top-[-80px] right-[-60px] sm:right-[-80px]"></div>
      <div className="absolute w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] bg-red-600/20 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full bottom-[-60px] sm:bottom-[-80px] left-[-60px] sm:left-[-80px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading (Consistent Style) */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            About The Shoes Company
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We don't just create shoes. We create confidence, movement, and 
            identity. Every pair tells a story — your story.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16">

          {/* Image Side */}
          <div className="w-full md:flex-1">
            <img
              src={aboutImage}
              alt="About Shoes"
              className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
            />
          </div>

          {/* Text Side */}
          <div className="w-full md:flex-1">
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-white">
              Crafted for Performance & Style
            </h3>

            <p className="mt-4 sm:mt-6 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              Founded with a vision to redefine footwear culture, The Shoes Company 
              blends cutting-edge design with unmatched comfort. From athletes 
              chasing records to creators chasing dreams — we build shoes that 
              move with ambition.
            </p>

            <p className="mt-4 sm:mt-6 text-gray-400 leading-relaxed text-sm sm:text-base">
              Our materials are carefully selected, our designs are future-focused, 
              and our mission is simple — empower every step you take.
            </p>

            <button className="mt-6 sm:mt-8 bg-red-600 hover:bg-red-700 transition duration-300 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg shadow-red-600/30 text-sm sm:text-base">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}