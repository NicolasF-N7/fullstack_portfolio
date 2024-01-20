import React from "react";
import Link from 'next/link';

const Footer = ({isOpen, toggle}) => {
  return (
      <>
        <footer className="bg-bluePrimary text-black">
          <div className="p-12 pb-4">
            <div className="flex-col">

              <div className="flex justify-center">
                <div className="mx-4 text-black">
                  <Link href="/services">Services</Link>
                </div>
                <div className="mx-4 text-black">
                  <Link href="/portfolio">Portfolio</Link>
                </div>
                <div className="mx-4 text-xl text-black font-bold">
                  <Link href="/">Foin Developpement Web</Link>
                </div>
                <div className="mx-4 text-black">
                  <Link href="/about">About Nicolas</Link>
                </div>
                <div className="mx-4 text-black">
                  <Link href="/contact">Contact</Link>
                </div>
                
              </div>

              <div className="mx-10 my-8 border-black border"></div>

              <div className="flex justify-center">
                <p className="mx-4">LinkedIn</p>
                <p className="mx-4">GitHub</p>
              </div>

              <div className="flex justify-center">
                <p className="mt-4">Copyrights 2024 - Foin Developpement Web</p>
              </div>
            </div>

          </div>
        </footer>
      </>
  );
};

export default Footer;