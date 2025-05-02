import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@components/components/ui/navigation-menu';
import { cn } from '@components/lib/utils';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const components = [
  {
    icon: 'https://urspayce.com/assets/images/products/product1.svg',
    title: 'Visitors',
    description: 'Keep track of your visitors',
    href: '/products/visitors',
  },
  {
    icon: 'https://urspayce.com/assets/images/products/product2.svg',
    title: 'Rooms',
    description: 'Manage & book your rooms',
    href: '/products/rooms',
  },
  {
    icon: 'https://urspayce.com/assets/images/products/product3.svg',
    title: 'Desks',
    description: 'Manage & book your desks',
    href: '/products/desks',
  },
  {
    icon: 'https://urspayce.com/assets/images/products/product4.svg',
    title: 'Asset',
    description: 'Track and manage all company assets',
    href: '/products/asset',
  },
  {
    icon: 'https://urspayce.com/assets/images/products/helpdesk.svg',
    title: 'Help Desk',
    description: 'Efficient IT & Non-IT support',
    href: '/products/helpdesk',
  },
  {
    icon: 'https://urspayce.com/assets/images/products/product6.svg',
    title: 'EventMan',
    description: 'Plan and manage events seamlessly',
    href: '/products/eventman',
  },
  {
    icon: 'https://urspayce.com/assets/images/products/product5.svg',
    title: 'Mailrooms',
    description: 'Manage inward & outward mail',
    href: '/products/mailrooms',
  },
  {
    icon: 'https://urspayce.com/assets/images/products/product8.svg',
    title: 'Space',
    description: 'Optimize your workspace',
    href: '/products/space',
  },
  {
    icon: 'https://urspayce.com/assets/images/products/parkings.svg',
    title: 'Parking',
    description: 'Manage parking & vehicle access',
    href: '/products/parking',
  },
  {
    icon: 'https://urspayce.com/assets/images/products/product9.svg',
    title: 'Facility',
    description: 'Track facility maintenance',
    href: '/products/facility',
  },
];

const Resorces = [
  {
    title: 'Help',
    href: '/help',
    description: (
      <div className='flex items-center gap-2'>
        <span className='text-cyan-500 text-xl'>❓</span>
        <span>Help</span>
      </div>
    ),
  },
  {
    title: 'Videos',
    href: 'https://www.youtube.com/channel/UCtxkVMiPS99Qs9rL5q55Znw',
    description: (
      <div className='flex items-center gap-2'>
        <span className='text-yellow-500 text-xl'>📺</span>
        <span>Videos</span>
      </div>
    ),
  },
  {
    title: 'Product Release',
    href: '/releases',
    description: (
      <div className='flex items-center gap-2'>
        <span className='text-teal-500 text-xl'>📦</span>
        <span>Product Release</span>
      </div>
    ),
  },
  {
    title: 'Blog',
    href: '/blog',
    description: (
      <div className='flex items-center gap-2'>
        <span className='text-purple-500 text-xl'>📝</span>
        <span>Blog</span>
      </div>
    ),
  },
  {
    title: 'getintouch',
    href: '/contact',
    description: (
      <div className='flex items-center gap-2'>
        <span className='text-purple-500 text-xl'>📝</span>
        <span>contact</span>
      </div>
    ),
  },
];

