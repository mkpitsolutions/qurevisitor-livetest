import {
  Monitor,
  UserCog,
  Users,
  ShieldCheck,
  Building2,
  Server,
} from 'lucide-react';
import React from 'react';

const TabsDemo = () => {
  const teams = [
    {
      id: 'it',
      name: 'IT',
      icon: <Monitor className='w-6 h-6' />,
      description:
        'Streamline your internal systems with secure, integrated workplace technology.',
      image: 'https://urspayce.com/assets/images/teams/image-2.png',
    },
    {
      id: 'admin',
      name: 'Admin',
      icon: <UserCog className='w-6 h-6' />,
      description:
        'Centralize organizational control and team coordination with powerful admin tools.',
      image: 'https://urspayce.com/assets/images/teams/image.png',
    },
    {
      id: 'hr',
      name: 'HR',
      icon: <Users className='w-6 h-6' />,
      description:
        'Simplify hiring, onboarding, and employee engagement with HR-focused features.',
      image: 'https://urspayce.com/assets/images/teams/image-1.png',
    },
    {
      id: 'security',
      name: 'Security',
      icon: <ShieldCheck className='w-6 h-6' />,
      description:
        'Monitor premises and manage access with comprehensive security controls.',
      image:
        'https://urspayce.com/assets/images/teams/security-guard-walkie-talkie-and-man-on-tablet-in-2023-11-27-05-26-24-utc.png',
    },
    {
      id: 'frontdesk',
      name: 'Frontdesk',
      icon: <Building2 className='w-6 h-6' />,
      description:
        'Welcome guests and manage appointments with professional frontdesk tools.',
      image:
        'https://urspayce.com/assets/images/teams/office-reception-desk-2024-12-05-02-39-36-utc.png',
    },
    {
      id: 'facilities',
      name: 'Facilities',
      icon: <Server className='w-6 h-6' />,
      description:
        'Manage office maintenance and workplace safety with facility management features.',
      image:
        'https://urspayce.com/assets/images/teams/cheerful-multicultural-team-of-cleaners-looking-at-2024-11-18-10-14-06-utc.png',
    },
  ];

  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3'>
            Built for <span className='text-teal-600'>Teams</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Empower teams of all sizes, from growing startups to large
            enterprises.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          {/* Team selector */}
          <div className='lg:col-span-1'>
            <div className='space-y-2'>
              {teams.map((team) => (
                <button
                  key={team.id}
                  onClick={() => setActiveTeam(team)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTeam.id === team.id
                      ? 'bg-teal-50 border-l-4 border-teal-600 text-teal-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span
                    className={`p-2 rounded-md ${
                      activeTeam.id === team.id
                        ? 'bg-teal-100 text-teal-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {team.icon}
                  </span>
                  <span className='font-medium'>{team.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className='lg:col-span-3 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 shadow-sm'>
            <div className='flex flex-col md:flex-row items-center gap-8'>
              <div className='md:w-1/2'>
                <img
                  src={activeTeam.image}
                  alt={activeTeam.name}
                  className='w-full h-auto rounded-lg shadow-md object-cover'
                />
              </div>
              <div className='md:w-1/2'>
                <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                  {activeTeam.name} Team
                </h3>
                <p className='text-gray-700 mb-4'>{activeTeam.description}</p>
                <ul className='space-y-2'>
                  {teams
                    .find((t) => t.id === activeTeam.id)
                    ?.features?.map((feature, i) => (
                      <li key={i} className='flex items-start'>
                        <svg
                          className='h-5 w-5 text-teal-500 mt-0.5 mr-2 flex-shrink-0'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        <span className='text-gray-700'>{feature}</span>
                      </li>
                    ))}
                </ul>
                <button className='mt-6 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-sm'>
                  Learn more about {activeTeam.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsDemo;
