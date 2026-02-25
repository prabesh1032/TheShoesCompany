import Navbar from './components/Navbar'
import './App.css'
import "swiper/css";
import "swiper/css/pagination";
import Hero from './components/Hero'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testinomials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';


function App() {

  return (
    <>
    <body className='bg-black'>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </body>
    </>
  )
}

export default App
