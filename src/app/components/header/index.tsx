import React from "react";
import Link from 'next/link';
import Image from "next/image";
import linkedin_logo from '/public/images/social_networks/linkedin-ovale-sand-light-contrast.webp'
import github_logo from '/public/images/social_networks/github-full-white-sand-light-contrast.webp'


const Header = ({isOpen, toggle}) => {
  return (
      <>
        <header className="bg-bluePrimary text-black p-4 pl-16">
          <div className="flex flex-row justify-between">
            {/* Logo */}
            <div className="text-xl text-black font-bold">
              <Link href="/">Nicolas Foin - Developpement Fullstack</Link>
            </div>

            <div className="flex flex-row">
              <div className="inline-block p-2 transition-all duration-300 filter grayscale hover:filter-none">
                <Image
                  src={linkedin_logo}
                  alt="LinkedIn Icon"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              <div className="inline-block p-2 transition-all duration-300 filter grayscale hover:filter-none">
                <Image
                  src={github_logo}
                  alt="Github Icon"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </header>
      </>
  );
};

export default Header;