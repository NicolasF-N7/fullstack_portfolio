import React from "react";
import Link from 'next/link';
import { socials } from '@/app/contact/social-networks'

const Footer = ({isOpen, toggle}) => {
  return (
      <>
        <footer className="bg-bluePrimary text-black">
          <div className="p-12 pb-4">
            <div className="flex-col">

              <div className="flex flex-row justify-center">
                <div className="flex flex-col sm:flex-row">
                  <div className="mx-4 text-black mb-6 sm:mb-0">
                    <Link href="/services">Services</Link>
                  </div>
                  <div className="mx-4 text-black">
                    <Link href="/portfolio">Portfolio</Link>
                  </div>
                </div>


                <div className="mx-4 text-md sm:text-xl text-center text-black font-bold">
                  <Link href="/">Foin Developpement Web</Link>
                </div>

                <div className="flex flex-col sm:flex-row ">
                  <div className="mx-4 text-black mb-6 sm:mb-0">
                    <Link href="/about">About Nicolas</Link>
                  </div>
                  <div className="mx-4 text-black">
                    <Link href="/contact">Contact</Link>
                  </div>
                </div>
                
              </div>

              <div className="mx-10 my-8 border-black border"></div>

              <div className="flex justify-center">
                <Link className="mx-4" href={socials.linkedIn}>LinkedIn</Link>
                <Link className="mx-4" href={socials.github}>GitHub</Link>
              </div>

              <div className="flex justify-center">
                <p className="mt-4 text-center">Copyrights 2024 - Foin Developpement Web</p>
              </div>
            </div>

          </div>
        </footer>
      </>
  );
};

export default Footer;