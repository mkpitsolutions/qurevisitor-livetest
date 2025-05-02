import React, { useEffect } from 'react';
import { CheckBadgeIcon, StarIcon } from '@heroicons/react/24/solid';
import { motion, useAnimation } from 'framer-motion';

const PricingPlans = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Trigger animations when component mounts
    controls.start("visible");
  }, [controls]);

  const plans = [
    {
      name: "Starter",
      price: "₹14,999",
      period: "per month",
      description: "Perfect for small businesses getting started",
      features: [
        "1 location",
        "Up to 200 visitors/month",
        "Basic reports",
        "QR code check-in",
        "Single admin account"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "₹24,999",
      period: "per month",
      description: "For growing businesses with multiple locations",
      features: [
        "3 locations",
        "1,000 visitors/month",
        "Email/SMS alerts",
        "Basic branding",
        "2 admin accounts",
        "Visitor pre-registration"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹49,999",
      period: "per month",
      description: "For organizations with advanced needs",
      features: [
        "Unlimited locations",
        "Unlimited visitors",
        "Custom branding",
        "Advanced reports",
        "API integrations",
        "5+ admin accounts",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "On-Premise",
      price: "Custom Quote",
      period: "",
      description: "Tailored solution for your security needs",
      features: [
        "Self-hosted solution",
        "Full customization",
        "Dedicated account manager",
        "Unlimited devices",
        "Custom integrations",
        "24/7 premium support",
        "Security audit"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverEffect = {
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeOut" }
  };

  const tapEffect = {
    scale: 0.98
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={item}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We offer flexible pricing to suit businesses of all sizes. All plans include basic features like visitor logs, QR code check-in, host notifications, and badge printing.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`relative rounded-2xl shadow-lg overflow-hidden border ${plan.popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'} bg-white`}
              variants={item}
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              {plan.popular && (
                <motion.div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <StarIcon className="h-4 w-4 mr-1" />
                  MOST POPULAR
                </motion.div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-600">{plan.description}</p>
                
                <motion.div 
                  className="mt-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-4xl font-extrabold text-gray-900">
                    {plan.price}
                    {plan.period && <span className="text-lg font-medium text-gray-500"> {plan.period}</span>}
                  </p>
                </motion.div>
                
                <motion.button
                  className={`mt-6 w-full py-3 px-4 border border-transparent rounded-md font-medium shadow-sm text-white ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.button>
              </div>
              
              <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * featureIndex }}
                    >
                      <CheckBadgeIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Need something different? Contact us for custom enterprise solutions.
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;