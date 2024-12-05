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
      question: 'How do I set up my organization in ${projectName}?',
      answer:
        'Setting up your organization is simple. After signing up, you can create your organization profile and invite users to join. Each user will receive an email invitation to access the platform.',
    },
    {
      question: 'Can I manage multiple organizations with one account?',
      answer:
        'Yes, ${projectName} supports multi-tenant management, allowing you to oversee multiple organizations from a single account. Each organization can have its own admin and user roles.',
    },
    {
      question: 'What kind of support does ${projectName} offer?',
      answer:
        'We offer comprehensive support through our contact form and email. Our team is dedicated to providing timely assistance to ensure you get the most out of ${projectName}.',
    },
    {
      question: 'Is there a limit to the number of contacts I can manage?',
      answer:
        '${projectName} allows you to manage an extensive number of contacts. Our platform is designed to scale with your needs, ensuring you can handle large volumes of data efficiently.',
    },
    {
      question: 'How secure is my data with ${projectName}?',
      answer:
        'Data security is our top priority. We use advanced encryption and access controls to protect your information, ensuring that only authorized users can access your data.',
    },
    {
      question: 'Can I customize user roles and permissions?',
      answer:
        'Yes, ${projectName} allows admins to customize user roles and permissions, providing flexibility in how users interact with the platform and manage contacts.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our features, security, and support options.`}
        />
      </Head>
      <WebSiteHeader projectName={'Contact Manager'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Contact Manager'}
          image={['FAQ and support resources']}
          mainText={`Your Questions Answered About ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. Learn more about our features, security, and support.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'Contact Manager'}
          design={FaqDesigns.TWO_COLUMN || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'Contact Manager'}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Responsive customer support team']}
          mainText={`Contact ${projectName} Support Team `}
          subTitle={`Reach out to us for any questions or support. Our team is here to assist you and will respond promptly to your inquiries.`}
        />
      </main>
      <WebSiteFooter projectName={'Contact Manager'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
