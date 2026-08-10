import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/seo/SEO'
import { blogPosts, blogCategories } from '../data/blogPosts'
import { FaCalendar, FaClock, FaTag, FaSearch } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  useEffect(() => {
    let filtered = blogPosts
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category.toLowerCase() === selectedCategory)
    }
    
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
    
    setFilteredPosts(filtered)
  }, [selectedCategory, searchTerm])

  return (
    <>
      <SEO 
        title="Plumbing Tips & Advice Blog | Makhathini Plumbers"
        description="Read expert plumbing tips, advice, and guides from Makhathini Plumbers. Learn about geyser repairs, blocked drains, burst pipes, and more."
        keywords="plumbing tips, plumbing advice, geyser repair tips, blocked drains guide, plumber blog, South Coast plumber"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plumbing Tips & Advice</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Expert plumbing tips, guides, and advice to help you maintain your home
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-2/3">
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:border-teal-500"
                  />
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-teal-500 bg-white"
                >
                  {blogCategories.map(cat => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Blog Posts Grid */}
              {filteredPosts.length > 0 ? (
                <div className="space-y-8">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
                    >
                      <Link to={`/blog/${post.slug}`} className="block">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>
                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <FaCalendar /> {new Date(post.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaClock /> {post.readTime}
                          </span>
                          <span className="bg-teal-100 text-teal-600 px-2 py-0.5 rounded-full text-xs">
                            {post.category}
                          </span>
                        </div>
                        <Link to={`/blog/${post.slug}`}>
                          <h2 className="text-2xl font-bold text-gray-800 hover:text-teal-600 transition-colors mb-2">
                            {post.title}
                          </h2>
                        </Link>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="inline-block text-teal-500 font-semibold hover:text-teal-700 transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No articles found. Try a different search term.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:w-1/3">
              <div className="bg-teal-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-teal-600 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {blogCategories.map(cat => (
                    <li key={cat.slug}>
                      <button
                        onClick={() => setSelectedCategory(cat.slug)}
                        className={`w-full text-left px-4 py-2 rounded-xl transition ${
                          selectedCategory === cat.slug
                            ? 'bg-teal-600 text-white'
                            : 'hover:bg-teal-100 text-gray-700'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>

                <hr className="my-4 border-teal-200" />

                <h4 className="font-semibold text-teal-600 mb-3">Recent Posts</h4>
                <ul className="space-y-3">
                  {blogPosts.slice(0, 3).map(post => (
                    <li key={post.id}>
                      <Link to={`/blog/${post.slug}`} className="text-sm hover:text-teal-600 transition-colors">
                        {post.title}
                      </Link>
                      <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString('en-ZA')}</p>
                    </li>
                  ))}
                </ul>

                <hr className="my-4 border-teal-200" />

                <div className="bg-teal-600 text-white rounded-xl p-4 text-center">
                  <h4 className="font-bold mb-2">Need a Plumber?</h4>
                  <p className="text-sm opacity-90 mb-3">Call us for a free quote</p>
                  <a href="tel:0765969429" className="bg-white text-teal-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition inline-block text-sm">
                    Call 076 596 9429
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog