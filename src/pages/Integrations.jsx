import React from 'react';

const Integrations = () => {
  const integrations = [
    {
      name: '🔹 Corporate Offices',
      description: [
        'Enhances front desk efficiency by automating visitor entry.',
        'Improves security by logging every individual who enters the premises.',
        'Helps in maintaining a professional first impression.',
        'Integrates with existing access control systems.',
      ],
      icon: 'https://urspayce.com/assets/images/integration/Integration_Google_Console.svg',
    },
    {
      name: '🔹 Manufacturing Plants',
      description: [
        'Monitors contractors, vendors, and transport personnel.',
        'Ensures safety compliance by mandating safety briefings or document uploads.',
        'Tracks movement in restricted or hazardous zones.',
        'Facilitates audit trails and contractor performance logs.',
      ],
      icon: 'https://urspayce.com/assets/images/integration/Integration_Google_Console.svg',
    },
    {
      name: '🔹 Schools & Universities',
      description: [
        'Maintains a record of parents, guests, and external vendors.',
        'Ensures campus safety by verifying visitors and maintaining access control.',
        'Integrates with student databases for seamless parent identification.',
        'Useful during emergencies for evacuation planning and student safety.',
      ],
      icon: 'https://urspayce.com/assets/images/integration/Integration_Google_Console.svg',
    },
    {
      name: '🔹 Hospitals & Clinics',
      description: [
        'Tracks patient visitors to ensure controlled entry and avoid overcrowding.',
        'Enables screening questions for health compliance.',
        'Helps in infection control through contactless check-ins.',
        'Manages visiting hours and limits number of visitors per patient.',
      ],
      icon: 'https://urspayce.com/assets/images/integration/Integration_Google_Console.svg',
    },
    {
      name: '🔹 Co-working Spaces',
      description: [
        'Simplifies guest check-ins for multiple tenants.',
        'Allows each company within the space to manage its own visitors independently.',
        'Offers flexible access rights and smart scheduling.',
        'Helps manage shared spaces like meeting rooms or lounges.',
      ],
      icon: 'https://urspayce.com/assets/images/integration/Integration_Google_Console.svg',
    },
    {
      name: '🔹 Hotels & Hospitality',
      description: [
        'Digitally manages guest and visitor entries without paperwork.',
        'Speeds up check-ins for guests with online pre-registration.',
        'Enables concierge notifications and room-specific visitor routing.',
        'Enhances guest experience with minimal wait time.',
      ],
      icon: 'https://urspayce.com/assets/images/integration/Integration_Google_Console.svg',
    },
  ];
  
  return (
    <div className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Who Can Use QureVisitor?
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            QureVisitor is a versatile solution that fits into various industry environments. Here’s how it adds value across sectors:
          </p>
          <div className='mt-8 flex justify-center'>
            <div className='h-1.5 w-16 bg-teal-600 rounded-full'></div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
          {integrations.map((integration, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden group'
            >
              <div className='p-6'>
                <div className='flex items-start mb-4'>
                  <div className='bg-teal-50 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-teal-100 transition-colors'>
                    <img src={integration.icon} alt='' className='w-8 h-8' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 group-hover:text-teal-700'>
                      {integration.name}
                    </h3>
                    <ul className='list-disc pl-5 text-gray-600 mt-2 text-sm space-y-1'>
  {integration.description.map((point, idx) => (
    <li key={idx} className='leading-snug'>{point}</li>
  ))}
</ul>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrations;