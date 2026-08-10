import SEO from '../components/seo/SEO'
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema'
import bathroomImg from '../assets/images/bathroom.jpeg'
import toiletImg from '../assets/images/toilet.jpeg'
import geyserImg from '../assets/images/geyser.jpeg'
import pipesImg from '../assets/images/pipes.jpeg'
import jojoImg from '../assets/images/jojo.jpeg'
import pipingImg from '../assets/images/piping.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const portfolioItems = [
  { 
    id: 1, 
    image: bathroomImg, 
    title: 'Bathroom Renovation', 
    icon: '🚿',
    desc: 'Complete bathroom transformation from outdated to modern luxury. New tiles, modern fixtures, and efficient plumbing layout.',
    category: 'Renovation'
  },
  { 
    id: 2, 
    image: toiletImg, 
    title: 'Toilet Installation', 
    icon: '🚽',
    desc: 'Professional toilet installation with water-efficient modern unit. Includes new pan, cistern, and waste pipe connection.',
    category: 'Installation'
  },
  { 
    id: 3, 
    image: geyserImg, 
    title: 'Geyser Installation', 
    icon: '⚡',
    desc: 'New energy-efficient geyser installation with safety valves and proper piping. Reliable hot water guaranteed.',
    category: 'Installation'
  },
  { 
    id: 4, 
    image: pipesImg, 
    title: 'Sink & Water Pipes Replacement', 
    icon: '🔧',
    desc: 'Complete replacement of corroded pipes under kitchen sink. Upgraded to durable copper piping. Eliminated leaks.',
    category: 'Repair'
  },
  { 
    id: 5, 
    image: jojoImg, 
    title: 'JoJo Tank Installation', 
    icon: '💧',
    desc: 'Complete rainwater harvesting system. 2500L JoJo tank with pressure pump and overflow management.',
    category: 'Installation'
  },
  { 
    id: 6, 
    image: pipingImg, 
    title: 'Piping & Drainage System', 
    icon: '🏭',
    desc: 'Professional piping installation for industrial kitchen. High-quality PVC and copper pipes.',
    category: 'Commercial'
  }
]

const Portfolio = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Our Work', url: '/portfolio' }
  ]

  return (
    <>
      <SEO 
        title="Plumbing Projects Amanzimtoti | Bathroom, Geyser & Pipe Gallery"
        description="View our completed plumbing projects in Amanzimtoti and South Coast. Bathroom renovations, geyser installations, pipe replacements, JoJo tank installations. Same-day service ✅ No call-out fee."
        keywords="plumbing projects Amanzimtoti, bathroom renovation gallery, geyser installation photos, plumbing portfolio South Coast, affordable plumber near me"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Recent Projects</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Take a look at some of our completed plumbing work across Amanzimtoti and the South Coast
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { 
                      e.target.src = 'https://placehold.co/600x400/2A8C8C/FFFFFF?text=' + encodeURIComponent(item.title)
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-xl font-bold text-teal-600 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                  <Link 
                    to="/contact" 
                    className="inline-block text-teal-500 font-semibold text-sm hover:text-teal-700 transition-colors"
                  >
                    Get a similar quote →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-teal-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Contact us today for a free quote. We'll bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition">
              Get a Free Quote
            </Link>
            <a 
              href="https://wa.me/27765969429?text=Hello%20Makhathini%20Plumbers,%20I%20want%20to%20discuss%20a%20project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition flex items-center gap-2"
            >
              Discuss on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio