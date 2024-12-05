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
  AboutUsDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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

  const testimonials = [
    {
      text: 'Using ${projectName} has transformed how we manage our contacts. The intuitive interface and robust features have made our workflow seamless.',
      company: 'Tech Innovators Inc.',
      user_name: 'Alex Johnson, Operations Manager',
    },
    {
      text: '${projectName} has been a game-changer for our organization. The multi-tenant support allows us to manage multiple teams effortlessly.',
      company: 'Global Solutions Ltd.',
      user_name: 'Emily Carter, IT Director',
    },
    {
      text: 'The user invitation system in ${projectName} is fantastic. It has streamlined our onboarding process and improved team collaboration.',
      company: 'Creative Minds Agency',
      user_name: 'Michael Lee, HR Specialist',
    },
    {
      text: "We love how ${projectName} keeps our contact data organized and accessible. It's a must-have tool for any growing business.",
      company: 'Future Enterprises',
      user_name: 'Sarah Kim, CEO',
    },
    {
      text: 'The support team at ${projectName} is exceptional. They are always ready to help and ensure we get the most out of the platform.',
      company: 'Innovatech Corp.',
      user_name: 'David Brown, Customer Success Manager',
    },
    {
      text: '${projectName} has simplified our contact management process. The platform is user-friendly and packed with features that add real value.',
      company: 'NextGen Solutions',
      user_name: 'Jessica White, Product Manager',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us - Learn More About ${projectName}`}</title>
        <meta
          name='description'
          content={`Discover the mission, values, and team behind ${projectName}. Learn how we are committed to providing exceptional contact management solutions.`}
        />
      </Head>
      <WebSiteHeader projectName={'Contact Manager'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Contact Manager'}
          image={['Team collaboration and innovation']}
          mainText={`Discover the Story Behind ${projectName}`}
          subTitle={`Learn about our journey, mission, and the dedicated team driving ${projectName} forward. We are committed to delivering exceptional contact management solutions for organizations worldwide.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Meet Our Team`}
        />

        <AboutUsSection
          projectName={'Contact Manager'}
          image={['Visionary leadership and innovation']}
          mainText={`Our Mission and Vision at ${projectName}`}
          subTitle={`At ${projectName}, we strive to revolutionize contact management with innovative solutions. Our mission is to empower organizations to connect and collaborate more effectively.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Explore Our Vision`}
        />

        <TestimonialsSection
          projectName={'Contact Manager'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`What Our Users Say About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'Contact Manager'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
