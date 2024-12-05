import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  ContactFormDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'Contact Manager';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const faqs = [
    {
      question: 'What is ${projectName} and how does it work?',
      answer:
        '${projectName} is a multi-tenant contact management platform that allows organizations to manage their contacts efficiently. It supports multiple organizations, each with its own admin and users, ensuring data privacy and tailored access.',
    },
    {
      question: 'How can I invite new users to my organization?',
      answer:
        "Admins can invite new users by sending an email invitation through the platform. Once the invitation is accepted, the new user can access the organization's contact management features.",
    },
    {
      question: 'Is my data secure with ${projectName}?',
      answer:
        'Yes, ${projectName} prioritizes data security. We use advanced encryption and access controls to ensure that your contact information is protected at all times.',
    },
    {
      question: 'Can I customize the contact fields in ${projectName}?',
      answer:
        'Currently, ${projectName} offers standard contact fields such as name, email address, phone number, and website link. We are working on adding more customization options in future updates.',
    },
    {
      question: 'What support options are available if I encounter issues?',
      answer:
        "Our support team is available to assist you with any issues or questions. You can reach out to us via the contact form on our website, and we'll respond promptly to help you.",
    },
    {
      question: 'Does ${projectName} offer a free trial?',
      answer:
        "At this time, ${projectName} does not offer a free trial. However, we provide detailed demos and walkthroughs to help you understand the platform's capabilities before making a commitment.",
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Contact Us - Get in Touch with ${projectName}`}</title>
        <meta
          name='description'
          content={`Reach out to the ${projectName} team for any inquiries or support. We're here to help you with all your contact management needs.`}
        />
      </Head>
      <WebSiteHeader projectName={'Contact Manager'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Contact Manager'}
          image={['Customer support and communication']}
          mainText={`Connect with the ${projectName} Team`}
          subTitle={`We're here to assist you with any questions or support you need. Reach out to us and experience our dedicated customer service.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Contact Us Now`}
        />

        <FaqSection
          projectName={'Contact Manager'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'Contact Manager'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Efficient customer support team']}
          mainText={`Reach Out to ${projectName} Support `}
          subTitle={`We're available to assist you with any inquiries or support requests. Contact us anytime, and we'll respond promptly to ensure your needs are met.`}
        />
      </main>
      <WebSiteFooter projectName={'Contact Manager'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
