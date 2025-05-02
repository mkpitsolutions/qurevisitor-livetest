import React, { useState } from 'react';

const features = [
  {
    id: 'Pre-Registration',
    title: 'Pre-Registration',
    description:
      'Hosts can invite visitors in advance by sending a unique QR code via email or SMS. This code allows for a swift, touchless check-in on arrival.',
    position: 'left',
    image: 'https://urspayce.com/assets/images/interfaces/01-2.png',
    icon: 'https://urspayce.com/assets/images/interfaces/Frame%201000002158.svg',
  },
  {
    id: 'Visitor Arrival',
    title: 'Visitor Arrival',
    description:
      'On arrival, visitors scan the QR code or manually enter their details using a self-service kiosk or tablet at the reception.',
    position: 'left',
    image: 'https://urspayce.com/assets/images/interfaces/01-7.png',
    icon: 'https://urspayce.com/assets/images/interfaces/Frame%201000002144.svg',
  },
  {
    id: 'Verification',
    title: 'Verification',
    description:
      'The system verifies the visitor\'s identity using photo capture, government ID scanning, or OTP verification.',
    position: 'left',
    image: 'https://urspayce.com/assets/images/interfaces/01-4.png',
    icon: 'https://urspayce.com/assets/images/interfaces/Frame%201000002144-1.svg',
  },
  {
    id: 'Badge Printing',
    title: 'Badge Printing',
    description:
      'Once verified, a digital or physical badge is generated, containing visitor details, visit duration, host name, and more.',
    position: 'left',
    image: 'https://urspayce.com/assets/images/interfaces/01-1.png',
    icon: 'https://urspayce.com/assets/images/interfaces/Frame%201000002145.svg',
  },
  {
    id: 'Host Notification',
    title: 'Host Notification',
    description:
      'The host is instantly notified via email, SMS, or app notification that their visitor has arrived.',
    position: 'right',
    image: 'https://urspayce.com/assets/images/interfaces/01-6.png',
    icon: 'https://urspayce.com/assets/images/interfaces/Frame%201000002158-1.svg',
  },
  {
    id: 'Monitoring & Logging',
    title: 'Monitoring & Logging',
    description:
      'Every check-in and check-out is logged in real-time. Admins have access to complete visitor history and can generate reports as needed',
    position: 'right',
    image: 'https://urspayce.com/assets/images/interfaces/01-3.png',
    icon: 'https://urspayce.com/assets/images/interfaces/Frame%201000002145-1.svg',
  },
  {
    id: 'qr',
    title: 'QR',
    description:
      'Streamlines visitor management with QR code, notify host & manage visitor traffic automatically.',
    position: 'right',
    image: 'https://urspayce.com/assets/images/interfaces/01.png',
    icon: 'https://urspayce.com/assets/images/interfaces/Frame%201000002145-2.svg',
  },
  {
    id: 'dashboard',
    title: 'Web Dashboard',
    description:
      'Get a single dashboard view of your workplace with real-time analytics and reporting.',
    position: 'right',
    image: 'https://urspayce.com/assets/images/interfaces/01-5.png',
    icon: 'https://urspayce.com/assets/images/interfaces/Frame%201000002158-2.svg',
  },
];

export default function FeatureGrid() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <div className='bg-teal-50 py-6 md:py-10 min-h-screen'>
      <h1 className='text-center text-2xl md:text-4xl font-extrabold text-gray-900 md:mb-4 px-4'>
          How QureVisitor Works:<span className='text-teal-600'> A Seamless Check-in Journey</span>
      </h1>
      <p className='text-center text-gray-600 max-w-2xl mx-auto md:mb-4'>The typical QureVisitor check-in process is designed for simplicity, efficiency, and security.</p>

      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4'>
        <div className='space-y-4 md:space-y-6'>
          {features.slice(0, 4).map((feature) => (
            <div
              key={feature.id}
              onClick={() => setSelectedFeature(feature)}
              className={`p-4 bg-white shadow-md rounded-xl flex items-start gap-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                selectedFeature?.id === feature.id
                  ? 'border-2 border-teal-500 backdrop-blur-sm bg-white/70'
                  : ''
              }`}
            >
              <div className='flex-shrink-0 mt-1'>
                <img
                  src={feature.icon}
                  alt='icon'
                  className='w-6 h-6 md:w-8 md:h-8'
                />
              </div>
              <div>
                <h3 className='font-bold text-lg md:text-xl text-teal-800'>
                  {feature.title}
                </h3>
                <p className='text-xs md:text-sm text-gray-600'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-center items-center'>
          <img
            src={
              selectedFeature?.image ||
              'https://urspayce.com/assets/images/interfaces/01-2.png'
            }
            key={selectedFeature?.image}
            alt='Selected Feature'
            className='w-full max-w-[280px] md:w-[350px] h-auto max-h-[400px] md:max-h-[500px] object-contain transition-opacity duration-500 opacity-100'
          />
        </div>

        <div className='space-y-4 md:space-y-6'>
          {features.slice(4).map((feature) => (
            <div
              key={feature.id}
              onClick={() => setSelectedFeature(feature)}
              className={`p-4 bg-white shadow-md rounded-xl flex items-start gap-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                selectedFeature?.id === feature.id
                  ? 'border-2 border-teal-500 backdrop-blur-sm bg-white/70'
                  : ''
              }`}
            >
              <div className='flex-shrink-0 mt-1'>
                <img
                  src={feature.icon}
                  alt='icon'
                  className='w-6 h-6 md:w-8 md:h-8'
                />
              </div>
              <div>
                <h3 className='font-bold text-lg md:text-xl text-teal-800'>
                  {feature.title}
                </h3>
                <p className='text-xs md:text-sm text-gray-600'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
