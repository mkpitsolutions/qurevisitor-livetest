import { Link } from 'react-router-dom';
import React from 'react';
const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: 'The Future of Hybrid Work: 5 Trends Shaping 2024',
    excerpt:
      'Discover how AI-powered workplace management is transforming hybrid work models for enterprises.',
    date: 'May 15, 2024',
    category: 'Workplace Trends',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80',
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Optimizing Office Space with Smart Desk Booking',
      excerpt:
        'How Fortune 500 companies are reducing real estate costs by 30% using intelligent space management.',
      date: 'April 28, 2024',
      category: 'Facility Management',
      image:
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      title: 'Visitor Management: From Security to Experience',
      excerpt:
        'Transforming your reception area into a strategic asset with digital check-in systems.',
      date: 'April 10, 2024',
      category: 'Security',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 4,
      title: 'Integrating QureVisitor with Microsoft Teams',
      excerpt:
        'Step-by-step guide to syncing your room booking system with collaboration tools.',
      date: 'March 22, 2024',
      category: 'Product Updates',
      image:
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <div className='bg-gray-50 min-h-screen'>
      <header className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-6 flex justify-between items-center'>
          <Link to='/' className='text-2xl font-bold text-teal-600'>
          Qure<span className='text-gray-800'>Visitor</span>     Blog
          </Link>
          <nav className='hidden md:flex space-x-8'>
            <Link
              to='/blog'
              className='text-teal-600 font-medium border-b-2 border-teal-600 pb-1'
            >
              All Posts
            </Link>
            <Link
              to='/blog/workplace-trends'
              className='text-gray-600 hover:text-teal-600 transition'
            >
              Workplace Trends
            </Link>
            <Link
              to='/blog/product-updates'
              className='text-gray-600 hover:text-teal-600 transition'
            >
              Product Updates
            </Link>
            <Link
              to='/blog/case-studies'
              className='text-gray-600 hover:text-teal-600 transition'
            >
              Case Studies
            </Link>
          </nav>
          <button className='md:hidden text-gray-600'>
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </header>

      <section className='max-w-7xl mx-auto px-4 sm:px-6 py-12'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>
          Featured Article
        </h2>
        <div className='bg-white rounded-xl shadow-md overflow-hidden'>
          <div className='md:flex'>
            <div className='md:flex-shrink-0 md:w-1/2'>
              <img
                className='h-64 w-full object-cover md:h-full'
                src={featuredPost.image}
                alt={featuredPost.title}
              />
            </div>
            <div className='p-8 md:w-1/2'>
              <div className='uppercase tracking-wide text-sm text-teal-600 font-semibold'>
                {featuredPost.category}
              </div>
              <Link
                to={`/blog/${featuredPost.id}`}
                className='block mt-1 text-2xl font-semibold text-gray-800 hover:text-teal-600 transition'
              ></Link>
              <p className='mt-3 text-gray-600'>{featuredPost.excerpt}</p>
              <div className='mt-6 flex items-center'>
                <div className='text-sm text-gray-500'>{featuredPost.date}</div>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className='ml-auto inline-flex items-center text-teal-600 hover:text-teal-800 font-medium'
                >
                  Read more
                  <svg
                    className='w-4 h-4 ml-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 sm:px-6 py-12'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>
          Latest Articles
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'
            >
              <img
                className='h-48 w-full object-cover'
                src={post.image}
                alt={post.title}
              />
              <div className='p-6'>
                <div className='flex justify-between items-center'>
                  <span className='text-xs font-semibold text-teal-600'>
                    {post.category}
                  </span>
                  <span className='text-xs text-gray-500'>{post.date}</span>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className='block mt-2 text-xl font-semibold text-gray-800 hover:text-teal-600 transition'
                >
                  {post.title}
                </Link>
                <p className='mt-3 text-gray-600 text-sm'>{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className='mt-4 inline-flex items-center text-teal-600 hover:text-teal-800 text-sm font-medium'
                >
                  Read more
                  <svg
                    className='w-4 h-4 ml-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-teal-600 text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Ready to transform your workplace?
          </h2>
          <p className='text-teal-100 mb-8 max-w-2xl mx-auto'>
            Get started with QureVisitor today and experience the future of
            workplace management.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Link
              to='/demo'
              className='bg-white text-teal-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition'
            >
              Request a Demo
            </Link>
            <Link
              to='/contact'
              className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition'
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <footer className='bg-white border-t border-gray-200 py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 text-center text-gray-600 text-sm'>
          © {new Date().getFullYear()} QureVisitor. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
