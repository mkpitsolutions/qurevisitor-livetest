import React from 'react';

const SupportSection = () => {
  // const supportOptions = [
  //   {
  //     title: 'AI Knowledge Assistant',
  //     description:
  //       'Our smart bot provides instant answers 24/7 by scanning our extensive knowledge base and documentation.',
  //     icon: (
  //       <svg
  //         className='w-8 h-8 text-teal-600'
  //         fill='none'
  //         stroke='currentColor'
  //         viewBox='0 0 24 24'
  //       >
  //         <path
  //           strokeLinecap='round'
  //           strokeLinejoin='round'
  //           strokeWidth={2}
  //           d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  //         />
  //       </svg>
  //     ),
  //     color: 'bg-teal-50',
  //   },
  //   // ... (other support options with updated colors)
  // ];

  const supportOptions = [
    {
      title: 'AI Knowledge Assistant',
      description:
        'Our smart bot provides instant answers 24/7 by scanning our extensive knowledge base and documentation.',

      icon: (
        <svg
          className='w-8 h-8 text-teal-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
          />
        </svg>
      ),
      color: 'bg-teal-50',
    },
    {
      title: 'Priority Email Support',
      description:
        'Get personalized help from our support team with guaranteed response within 4 business hours.',

      icon: (
        <svg
          className='w-8 h-8 text-blue-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </svg>
      ),
      color: 'bg-blue-50',
    },
    {
      title: 'Instant Live Chat',
      description:
        'Real-time support from our technical experts with average response time under 2 minutes during business hours.',

      icon: (
        <svg
          className='w-8 h-8 text-green-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
          />
        </svg>
      ),
      color: 'bg-green-50',
    },
    {
      title: 'Dedicated Account Manager',
      description:
        'Your personal point of contact for strategic guidance, quarterly reviews, and priority issue resolution.',

      icon: (
        <svg
          className='w-8 h-8 text-purple-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
      color: 'bg-purple-50',
    },
    {
      title: 'Priority Email Support',
      description:
        'Get personalized help from our support team with guaranteed response within 4 business hours.',

      icon: (
        <svg
          className='w-8 h-8 text-blue-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </svg>
      ),
      color: 'bg-blue-50',
    },
  ];

  return (
    <div className='bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Premium Support When You Need It
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Access our multi-tiered support system with response times that
            match your business urgency.
          </p>
          <div className='mt-8 flex justify-center space-x-2'>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === 0 ? 'bg-teal-600' : 'bg-teal-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {supportOptions.map((option, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group'
            >
              <div className='p-6 h-full flex flex-col'>
                <div
                  className={`${option.color} p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-opacity-80 transition-colors`}
                >
                  {option.icon}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-700'>
                  {option.title}
                </h3>
                <p className='text-gray-600 mb-5 flex-grow'>
                  {option.description}
                </p>
                <div className='mt-auto'>
                  <span className='inline-block px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800'>
                    Available
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
