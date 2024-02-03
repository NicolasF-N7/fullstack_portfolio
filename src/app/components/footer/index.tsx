"use client"
import React from "react";
import Link from 'next/link';
import { socials } from '@/app/contact/social-networks'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const pathname = usePathname();

  return (
      <>
        <footer hidden={pathname === '/portfolio'} className="bg-zomp text-black">
          <div className="p-12 pb-4">
            <div className="flex-col">

              <div className="flex flex-row justify-center underline">
                <div className="flex flex-col md:flex-row">
                  <div className="mx-4 text-black mb-6 md:mb-0">
                    <Link href="/services">Services</Link>
                  </div>
                  <div className="mx-4 text-black">
                    <Link href="/portfolio">Portfolio</Link>
                  </div>
                </div>


                <div className="mx-4 text-md md:text-xl text-center text-black font-bold">
                  <Link href="/">Foin Developpement Web</Link>
                </div>

                <div className="flex flex-col md:flex-row ">
                  <div className="mx-4 text-black mb-6 md:mb-0">
                    <Link href="/about">About Nicolas</Link>
                  </div>
                  <div className="mx-4 text-black">
                    <Link href="/contact">Contact</Link>
                  </div>
                </div>
                
              </div>

              {/*Horizontal delimiter*/}
              <div className="mx-10 my-8 border-black border"></div>

              <div className="flex justify-center underline">
                <Link className="mx-4" href={socials.linkedIn}>LinkedIn</Link>
                <Link className="mx-4" href={socials.github}>GitHub</Link>
              </div>

              <div className="flex justify-center">
                <p className="mt-4 text-center">Foin Developpement Web Copyrights 2024 - Tous droits réservés </p>
                <p className="ml-12 mt-4 text-center">Siren: 903257194</p>
              </div>
            </div>

          </div>
        </footer>
      </>
  );
};

export default Footer;