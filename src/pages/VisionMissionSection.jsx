import React from 'react';
import { LightBulbIcon, ShieldCheckIcon, SparklesIcon, ArrowsRightLeftIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const VisionMissionSection = () => {
  const coreObjectives = [
    {
      icon: ArrowsRightLeftIcon,
      title: "Digital Transformation",
      description: "Eliminate the inefficiencies of paper-based visitor logs"
    },
    {
      icon: ChartBarIcon,
      title: "Real-time Visibility",
      description: "Provide real-time visibility and control over visitor traffic"
    },
    {
      icon: ShieldCheckIcon,
      title: "Regulatory Compliance",
      description: "Ensure compliance with global and local regulations"
    },
    {
      icon: SparklesIcon,
      title: "Seamless Integration",
      description: "Offer seamless integration with existing enterprise systems"
    },
    {
      icon: UserGroupIcon,
      title: "User Experience",
      description: "Prioritize experience for both hosts and visitors"
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Foundation</h2>
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Vision, Mission & Core Objectives
          </h1>
          <div className="mt-6 h-1 w-24 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Vision and Mission Cards */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 transform transition-all hover:scale-[1.01]">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-100 mr-4">
                  <LightBulbIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 pl-16">
                To become the leading provider of digital visitor management solutions that redefine the standards of workplace security, compliance, and visitor experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 transform transition-all hover:scale-[1.01]">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-100 mr-4">
                  <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 pl-16">
                To empower organizations with a reliable, secure, and user-friendly platform that simplifies visitor access, enhances brand image, and fosters trust through digital transformation.
              </p>
            </div>
          </div>

          {/* Core Objectives */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 h-full">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <SparklesIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Core Objectives</h3>
            </div>

            <div className="space-y-6">
              {coreObjectives.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-blue-50 mr-4">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg">
                Learn How We Achieve These
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;