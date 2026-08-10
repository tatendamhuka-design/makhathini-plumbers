import { Routes, Route, useParams } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Blog from '../pages/Blog'
import BlogPost from '../pages/BlogPost'
import ServicePage from '../pages/ServicePage'
import SEO from '../components/seo/SEO'

const LocationPage = () => {
  const { location } = useParams()
  const locationName = location?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  const locationDescriptions = {
    amanzimtoti: 'Same-day plumber in Amanzimtoti. ✅ No call-out fee. 24/7 emergency plumbing services. Call 076 596 9429 for a free quote.',
    kingsburgh: 'Professional plumber in Kingsburgh. ✅ Same-day service ✅ Affordable rates. Call 076 596 9429.',
    scottburgh: 'Reliable plumber in Scottburgh. Emergency plumbing services available 24/7. Call 076 596 9429.',
    umkomaas: 'Plumber in Umkomaas. Blocked drains, geyser repairs & more. Call 076 596 9429.',
    isipingo: 'Affordable plumber in Isipingo. Same-day service available. Call 076 596 9429.'
  }
  
  const description = locationDescriptions[location] || `Professional plumbing services in ${locationName}. Same-day service available. Call 076 596 9429.`

  return (
    <>
      <SEO 
        title={`Plumber ${locationName} | Affordable 24/7 Plumbing Services`}
        description={description}
        keywords={`plumber ${locationName}, emergency plumber ${locationName}, 24 hour plumber ${locationName}, affordable plumber near me`}
      />
      
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plumber in {locationName}</h1>
          <p className="text-lg opacity-90">Professional plumbing services in {locationName} and surrounding areas</p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-teal-600 mb-4">Reliable Plumbing Services in {locationName}</h2>
              <p className="text-gray-700 mb-4">
                Makhathini Plumbers provides professional, reliable plumbing services throughout {locationName} and the surrounding South Coast areas.
              </p>
              <p className="text-gray-700 mb-4">
                Our team of certified plumbers is available 24/7 for emergency repairs, including burst pipes, blocked drains, and geyser failures.
              </p>
              <p className="text-gray-700 mb-4">
                ✅ No call-out fee • ✅ Same-day service • ✅ Affordable rates
              </p>
              <h3 className="text-xl font-semibold text-teal-600 mb-3">Our Services in {locationName}:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li className="flex items-center gap-2"><span className="text-teal-500">✓</span> Geyser Installation & Repair</li>
                <li className="flex items-center gap-2"><span className="text-teal-500">✓</span> Blocked Drains</li>
                <li className="flex items-center gap-2"><span className="text-teal-500">✓</span> Burst Pipe Repairs</li>
                <li className="flex items-center gap-2"><span className="text-teal-500">✓</span> Leak Detection</li>
                <li className="flex items-center gap-2"><span className="text-teal-500">✓</span> Bathroom Renovations</li>
                <li className="flex items-center gap-2"><span className="text-teal-500">✓</span> Solar Geyser Installation</li>
              </ul>
            </div>
            <div className="bg-teal-50 rounded-2xl p-6 h-fit">
              <h3 className="text-xl font-bold text-teal-600 mb-4">Need a Plumber in {locationName}?</h3>
              <p className="text-gray-600 mb-4">Call or WhatsApp us for a free quote</p>
              <a href="tel:0765969429" className="flex items-center justify-center gap-2 bg-teal-500 text-white py-3 rounded-full font-semibold hover:bg-teal-600 transition w-full mb-3">
                📞 Call 076 596 9429
              </a>
              <a href={`https://wa.me/27765969429?text=Hello%20Makhathini%20Plumbers,%20I%20need%20a%20plumber%20in%20${locationName}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition w-full">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const AppRoutes = () => {
  const locations = ['amanzimtoti', 'kingsburgh', 'scottburgh', 'umkomaas', 'isipingo']
  const services = ['geyser-installation', 'blocked-drains', 'leak-detection', 'burst-pipes', 'bathroom-renovations', 'solar-geysers']

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/contact" element={<Contact />} />
      
      {services.map(slug => (
        <Route key={slug} path={`/services/${slug}`} element={<ServicePage />} />
      ))}
      
      {locations.map(loc => (
        <Route key={loc} path={`/plumber-${loc}`} element={<LocationPage />} />
      ))}
    </Routes>
  )
}

export default AppRoutes