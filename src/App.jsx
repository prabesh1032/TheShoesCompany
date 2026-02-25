import Navbar from './components/Navbar'
import './App.css'
import "swiper/css";
import "swiper/css/pagination";
import Hero from './components/Hero'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testinomials';

function App() {

  return (
    <>
    <body className='bg-black'>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Testimonials />
    </body>
    </>
  )
}

export default App
