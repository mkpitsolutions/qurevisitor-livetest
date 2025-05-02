import { Link } from 'react-router-dom';
import React from 'react';
const CareersPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Frontend Developer (React)',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      description:
        'Build intuitive interfaces for our workplace management platform using modern React and Tailwind CSS.',
    },
    {
      id: 2,
      title: 'Product Manager',
      type: 'Full-time',
      location: 'Chicago, IL',
      department: 'Product',
      description:
        'Lead the vision and execution of features that transform how companies manage their workplaces.',
    },
    {
      id: 3,
      title: 'Customer Success Specialist',
      type: 'Full-time',
      location: 'Dubai, UAE',
      department: 'Customer Experience',
      description:
        'Help customers maximize value from QureVisitor through training and best practice guidance.',
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      description:
        'Build and maintain our cloud infrastructure to ensure reliability and scalability.',
    },
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      icon: 'ri-money-dollar-circle-fill',
      description: 'Salary, bonuses, and equity options',
    },
    {
      title: 'Flexible Work',
      icon: 'ri-home-office-line',
      description: 'Remote-friendly with flexible hours',
    },
    {
      title: 'Health & Wellness',
      icon: 'ri-heart-pulse-fill',
      description: 'Comprehensive medical coverage',
    },
    {
      title: 'Learning Budget',
      icon: 'ri-book-open-line',
      description: '$1,000/year for professional development',
    },
    {
      title: 'Generous PTO',
      icon: 'ri-sun-fill',
      description: 'Unlimited vacation policy',
    },
    {
      title: 'Team Retreats',
      icon: 'ri-plane-line',
      description: 'Annual global gatherings',
    },
  ];

  return (
    <div className='bg-gray-50 min-h-screen'>
      <div className='relative bg-gradient-to-r from-teal-600 to-teal-800 text-white overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32'>
          <div className='relative z-10'>
            <h1 className='text-4xl md:text-5xl font-bold leading-tight mb-6'>
              Build the Future of Work
              <br />
              with QureVisitor
            </h1>
            <p className='text-xl md:text-2xl text-teal-100 max-w-3xl mb-8'>
              Join our mission to revolutionize workplace management through
              innovative technology.
            </p>
            <Link
              to='#openings'
              className='inline-flex items-center bg-white text-teal-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all'
            >
              View Open Positions
              <svg
                className='w-5 h-5 ml-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 14l-7 7m0 0l-7-7m7 7V3'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <section className='max-w-7xl mx-auto px-4 sm:px-6 py-16'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>
          Our Culture
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow'>
            <div className='text-teal-600 text-4xl mb-4'>
              <i className='ri-team-fill'></i>
            </div>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>
              Collaborative
            </h3>
            <p className='text-gray-600'>
              We believe the best solutions come from cross-functional teamwork
              and diverse perspectives.
            </p>
          </div>
          <div className='bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow'>
            <div className='text-teal-600 text-4xl mb-4'>
              <i className='ri-lightbulb-flash-fill'></i>
            </div>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>
              Innovative
            </h3>
            <p className='text-gray-600'>
              We challenge the status quo and empower our team to experiment and
              take smart risks.
            </p>
          </div>
          <div className='bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow'>
            <div className='text-teal-600 text-4xl mb-4'>
              <i className='ri-user-heart-fill'></i>
            </div>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>
              Customer-Focused
            </h3>
            <p className='text-gray-600'>
              Everything we build starts with understanding our customers' real
              workplace challenges.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-teal-50 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>
            Perks & Benefits
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'
              >
                <div className='text-teal-600 text-3xl mb-3'>
                  <i className={benefit.icon}></i>
                </div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                  {benefit.title}
                </h3>
                <p className='text-gray-600'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='openings' className='max-w-7xl mx-auto px-4 sm:px-6 py-16'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-4'>
          Current Openings
        </h2>
        <p className='text-gray-600 text-center max-w-2xl mx-auto mb-12'>
          We're looking for talented individuals to join our growing team across
          multiple disciplines.
        </p>

        <div className='space-y-6'>
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow'
            >
              <div className='p-6 sm:p-8'>
                <div className='flex flex-col sm:flex-row justify-between'>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-800'>
                      {job.title}
                    </h3>
                    <div className='flex flex-wrap gap-3 mt-2'>
                      <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800'>
                        {job.type}
                      </span>
                      <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800'>
                        {job.location}
                      </span>
                      <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800'>
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/careers/${job.id}`}
                    className='mt-4 sm:mt-0 inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all'
                  >
                    Apply Now
                  </Link>
                </div>
                <p className='mt-4 text-gray-600'>{job.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <p className='text-gray-600 mb-6'>
            Don't see your perfect role? We're always interested in meeting
            talented people.
          </p>
          <Link
            to='/contact'
            className='inline-flex items-center text-teal-600 hover:text-teal-800 font-semibold'
          >
            Contact Us About Future Opportunities
            <svg
              className='w-4 h-4 ml-2'
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
      </section>

      <section className='bg-gray-800 text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Life at QureVisitor
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <img
              src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
              alt='Team collaboration'
              className='h-64 w-full object-cover rounded-lg'
            />
            <img
              src='https://images.squarespace-cdn.com/content/v1/5877fcf8ebbd1a0e70bf993e/1604252387247-HR09CKWFXF6FQT7BM8U8/empty+office+environment'
              alt='Office environment'
              className='h-64 w-full object-cover rounded-lg'
            />
            <img
              src='https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
              alt='Team event'
              className='h-64 w-full object-cover rounded-lg'
            />
          </div>
        </div>
      </section>

      <section className='bg-white py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 text-center'>
          <h2 className='text-3xl font-bold text-gray-800 mb-6'>
            Ready to join our team?
          </h2>
          <p className='text-gray-600 text-xl mb-8'>
            We're building the future of workplace technology - and we'd love
            for you to be part of it.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Link
              to='#openings'
              className='bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all'
            >
              View Open Positions
            </Link>
            <Link
              to='/contact'
              className='bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all'
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <footer className='bg-gray-50 border-t border-gray-200 py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 text-center text-gray-600 text-sm'>
          © {new Date().getFullYear()} QureVisitor. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CareersPage;
