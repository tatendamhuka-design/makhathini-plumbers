import { useParams, Link } from 'react-router-dom'
import { blogPosts, getRelatedPosts } from '../data/blogPosts'
import SEO from '../components/seo/SEO'
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema'
import { FaCalendar, FaClock, FaTag, FaUser, FaArrowLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'

const BlogPost = () => {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Article Not Found</h2>
        <p className="text-gray-500 mb-6">The article you're looking for doesn't exist.</p>
        <Link to="/blog" className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition inline-block">
          Back to Blog
        </Link>
      </div>
    )
  }

  const relatedPosts = getRelatedPosts(post.id, post.category)

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` }
  ]

  return (
    <>
      <SEO 
        title={`${post.title} | Plumbing Tips & Advice`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Blog Post */}
      <section className="py-12">
        <div className="container-custom">
          <Link to="/blog" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 transition mb-6">
            <FaArrowLeft /> Back to Blog
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <FaCalendar /> {new Date(post.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock /> {post.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <FaUser /> {post.author}
                </span>
                <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-xs">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-gray-600">{post.excerpt}</p>
            </div>

            {/* Featured Image */}
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full rounded-2xl shadow-md mb-8"
            />

            {/* Content */}
            <div 
              className="prose max-w-none prose-headings:text-teal-600 prose-a:text-teal-500"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-2">Share this article:</p>
              <div className="flex gap-3">
                <a 
                  href={`https://wa.me/?text=${encodeURIComponent(`Check out this article: ${post.title} https://makhathiniplumbers.co.za/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition"
                >
                  Share on WhatsApp
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://makhathiniplumbers.co.za/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition"
                >
                  Share on Facebook
                </a>
              </div>
            </div>
          </motion.article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-teal-600 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(related => (
                  <Link 
                    key={related.id} 
                    to={`/blog/${related.slug}`}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <img 
                      src={related.image} 
                      alt={related.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 hover:text-teal-600 transition-colors">
                        {related.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{new Date(related.date).toLocaleDateString('en-ZA')}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-teal-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Need Professional Plumbing Help?</h2>
          <p className="text-lg opacity-90 mb-6">Get a free quote from our team of certified plumbers.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0765969429" className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Call 076 596 9429
            </a>
            <a href="https://wa.me/27765969429?text=Hello%20Makhathini%20Plumbers,%20I%20need%20plumbing%20help" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPost