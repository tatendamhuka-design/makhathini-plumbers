import { Link } from 'react-router-dom'
import { FaWhatsapp, FaClock, FaCheckCircle, FaMoneyBillWave } from 'react-icons/fa'
import { motion } from 'framer-motion'
import heroBg from '../../assets/images/hero-plumbing-bg.jpg'

const Hero = () => {
  return (
    <section 
      className="relative text-white py-20 md:py-28 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Same-Day Plumber in Amanzimtoti
          </h1>
          <p className="text-lg md:text-xl mb-4 opacity-90">
            ✅ No call-out fee • ✅ Same-day service • ✅ Affordable rates
          </p>
          <p className="text-base md:text-lg mb-8 opacity-90 max-w-xl">
            Specialists in Domestic & Industrial Plumbing in Amanzimtoti and surrounding areas
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all hover:scale-105 inline-flex items-center gap-2">
              📋 Get a Free Quote
            </Link>
            <a
              href="tel:0765969429"
              className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-all hover:scale-105"
            >
              <FaClock /> Call Now: 076 596 9429
            </a>
            <a
              href="https://wa.me/27765969429?text=Hello%20Makhathini%20Plumbers,%20I%20need%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-green-600 transition-all hover:scale-105"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap gap-4 mt-8 text-sm opacity-80">
            <span className="flex items-center gap-1"><FaCheckCircle className="text-green-400" /> No call-out fee</span>
            <span className="flex items-center gap-1"><FaCheckCircle className="text-green-400" /> Same-day service</span>
            <span className="flex items-center gap-1"><FaMoneyBillWave className="text-green-400" /> Affordable rates</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero