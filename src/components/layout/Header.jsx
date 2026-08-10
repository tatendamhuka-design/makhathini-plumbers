import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaWhatsapp, FaBars, FaBuilding, FaChartLine } from 'react-icons/fa'
import MobileMenu from './MobileMenu'
import logo from '../../assets/images/logo.jpg'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Our Work' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Top Bar - BBBEE and Company Registration */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-2 px-4">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs md:text-sm">
            <span className="flex items-center gap-2">
              <FaChartLine className="text-green-300" />
              <span className="font-semibold">BBBEE Level 1 Contributor - 100% Compliance</span>
            </span>
            <span className="flex items-center gap-2">
              <FaBuilding className="text-blue-300" />
              <span className="font-semibold">Reg No: 2013/0652060/07</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">🏆</span>
              <span>Fully Licensed & Insured</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo with image */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Makhathini Plumbers Logo" 
                className="w-10 h-10 object-contain rounded-full"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                  Makhathini Plumbers
                </h1>
                <span className="text-xs text-teal-500">Pty Ltd | Est. 2012</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `font-medium transition-colors hover:text-teal-500 ${
                      isActive ? 'text-teal-500 border-b-2 border-teal-500 pb-1' : 'text-gray-700'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="https://wa.me/27765969429?text=Hello%20Makhathini%20Plumbers,%20I%20need%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-green-600 transition-all"
              >
                <FaWhatsapp /> WhatsApp Now
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-teal-500"
              aria-label="Menu"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navLinks={navLinks} />
    </>
  )
}

export default Header