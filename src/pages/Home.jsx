import Integrations from './Integrations';
import FeatureGrid from './Interface';
import React from 'react';
import TabsDemo from './Teams';
import SupportSection from './Support';
import SecurityFeatures from './Security';
import DeploymentOptions from './Random';
import QureVisitorSection from './Random2';
import IndustrySolutions from './Carousel';
import VisionMissionSection from './VisionMissionSection';
import PricingPlans from './PricingPlans';
import { FAQAccordion } from './Faq';
import { Link } from 'react-router';
function Home() {
  return (
    <div className='bg-gradient-to-br from-teal-50 to-teal-100'>
      <section className='py-16 sm:py-24 bg-gradient-to-b from-white to-teal-50'>
        <div className='container px-4 mx-auto text-center'>
          <div className='max-w-4xl mx-auto space-y-5 sm:space-y-6'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-800'>
              Intelligent Workplace Management Powered by AI
            </h1>
            <p className='text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto'>
              Transform your office ecosystem with our all-in-one platform that
              streamlines operations, enhances security, and creates seamless
              experiences for employees, visitors, and management teams.
            </p>
          </div>

          <div className='mt-12 sm:mt-16 max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border border-white/80 bg-white/90 backdrop-blur-sm'>
              <picture>
                <source
                  srcSet='
              https://www.vizitorapp.com/images/vizitor/howit-works.svg
            '
                  type='image/webp'
                />

                <img
                  src='https://www.vizitorapp.com/images/vizitor/howit-works.svg'
                  alt='Modern AI-powered workplace with employees collaborating in a smart office environment'
                  className='w-full h-full object-cover object-center'
                  loading='lazy'
                  decoding='async'
                />
              </picture>

              <div className='absolute inset-0 bg-gradient-to-t from-teal-900/10 to-transparent' />
            </div>
          </div>
        </div>
      </section>
      <VisionMissionSection />
      <IndustrySolutions />
      {/* <TabsDemo /> */}
      <FeatureGrid />
      <Integrations />
      <SupportSection />
      {/* <SecurityFeatures /> */}
      <DeploymentOptions />
      <QureVisitorSection />
      <PricingPlans />
      <FAQAccordion />
      {/* Fixed CTA */}
      <div className='fixed bottom-8 left-0 right-0 flex justify-center'>
        <div className='flex flex-col sm:flex-row gap-4 px-4'>
          <Link
            to='/get-started'
            className='inline-flex items-center justify-center bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
          >
            Get Started
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 ml-2'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
          <Link
            to='/request-demo'
            className='inline-flex items-center justify-center bg-white hover:bg-gray-50 text-teal-600 font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200'
          >
            Request Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
