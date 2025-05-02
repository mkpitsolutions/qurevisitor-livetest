import React from 'react';
import { CheckBadgeIcon, QrCodeIcon, ShieldCheckIcon, ChartBarIcon, BellAlertIcon, UserIcon, DocumentTextIcon, Cog6ToothIcon, LanguageIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const QureVisitorSection = () => {
  const features = [
    { icon: QrCodeIcon, text: "Touchless Check-ins via QR codes" },
    { icon: ChartBarIcon, text: "Real-time Visitor Tracking" },
    { icon: UserIcon, text: "Pre-registration & Invite System" },
    { icon: ShieldCheckIcon, text: "Photo Capture & ID Verification" },
    { icon: DocumentTextIcon, text: "Digital Badge Printing" },
    { icon: ChartBarIcon, text: "Visitor Logs & Analytics" },
    { icon: BellAlertIcon, text: "Host Notifications" },
    { icon: ShieldCheckIcon, text: "Emergency Evacuation Reports" },
    { icon: Cog6ToothIcon, text: "Customized Workflows & Forms" },
    { icon: LanguageIcon, text: "Multilingual Interface" },
    { icon: LockClosedIcon, text: "Access Control Integration" },
    { icon: CheckBadgeIcon, text: "GDPR & Regulatory Compliance" }
  ];

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Modern Visitor Management <br className="hidden lg:block" />with <span className="text-blue-600">QureVisitor</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              QureVisitor revolutionizes visitor management with secure, efficient digital solutions. Our system transforms traditional check-ins into seamless experiences while enhancing security and compliance.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, index) => (
                <div key={index} className="flex items-start">
                  <item.icon className="h-6 w-6 mt-0.5 mr-3 flex-shrink-0 text-blue-600" />
                  <span className="text-base text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg">
                Request Demo
              </button>
              <button className="px-8 py-3.5 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Image/Visual Content */}
          <div className="relative">
            <div className="bg-blue-50 rounded-2xl p-6 lg:p-8 shadow-xl border border-blue-100">
              <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="QureVisitor system in action showing digital check-in process"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                  <QrCodeIcon className="h-8 w-8 mx-auto text-blue-600" />
                  <p className="mt-2 text-sm font-medium">QR Check-in</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                  <ShieldCheckIcon className="h-8 w-8 mx-auto text-blue-600" />
                  <p className="mt-2 text-sm font-medium">Secure</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                  <ChartBarIcon className="h-8 w-8 mx-auto text-blue-600" />
                  <p className="mt-2 text-sm font-medium">Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QureVisitorSection;