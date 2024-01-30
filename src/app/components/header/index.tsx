"use client"
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import linkedin_logo from '/public/images/social_networks/linkedin-ovale-sand-light-contrast.webp'
import github_logo from '/public/images/social_networks/github-full-white-sand-light-contrast.webp'
import { socials } from '@/app/contact/social-networks'

const Header = () => {
  return (
      <>
        <header className="bg-bluePrimary text-black p-2 pl-16">
          <link rel="icon" href="/favicon.ico" />
          <div className="flex flex-row justify-between">
            {/* Logo */}
            <div className="text-xl pt-2 text-black font-bold">
              <Link href="/">Nicolas Foin - Developpement Fullstack</Link>
            </div>

            <div className="flex flex-row">

              <div 
                className="inline-block p-2 transform hover:scale-110 transition-transform duration-300 filter grayscale hover:filter-none">
                <Link target="_blank" href={socials.linkedIn}>
                  <Image
                  src={linkedin_logo}
                  alt="LinkedIn Icon"
                  width={32}
                  height={32}
                  className="object-contain"/>
                </Link>
              </div>

              <div 
                className="inline-block p-2 transform hover:scale-110 transition-transform duration-300 filter grayscale hover:filter-none">
                <Link target="_blank" href={socials.github}>
                  <Image
                    src={github_logo}
                    alt="Github Icon"
                    width={32}
                    height={32}
                    className="object-contain"/>
                </Link>
              </div>
            </div>

          </div>
        </header>
      </>
  );
};

export default Header;