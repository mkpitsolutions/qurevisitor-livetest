import { Link } from 'react-router-dom';
import React from 'react';
const ContactPage = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      {/* Header */}
      <header className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-6 flex justify-between items-center'>
          <Link to='/' className='text-2xl font-bold text-teal-600'>
            Ur<span className='text-gray-800'>Spayce</span>
          </Link>
          <nav className='hidden md:flex space-x-8'>
            <Link
              to='/features'
              className='text-gray-600 hover:text-teal-600 transition'
            >
              Features
            </Link>
            <Link
              to='/solutions'
              className='text-gray-600 hover:text-teal-600 transition'
            >
              Solutions
            </Link>
            <Link
              to='/pricing'
              className='text-gray-600 hover:text-teal-600 transition'
            >
              Pricing
            </Link>
            <Link
              to='/blog'
              className='text-gray-600 hover:text-teal-600 transition'
            >
              Blog
            </Link>
            <Link
              to='/contact'
              className='text-teal-600 font-medium border-b-2 border-teal-600 pb-1'
            >
              Contact
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

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 py-12'>
        {/* Contact Header */}
        <div className='text-center mb-16'>
          <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>
            Get in Touch
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Have questions about QureVisitor? Our team is here to help you
            transform your workplace.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
              Send us a message
            </h2>
            <form className='space-y-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    First Name
                  </label>
                  <input
                    type='text'
                    id='first-name'
                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition'
                    placeholder='John'
                  />
                </div>
                <div>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Last Name
                  </label>
                  <input
                    type='text'
                    id='last-name'
                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition'
                    placeholder='Doe'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Work Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition'
                  placeholder='john@company.com'
                />
              </div>

              <div>
                <label
                  htmlFor='company'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Company Name
                </label>
                <input
                  type='text'
                  id='company'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition'
                  placeholder='Acme Inc.'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  How can we help?
                </label>
                <textarea
                  id='message'
                  rows={4}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition'
                  placeholder='Tell us about your workplace challenges...'
                ></textarea>
              </div>

              <div>
                <button
                  type='submit'
                  className='w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300'
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className='space-y-8'>
            <div className='bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8'>
              <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
                Contact Information
              </h2>

              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-teal-100 p-3 rounded-lg'>
                    <svg
                      className='h-6 w-6 text-teal-600'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-lg font-medium text-gray-800'>
                      Email Us
                    </h3>
                    <p className='mt-1 text-gray-600'>connect@QureVisitor.com</p>
                    <p className='mt-1 text-gray-600'>support@QureVisitor.com</p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-teal-100 p-3 rounded-lg'>
                    <svg
                      className='h-6 w-6 text-teal-600'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-lg font-medium text-gray-800'>
                      Call Us
                    </h3>
                    <p className='mt-1 text-gray-600'>US: +1 302-440-2880</p>
                    <p className='mt-1 text-gray-600'>UAE: +971 58 508 8219</p>
                    <p className='mt-1 text-gray-600'>INDIA: +91 7898904001</p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-teal-100 p-3 rounded-lg'>
                    <svg
                      className='h-6 w-6 text-teal-600'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-lg font-medium text-gray-800'>
                      Our Offices
                    </h3>
                    <p className='mt-1 text-gray-600'>
                      330 N Wabash Ave, Chicago,
                      <br />
                      Illinois 60611, United States
                    </p>
                    <p className='mt-3 text-gray-600'>
                      1, 307B, Gargash design house, Al Soufouh,
                      <br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8'>
              <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
                Support Hours
              </h2>
              <div className='space-y-3'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Monday - Friday</span>
                  <span className='font-medium text-gray-800'>
                    9:00 AM - 6:00 PM (EST)
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Saturday</span>
                  <span className='font-medium text-gray-800'>
                    10:00 AM - 4:00 PM (EST)
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Sunday</span>
                  <span className='font-medium text-gray-800'>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className='bg-teal-600 text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Ready to see QureVisitor in action?
          </h2>
          <p className='text-teal-100 mb-8 max-w-2xl mx-auto'>
            Schedule a personalized demo with our product specialists.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Link
              to='/demo'
              className='bg-white text-teal-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition'
            >
              Request a Demo
            </Link>
            <Link
              to='/pricing'
              className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition'
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-white border-t border-gray-200 py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 text-center text-gray-600 text-sm'>
          © {new Date().getFullYear()} QureVisitor. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
