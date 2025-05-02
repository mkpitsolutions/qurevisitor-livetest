import React from 'react';
import { 
  CloudArrowUpIcon,
  ServerIcon,
  ShieldCheckIcon,
  ArrowsPointingOutIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const DeploymentOptions = () => {
  const features = [
    {
      name: 'Cloud-Based Solution',
      icon: CloudArrowUpIcon,
      description: 'Start immediately without investing in hardware or infrastructure.',
      highlights: [
        'Zero setup hassle',
        'Automatic updates',
        'Scalable to your needs',
        'Remote access from anywhere'
      ]
    },
    {
      name: 'On-Premise Solution',
      icon: ServerIcon,
      description: 'Your data stays within your infrastructure for maximum control.',
      highlights: [
        'Greater data control',
        'Fully customizable',
        'Enhanced privacy',
        'Offline capabilities'
      ]
    }
  ];

  const benefits = [
    { name: 'Top-tier Security', icon: ShieldCheckIcon },
    { name: 'Seamless User Experience', icon: ChartBarIcon },
    { name: 'Enterprise Performance', icon: ArrowsPointingOutIcon },
    { name: 'Flexible Customization', icon: WrenchScrewdriverIcon }
  ];

  return (
    <div className='bg-white py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
          Deployment Options: Cloud & On-Premise
          </h2>
          <p className='mt-4 text-lg leading-8 text-gray-600'>
          QureVisitor is available in two flexible deployment models:
          </p>
          <p className='mt-4 text-lg leading-8 text-gray-600'>
          Both models ensure top-tier security, seamless user experience, and enterprise-grade performance.
          </p>
        </div>

        <div className='mt-16'>
          <div className='grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2'>
            {features.map((feature) => (
              <div 
                key={feature.name}
                className='flex flex-col rounded-2xl bg-gray-50 p-8 shadow-sm transition-all hover:shadow-md'
              >
                <div className='flex items-center'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white'>
                    <feature.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <h3 className='ml-4 text-xl font-semibold text-gray-900'>{feature.name}</h3>
                </div>
                <p className='mt-4 text-gray-600'>{feature.description}</p>
                <ul className='mt-6 space-y-3'>
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className='flex items-start'>
                      <svg
                        className='h-5 w-5 flex-shrink-0 text-indigo-600'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span className='ml-3 text-gray-700'>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-24'>
          <div className='mx-auto max-w-2xl text-center'>
            <h3 className='text-2xl font-semibold text-gray-900'>Benefits of Both Solutions</h3>
          </div>
          <div className='mx-auto mt-10 grid max-w-lg grid-cols-2 gap-8 sm:max-w-xl sm:grid-cols-4 lg:mx-0 lg:max-w-none'>
            {benefits.map((benefit) => (
              <div key={benefit.name} className='text-center'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 mx-auto'>
                  <benefit.icon className='h-8 w-8 text-indigo-600' aria-hidden='true' />
                </div>
                <h4 className='mt-4 text-lg font-medium text-gray-900'>{benefit.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-16 text-center'>
          <button className='rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Request Deployment Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeploymentOptions;