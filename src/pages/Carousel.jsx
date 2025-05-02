import { useEffect, useRef } from 'react';
import React from 'react';

const IndustrySolutions = () => {
  const carouselRef = useRef(null);
  const scrollInterval = useRef(null);

  const industries = [
    {
      title: 'Inaccuracy',
      description:
        'Illegible handwriting, incomplete entries, and lack of verification lead to unreliable records.',
      image: 'https://urspayce.com/assets/images/industry/healthcare.png',
    },
    {
      title: 'Security Risks',
      description: ': Paper logs can be easily tampered with, viewed by unauthorized personnel, or lost.',
      image: 'https://urspayce.com/assets/images/industry/sports.png',
    },
    {
      title: 'Time-Consuming',
      description:
        'Visitors often have to wait in line, fill out lengthy forms, and depend on front desk personnel for assistance.',
      image: 'https://urspayce.com/assets/images/industry/office.png',
    },
    {
      title: 'Non-compliance',
      description:
        'In industries with strict regulatory frameworks, manual logs may not meet compliance standards.',
      image: 'https://urspayce.com/assets/images/industry/school.png',
    },
    {
      title: 'No Data Insight',
      description:
        'Traditional logs offer no analytics or meaningful insights into visitor patterns or trends.',
      image: 'https://urspayce.com/assets/images/industry/music.png',
    },
    {
      title: 'QureVisitor',
      description:
        'addresses all these challenges with an intuitive, digital-first approach to visitor management.',
      image: 'https://urspayce.com/assets/images/industry/manufacturing.png',
    }, 
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    let currentIndex = 0;

    const autoScroll = () => {
      if (carousel) {
        currentIndex = (currentIndex + 1) % industries.length;
        const cardWidth = carousel.firstChild.offsetWidth + 16;
        carousel.scrollTo({
          left: currentIndex * cardWidth,
          behavior: 'smooth',
        });
      }
    };

    scrollInterval.current = setInterval(autoScroll, 3000);

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, [industries.length]);

  return (
    <div className='w-full py-12 bg-white'>
      <div className='text-center mb-8 px-4'>
        <h2 className='text-3xl font-bold text-gray-900 mb-2'>
        Why Traditional Visitor Management Methods Are No Longer Effective
        </h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>
        For decades, organizations have relied on manual methods—primarily paper logbooks—to keep track of who enters their premises. While this method may seem simple, it comes with a host of problems:
        </p>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 overflow-hidden'>
        <div
          ref={carouselRef}
          className='flex gap-6 overflow-x-hidden py-4 scroll-smooth'
        >
          {industries.map((item, index) => (
            <div
              key={index}
              className='flex-shrink-0 w-72 md:w-80 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
            >
              <div className='bg-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-inner'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-10 h-10 object-contain'
                />
              </div>
              <h3 className='text-xl font-bold text-teal-800 mb-2'>
                {item.title}
              </h3>
              <p className='text-gray-700 text-sm'>{item.description}</p>
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-8 space-x-2'>
          {industries.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === 0 ? 'bg-teal-600 w-6' : 'bg-teal-200'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustrySolutions;
