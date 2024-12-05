import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  ContactFormDesigns,
  HeroDesigns,
  FeaturesDesigns,
  AboutUsDesigns,
} from '../../components/WebPageComponents/designs';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

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

  const features_points = [
    {
      name: 'Multi-Tenant Support',
      description:
        'Manage multiple organizations seamlessly within a single platform. Each organization can have its own admin and users, ensuring data privacy and tailored access.',
      icon: 'mdiAccountGroup',
    },
    {
      name: 'Comprehensive Contact Management',
      description:
        'Easily create, read, update, and delete contact records. Keep all your contact information organized and accessible with intuitive tools.',
      icon: 'mdiContactMail',
    },
    {
      name: 'User Invitation System',
      description:
        'Invite new users to your organization with ease. Automated email notifications ensure a smooth onboarding process for new team members.',
      icon: 'mdiEmailSend',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Multi-Tenant Contact Manager - Manage Your Contacts Efficiently`}</title>
        <meta
          name='description'
          content={`Welcome to our multi-tenant contact manager. Sign up to manage your organization's contacts efficiently with our user-friendly platform.`}
        />
      </Head>
      <WebSiteHeader projectName={'Contact Manager'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Contact Manager'}
          image={['Organized contact management interface']}
          mainText={`Streamline Your Contacts with ${projectName}`}
          subTitle={`Effortlessly manage and organize your organization's contacts with our intuitive multi-tenant platform. Sign up today to enhance your contact management experience.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'Contact Manager'}
          image={['Feature-rich contact management']}
          withBg={1}
          features={features_points}
          mainText={`Discover Powerful Features of ${projectName}`}
          subTitle={`Explore how ${projectName} can transform your contact management with its robust features designed for efficiency and ease.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'Contact Manager'}
          image={['Team collaboration and efficiency']}
          mainText={`Empowering Organizations with ${projectName}`}
          subTitle={`At ${projectName}, we are dedicated to providing a seamless contact management experience for organizations of all sizes. Our platform is designed to enhance collaboration and efficiency, ensuring your team can focus on what truly matters.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <ContactFormSection
          projectName={'Contact Manager'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Contact support and assistance']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Have questions or need assistance? Reach out to us anytime, and our team will respond promptly to help you with your ${projectName} needs.`}
        />
      </main>
      <WebSiteFooter projectName={'Contact Manager'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
