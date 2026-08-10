import { Link } from 'react-router-dom'
import SEO from '../components/seo/SEO'
import { services } from '../data/services'
import { faqs } from '../data/faqs'
import { motion } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useState } from 'react'

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <SEO 
        title="Plumbing Services Amanzimtoti | Geyser, Drains & More"
        description="Affordable plumbing services in Amanzimtoti: geyser installation & repair, blocked drains, burst pipes, leak detection, bathroom renovations, solar geysers. Same-day service ✅ No call-out fee. Call 076 596 9429."
        keywords="plumbing services Amanzimtoti, geyser repair, blocked drains, burst pipe plumber, affordable plumber near me, 24 hour plumber"
      />

      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Professional Services</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Comprehensive plumbing solutions for residential and commercial properties</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-teal-600 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-block text-teal-500 font-semibold text-sm hover:text-teal-700 transition-colors"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-10">
            <span className="text-teal-500 border-b-4 border-teal-200 pb-2">Frequently Asked Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-teal-50 transition-colors"
                >
                  {faq.question}
                  {openFaq === index ? <FaMinus className="text-teal-500" /> : <FaPlus className="text-teal-500" />}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-gray-600 border-t">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-teal-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Emergency? We're Here 24/7</h2>
          <p className="mb-6 opacity-90">Don't wait for a small problem to become a disaster.</p>
          <a href="tel:0765969429" className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all inline-block">Call Now: 076 596 9429</a>
        </div>
      </section>
    </>
  )
}

export default Services