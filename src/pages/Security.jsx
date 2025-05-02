import React from 'react';

const SecurityFeatures = () => {
  const features = [
    {
      title: 'Corporate Offices',
      description:
        'Enhances front desk efficiency by automating visitor entry.  <br /> Improves security by logging every individual who enters the premises. <br />Helps in maintaining a professional first impression. <br /> Integrates with existing access control systems.',
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
            d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
          />
        </svg>
      ),
      color: 'bg-teal-50',
    },
    {
      title: 'Multi-Factor Authentication',
      description:
        'Enforce secure access with customizable MFA options including biometrics, authenticator apps, and hardware tokens.',
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
            d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
          />
        </svg>
      ),
      color: 'bg-green-50',
    },
    {
      title: 'Granular Access Controls',
      description:
        'Define precise permissions with our RBAC system that adapts to your organizational hierarchy and data sensitivity.',
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
            d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      ),
      color: 'bg-purple-50',
    },
    {
      title: 'SOC 2 Type II Certified',
      description:
        'Regularly audited compliance with rigorous standards for security, availability, and confidentiality.',
      icon: (
        <svg
          className='w-8 h-8 text-yellow-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
      color: 'bg-yellow-50',
    },
    {
      title: 'GDPR Compliance',
      description:
        'Full adherence to EU data protection regulations with built-in tools for data subject requests and consent management.',
      icon: (
        <svg
          className='w-8 h-8 text-indigo-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
          />
        </svg>
      ),
      color: 'bg-indigo-50',
    },
    {
      title: 'Enterprise-Grade Security',
      description:
        'Military-grade security infrastructure with regular penetration testing and 24/7 threat monitoring.',
      icon: (
        <svg
          className='w-8 h-8 text-red-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
          />
        </svg>
      ),
      color: 'bg-teal-50',
    },
  ];

  return (
    <div className='bg-white py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <span className='inline-block px-3 py-1 text-sm font-semibold text-teal-700 bg-teal-100 rounded-full mb-4'>
            Enterprise Security
          </span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
          Who Can Use QureVisitor?
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
          QureVisitor is a versatile solution that fits into various industry environments. Here’s how it adds value across sectors:
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-teal-200 transition-all duration-300 hover:shadow-sm group'
            >
              <div
                className={`${feature.color} p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-5`}
              >
                {feature.icon}
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600'>
                {feature.title}
              </h3>
              <p className='text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityFeatures;
