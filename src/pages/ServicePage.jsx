import { useParams, Link } from 'react-router-dom'
import SEO from '../components/seo/SEO'
import { services } from '../data/services'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema'
import ServiceSchema from '../components/seo/ServiceSchema'

const ServicePage = () => {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return <div className="container-custom py-20 text-center">Service not found</div>
  }

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${slug}` }
  ]

  return (
    <>
      <SEO 
        title={`${service.title} Amanzimtoti | Affordable Plumbing Services`}
        description={`Affordable ${service.title.toLowerCase()} services in Amanzimtoti and surrounding areas. ✅ Same-day service ✅ No call-out fee. ${service.description}. Call or WhatsApp for a free quote.`}
        keywords={`${service.title.toLowerCase()} Amanzimtoti, affordable ${service.title.toLowerCase()}, emergency ${service.title.toLowerCase()}, ${service.title.toLowerCase()} near me`}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema service={service} location="Amanzimtoti" />

      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16">
        <div className="container-custom text-center">
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title} in Amanzimtoti</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">{service.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-teal-600 mb-4">Professional {service.title} Services</h2>
              <p className="text-gray-700 mb-6">{service.longDescription}</p>
              
              <h3 className="text-xl font-semibold text-teal-600 mb-3">What We Offer:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-teal-500">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-teal-50 rounded-2xl p-6 h-fit sticky top-24">
              <h3 className="text-xl font-bold text-teal-600 mb-4">Get a Free Quote</h3>
              <p className="text-gray-600 mb-4">✅ No call-out fee • ✅ Same-day service</p>
              <div className="space-y-3">
                <a href="tel:0765969429" className="flex items-center justify-center gap-2 bg-teal-500 text-white py-3 rounded-full font-semibold hover:bg-teal-600 transition w-full">
                  <FaPhone /> Call 076 596 9429
                </a>
                <a href={`https://wa.me/27765969429?text=Hello%20Makhathini%20Plumbers,%20I%20need%20a%20quote%20for%20${service.title.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition w-full">
                  <FaWhatsapp /> WhatsApp Us
                </a>
              </div>
              <p className="text-xs text-gray-400 text-center mt-4">Response within 30 minutes</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicePage