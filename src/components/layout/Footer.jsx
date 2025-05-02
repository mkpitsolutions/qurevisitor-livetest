import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white to-indigo-50 text-gray-700 pt-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 mb-10">
          {/* Logo & Social */}
          <div>
            {/* <img src="/logo.png" alt="Happy Visitor" className="h-10 mb-4" /> */}
            <div className='mb-6'>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent'>
              Happy <span className='from-gray-800 to-gray-600'>Visitor</span>
            </h1>
            <p className='text-gray-500 mt-3 text-lg leading-relaxed'>
              Transforming workplace operations with smart digital solutions
            </p>
          </div> 
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-gray-600">
              {[
                'Visitor Management',
                'Material Management',
                'Registers Digitization',
                'Consumable Management',
                'Delivery Vehicle Management',
                'Work Permit',
                'Employee Movement Tracking',
                'Seat Booking System',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="hover:text-blue-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2 text-gray-600">
              {['Partner', 'About', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link to="/" className="hover:text-blue-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              {[
                'Blog',
                'Security',
                'Request For Demo',
                'Case Study',
                'Newsletter',
                'Press Releases',
                'Social Media Updates',
              ].map((item) => (
                <li key={item}>
                  <Link to="/" className="hover:text-blue-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="flex items-start mb-4">
              <i className="ri-phone-fill text-blue-500 text-xl mr-3 mt-1"></i>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <Link
                  to="tel:+919986003111"
                  className="text-lg font-medium hover:text-blue-500"
                >
                  +91 99860 03111
                </Link>
              </div>
            </div>
            <div className="flex items-start">
              <i className="ri-mail-fill text-blue-500 text-xl mr-3 mt-1"></i>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <Link
                  to="mailto:sales@happy-visitor.com"
                  className="text-lg font-medium hover:text-blue-500"
                >
                  sales@happy-visitor.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-200 pt-6 pb-8 text-center text-gray-500 text-sm">
          © 2021–{new Date().getFullYear()} Happy Visitors E Solutions Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