export function NavigationMenuDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => setIsOpen(!isOpen);
   const [activeCard, setActiveCard] = useState(null);
  
    const toggleCard = (version) => {
      setActiveCard(activeCard === version ? null : version);
    };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className='w-full bg-white shadow-md px-4 sm:px-6 lg:px-10 border-b border-teal-100'>
      <NavigationMenu className='max-w-7xl mx-auto'>
        <NavigationMenuList className='flex items-center gap-4 py-4 flex-wrap'>
          <Link to='/' className='mr-auto'>
            {/* <img
              src='https://urspayce.com/assets/images/urspayce-logo.webp'
              alt='logo'
              className='h-10 w-auto object-contain'
            /> */} 
            <h1 className='text-2xl font-bold text-teal-600'>
            Qure<span className='text-gray-800'>Visitor</span>              
            </h1>   
          </Link>

       
          {/* Desktop Navigation Items - Hidden on mobile */}
          <div className='hidden md:flex items-center gap-4'>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-base sm:text-lg font-medium text-gray-800 hover:text-teal-600 transition-colors'>
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-[90vw] max-w-6xl gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                  {components.map((component) => (
                    <li key={component.title}>
                      <Link
                        to={component.href}
                        className='block rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 hover:border-teal-300 h-full group'
                      >
                        <div className='flex items-center space-x-4'>
                          <div className='flex-shrink-0 w-12 h-12 rounded-md flex items-center justify-center bg-teal-50 group-hover:bg-teal-100 transition-colors'>
                            <img
                              src={component.icon}
                              alt={component.title}
                              className='w-8 h-8 object-contain'
                            />
                          </div>
                          <div>
                            <h3 className='text-sm font-semibold text-gray-800 group-hover:text-teal-700'>
                              {component.title}
                            </h3>
                            <p className='text-xs text-gray-600'>
                              {component.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-base sm:text-lg font-medium text-gray-800 hover:text-teal-600 transition-colors'>
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='w-[90vw] max-w-[1000px] p-6 grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                  <div className='bg-white shadow-md rounded-2xl p-4 flex flex-col items-start hover:shadow-lg transition'>
                    <img
                      src='https://urspayce.com/assets/images/solutions/hybrid/firstBoxImg.webp'
                      alt='Hybrid Work'
                      className='w-full h-40 object-cover rounded-xl mb-4'
                    />
                    <h3 className='text-lg font-semibold text-gray-800 mb-1'>
                      Hybrid work
                    </h3>
                    <Link
                      to='/solution/hybrid-work-software'
                      className='text-teal-600 font-medium inline-flex items-center gap-1 hover:underline'
                    >
                      Overview <span className='text-xl'>→</span>
                    </Link>
                  </div>

                  <div className='flex flex-col gap-3 text-gray-700 text-base justify-center'>
                    <Link to='/Securitypro' className='hover:text-teal-600'>
                      Security Protocols
                    </Link>
                    <Link to='/Compliance' className='hover:text-blue-600'>
                      Compliance Requirements
                    </Link>
                    <Link to='/Space' className='hover:text-blue-600'>
                      Space Management
                    </Link>
                    <Link to='/Manufacturing' className='hover:text-blue-600'>
                      Manufacturing
                    </Link>
                    <Link to='/Pharma' className='hover:text-blue-600'>
                      Pharma & Biotech
                    </Link>
                    <Link to='/Professional' className='hover:text-blue-600'>
                      Professional Services
                    </Link>
                  </div>

                  <div className='bg-white shadow-md rounded-2xl p-4 flex flex-col items-start hover:shadow-lg transition'>
                    <img
                      src='https://urspayce.com/assets/images/solutions/enterprise/mini-box-img.webp'
                      alt='Enterprise Operations'
                      className='w-full h-40 object-cover rounded-xl mb-4'
                    />
                    <h3 className='text-lg font-semibold text-gray-800 mb-1'>
                      Enterprise operations
                    </h3>
                    <Link
                      to='/overview'
                      className='text-teal-600 font-medium inline-flex items-center gap-1 hover:underline'
                    >
                      Overview <span className='text-xl'>→</span>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-base sm:text-lg font-medium text-gray-800 hover:text-teal-600 transition-colors'>
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='grid w-[90vw] max-w-[600px] gap-3 p-4 sm:grid-cols-2 md:grid-cols-3'>
                  {Resorces.map((resource, index) => (
                    <Link key={index} to={resource.href}>
                      <ListItem key={resource.title} title={resource.title}>
                        {resource.description}
                      </ListItem>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'text-base sm:text-lg font-medium px-4 py-2 hover:bg-gray-100 rounded-md transition-colors duration-200'
                )}
                asChild
              >
                <Link to='/pricing'>Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem> */}

        
          </div>
          <div className="relative">
        <button
          onClick={() => toggleCard('v1')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            activeCard === 'v1'
              ? 'bg-teal-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Visitor Software V1.0
        </button>
        
        {activeCard === 'v1' && (
          <div className="absolute z-10 mt-2 w-72 bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-teal-600 p-4">
              <h1 className="text-white text-xl font-bold">Visitor Software V1.0</h1>
            </div>
            
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <h3 className="font-medium text-gray-700">Admin Login</h3>
                  <p className="text-xs text-gray-500">Access administrative features</p>
                </div>
                <Link 
                  to="/admin-login" 
                  className="px-3 py-1.5 bg-teal-600 text-white text-xs font-medium rounded-md hover:bg-teal-700 transition-colors"
                >
                  Click Here
                </Link>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <h3 className="font-medium text-gray-700">Download PDF</h3>
                  <p className="text-xs text-gray-500">User manual and documentation</p>
                </div>
                <Link 
                  to="/download-pdf" 
                  className="px-3 py-1.5 bg-teal-600 text-white text-xs font-medium rounded-md hover:bg-teal-700 transition-colors"
                >
                  Click Here
                </Link>
              </div>
              
              <div className="border-t border-gray-200 my-2"></div>
              
              <div className="text-center">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Live Video Demo</h3>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <button className="flex items-center space-x-1 bg-teal-600 hover:bg-teal-700 text-white px-3 py-1.5 rounded-md transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">Play Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
          </div>

          {/* Version 2.0 Toggle Card */}
          <div className="relative">
            <button
              onClick={() => toggleCard('v2')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeCard === 'v2'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Visitor Software V2.0
            </button>
            
            {activeCard === 'v2' && (
              <div className="absolute z-10 mt-2 w-72 bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden">
                <div className="bg-teal-600 p-4">
                  <h1 className="text-white text-xl font-bold">Visitor Software V2.0</h1>
                </div>
                
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div>
                      <h3 className="font-medium text-gray-700">Admin Login</h3>
                      <p className="text-xs text-gray-500">Access administrative features</p>
                    </div>
                    <Link 
                      to="/admin-login-v2" 
                      className="px-3 py-1.5 bg-teal-600 text-white text-xs font-medium rounded-md hover:bg-teal-700 transition-colors"
                    >
                      Click Here
                    </Link>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div>
                      <h3 className="font-medium text-gray-700">Reception/Guard</h3>
                      <p className="text-xs text-gray-500">Front desk access portal</p>
                    </div>
                    <Link 
                      to="/reception-login" 
                      className="px-3 py-1.5 bg-teal-600 text-white text-xs font-medium rounded-md hover:bg-teal-700 transition-colors"
                    >
                      Click Here
                    </Link>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div>
                      <h3 className="font-medium text-gray-700">Employee Login</h3>
                      <p className="text-xs text-gray-500">Staff access portal</p>
                    </div>
                    <Link 
                      to="/employee-login" 
                      className="px-3 py-1.5 bg-teal-600 text-white text-xs font-medium rounded-md hover:bg-teal-700 transition-colors"
                    >
                      Click Here
                    </Link>
                  </div>
                  
                  <div className="border-t border-gray-200 my-2"></div>
                  
                  <div className="text-center">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">What's New in V2.0</h3>
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                      <button className="flex items-center space-x-1 bg-teal-600 hover:bg-teal-700 text-white px-3 py-1.5  transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs">Watch Features</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'text-base sm:text-lg font-medium px-4 py-2 rounded-md transition-all duration-200',
                  'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
                  'text-white shadow-lg hover:shadow-xl',
                  'transform hover:scale-105 active:scale-95',
                  'border-0 focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50'
                )}
                asChild
              >
                <Link to='/request-demo'>Request Demo</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          <div className='md:hidden' ref={menuRef}>
            <button
              onClick={toggleMenu}
              className='text-gray-800 focus:outline-none'
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>

            {isOpen && (
              <div className='absolute top-14 left-0 w-full bg-white shadow-md z-50 p-4 rounded-b-xl space-y-6'>
                <div>
                  <h3 className='text-lg font-medium text-gray-800 mb-2'>
                    Products
                  </h3>
                  <ul className='space-y-3'>
                    {components.map((component) => (
                      <li key={component.title}>
                        <Link
                          to={component.href}
                          className='flex items-center gap-3 p-2 rounded-lg hover:bg-teal-50 transition'
                          onClick={() => setIsOpen(false)}
                        >
                          <img
                            src={component.icon}
                            alt={component.title}
                            className='w-6 h-6 object-contain'
                          />
                          <span className='text-gray-800 text-sm font-medium'>
                            {component.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className='text-lg font-medium text-gray-800 mb-2'>
                    Solutions
                  </h3>
                  <ul className='space-y-2'>
                    <li>
                      <Link
                        to='/solution/hybrid-work-software'
                        className='block text-sm text-teal-700 font-medium hover:underline'
                        onClick={() => setIsOpen(false)}
                      >
                        Hybrid Work
                      </Link>
                      <img
                        src='https://urspayce.com/assets/images/solutions/hybrid/firstBoxImg.webp'
                        alt=''
                      />
                    </li>
                    <li>
                      <Link to='/Securitypro' onClick={() => setIsOpen(false)}>
                        Security Protocols
                      </Link>
                    </li>
                    <li>
                      <Link to='/Compliance' onClick={() => setIsOpen(false)}>
                        Compliance Requirements
                      </Link>
                    </li>
                    <li>
                      <Link to='/Space' onClick={() => setIsOpen(false)}>
                        Space Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/Manufacturing'
                        onClick={() => setIsOpen(false)}
                      >
                        Manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link to='/Pharma' onClick={() => setIsOpen(false)}>
                        Pharma & Biotech
                      </Link>
                    </li>
                    <li>
                      <Link to='/Professional' onClick={() => setIsOpen(false)}>
                        Professional Services
                      </Link>
                    </li>
                    <li>
                      <Link to='/overview' onClick={() => setIsOpen(false)}>
                        Enterprise Operations
                      </Link>
                      <img
                        src='https://urspayce.com/assets/images/solutions/enterprise/mini-box-img.webp'
                        alt=''
                      />
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-lg font-medium text-gray-800 mb-2'>
                    Resources
                  </h3>
                  <ul className='space-y-2'>
                    {Resorces.map((resource, index) => (
                      <li key={index}>
                        <Link
                          to={resource.href}
                          onClick={() => setIsOpen(false)}
                          className='text-sm text-gray-700 hover:text-teal-600 transition'
                        >
                          {resource.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link
                    to='/pricing'
                    onClick={() => setIsOpen(false)}
                    className='block text-base font-medium text-gray-800 hover:text-teal-600'
                  >
                    Pricing
                  </Link>
                </div>
                <div>
                  <Link
                    to='/registration' 
                    className='block text-base font-medium text-gray-800 hover:text-teal-600'
                  >
                    Free Trial
                  </Link>
                </div>
                <div>
                  <h3 className='text-lg font-medium text-gray-800 mb-2'>Software Versions</h3>
                  <div className='space-y-4'>
                    <div>
                      <p className='text-sm font-medium'>Visitor Software V1.0</p>
                      <Link to='/admin-login' className='text-xs text-blue-600 hover:underline block'>
                        Admin Login
                      </Link>
                      <Link to='/download-pdf' className='text-xs text-blue-600 hover:underline block'>
                        Download PDF
                      </Link>
                    </div>
                    <div>
                      <p className='text-sm font-medium'>Visitor Software V2.0</p>
                      <Link to='/admin-login-v2' className='text-xs text-blue-600 hover:underline block'>
                        Admin Login
                      </Link>
                      <Link to='/reception-login' className='text-xs text-blue-600 hover:underline block'>
                        Reception/Guard Login
                      </Link>
                      <Link to='/employee-login' className='text-xs text-blue-600 hover:underline block'>
                        Employee Login
                      </Link>
                    </div>
                  </div>
                </div>  
              </div>
            )}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <div>
        <NavigationMenuLink asChild>
          <div
            to={href}
            className={cn(
              'block rounded-md p-4 bg-white hover:bg-gray-100 transition-colors shadow-sm border border-gray-200',
              'space-y-1 text-left w-full h-full',
              className
            )}
            {...props}
          >
            <div className='text-sm font-semibold text-gray-800'>{title}</div>
            <div className='line-clamp-2 text-sm text-gray-500'>{children}</div>
          </div>
        </NavigationMenuLink>
      </div>
    );
  }
);
ListItem.displayName = 'ListItem';
