import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage = '/images/hero-plumbing-bg.jpg',
  ogType = 'website',
  noIndex = false
}) => {
  const siteTitle = 'Affordable Plumbers Amanzimtoti | 24/7 Emergency Plumbing Services'
  const fullTitle = title ? `${title} | Makhathini Plumbers` : siteTitle
  const defaultDescription = 'Need a plumber in Amanzimtoti? ✅ Same-day service ✅ No call-out fee ✅ Affordable rates. 24/7 emergency plumbers for burst pipes, geyser repairs & blocked drains. Call 076 596 9429.'
  const metaDescription = description || defaultDescription
  const siteUrl = 'https://makhathiniplumbers.co.za'
  const metaKeywords = keywords || 'plumber Amanzimtoti, emergency plumber, affordable plumber near me, 24 hour plumber, plumbers near me, geyser repair, blocked drains, burst pipes, South Coast plumber'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={canonicalUrl || `${siteUrl}/`} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl || `${siteUrl}/`} />
      <meta property="og:site_name" content="Makhathini Plumbers" />
      <meta property="og:locale" content="en_ZA" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Geo Tags */}
      <meta name="geo.position" content="-30.0522;30.8950" />
      <meta name="geo.region" content="ZA-KZN" />
      <meta name="geo.placename" content="Amanzimtoti" />
    </Helmet>
  )
}

export default SEO