import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/components/ui/accordion';
import React from 'react';

const FAQ_DATA = [
  {
    id: 'item-1',
    question: 'What is a Visitor Management System (VMS)?',
    answer: 'A VMS is a digital tool that tracks, manages, and logs visitor access to your premises. It replaces manual sign-in books with a secure, modern system.'
  },
  {
    id: 'item-2',
    question: 'Is QureVisitor secure?',
    answer: 'Yes, QureVisitor follows advanced security protocols, including role-based access, encrypted data transmission, and secure hosting for cloud deployments.'
  },
  {
    id: 'item-3',
    question: 'Can I use QureVisitor in multiple locations?',
    answer: 'Absolutely! The Professional and Enterprise plans support multiple site configurations, and each location can have its own admin dashboard.'
  },
  {
    id: 'item-4',
    question: 'Is it possible to customize the visitor forms?',
    answer: 'Yes. You can add custom fields to collect the exact information you need from different visitor types (e.g., guests, vendors, interviewees).'
  },
  {
    id: 'item-5',
    question: 'Does it support contactless check-ins?',
    answer: 'Yes. QureVisitor allows visitors to check in by scanning a QR code, reducing the need for physical interaction.'
  },
  {
    id: 'item-6',
    question: 'Can it integrate with my access control system?',
    answer: 'Yes. QureVisitor integrates with many popular access control systems, and we offer API support for custom integrations.'
  },
  {
    id: 'item-7',
    question: 'Is QureVisitor compliant with data privacy laws?',
    answer: 'Yes. We comply with GDPR, HIPAA, and India\'s IT Act. You control your data, retention period, and who has access.'
  },
  {
    id: 'item-8',
    question: 'Is there a mobile app available?',
    answer: 'Yes. Admins and hosts can manage visitors, send invites, and receive notifications via our companion mobile app.'
  },
  {
    id: 'item-9',
    question: 'Can I export visitor data?',
    answer: 'Yes, all visitor logs can be exported in Excel, PDF, or CSV formats. You can also schedule automatic email reports.'
  },
  {
    id: 'item-10',
    question: 'What happens if the internet goes down?',
    answer: 'For on-premise installations, the system can continue running offline. For cloud, visitor check-ins can be queued and synced once the connection is restored.'
  }
];

export function FAQAccordion() {
  return (
    <section className='bg-gradient-to-b from-teal-50 to-white py-12 md:py-16 px-4 md:px-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3'>
            Frequently Asked Questions
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Everything you need to know about QureVisitor
          </p>
        </div>

        <Accordion 
          type='single' 
          collapsible 
          className='w-full space-y-4'
        >
          {FAQ_DATA.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className='border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow'
            >
              <AccordionTrigger className='flex items-center justify-between w-full p-5 text-left font-semibold text-gray-800 hover:text-teal-600 transition-colors'>
                <span className='text-base md:text-lg'>
                  <span className='text-teal-600 mr-2'>{index + 1}.</span>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className='px-5 pb-5 text-gray-600 text-sm md:text-base leading-relaxed'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}