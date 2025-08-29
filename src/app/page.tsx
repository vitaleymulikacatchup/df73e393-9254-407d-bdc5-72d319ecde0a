"use client";
import { redirect } from 'next/navigation';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <>
      <BillboardHero
        title="Welcome to PhotonForge Studio"
        subtitle="Showcasing the art of futuristic photography"
      />
      <SplitAbout
        description="Deliver stunning visuals that captivate and inspire. Our futuristic photography transforms the everyday into the extraordinary through captivating imagery and technique."
      />
      <HowToBuy3D
        heading="How to Book a Shoot"
        items={[
          { title: 'Contact Us', description: 'Reach out via our contact form or email.', image: '/images/placeholder1.avif' },
          { title: 'Choose a Package', description: 'Select from various photography packages.', image: '/images/placeholder2.avif' },
          { title: 'Schedule Your Session', description: 'Pick a date and time that works for you.', image: '/images/placeholder3.avif' }
        ]}
      />
      <TextGridTokenomics
        title="Our Services"
        description="Explore our unique photography offerings to capture the essence of the moment."
        tokenData={[
          { value: '30+', description: 'Successfully completed projects' },
          { value: '10k+', description: 'Happy clients' },
          { value: '5', description: 'Years of experience' }
        ]}
      />
      <CentralFAQ
        heading="Frequently Asked Questions"
        lead="Find answers to common questions about our photography services."
        items={[
          { title: 'What should I wear?', content: 'Choose attire that reflects your personality, comfort and style.' },
          { title: 'How do you edit photographs?', content: 'We apply professional photo editing techniques to enhance each image while retaining its natural beauty.' },
          { title: 'What happens if it rains?', content: 'We offer rescheduling options or alternative indoor locations.' },
          { title: 'Are digital copies included?', content: 'Yes, all packages include access to digital copies of your photos.' }
        ]}
      />
      <FooterBase
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={40}
        columns={[
          { title: 'Links', items: [{ label: 'Home', onClick: () => redirect('#hero') }, { label: 'About', onClick: () => redirect('#about') }] },
          { title: 'Services', items: [{ label: 'Portfolio', onClick: () => redirect('#how-to-buy') }, { label: 'Contact', onClick: () => redirect('#faq') }] },
          { title: 'Legal', items: [{ label: 'Privacy Policy', onClick: () => redirect('#footer') }] },
        ]}
        copyrightText="© 2023 PhotonForge Studio"
        onPrivacyClick={() => redirect('/privacy')}
      />
    </>
  );
}