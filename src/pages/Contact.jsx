import SEO from '../components/seo/SEO'
import ContactForm from '../components/contact/ContactForm'
import ContactDetails from '../components/contact/ContactDetails'

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Plumber Amanzimtoti | Free Quote 076 596 9429"
        description="Need an affordable plumber in Amanzimtoti? Call, WhatsApp, or email us for a free quote. ✅ Same-day service ✅ No call-out fee. 24/7 emergency services available. 076 596 9429."
        keywords="contact plumber Amanzimtoti, affordable plumber near me, plumbing quotes South Coast, emergency plumber, 24 hour plumber"
      />

      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg opacity-90">We're here to help with all your plumbing needs</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactDetails />
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">Business Hours</h2>
          <p className="text-gray-700">Monday - Sunday: <span className="font-semibold">24/7 Emergency Service</span></p>
          <p className="text-gray-500 text-sm mt-2">Regular hours: 8:00 AM - 5:00 PM | Emergency: Always available</p>
          <p className="text-gray-500 text-sm mt-4">📍 Serving Amanzimtoti, Kingsburgh, Scottburgh, Umkomaas, Isipingo & surrounding areas</p>
        </div>
      </section>
    </>
  )
}

export default Contact