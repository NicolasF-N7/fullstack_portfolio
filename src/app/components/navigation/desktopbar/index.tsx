import React from "react";
import Link from 'next/link';

const DesktopNavigation = ({toggle}) => {
  return (
      <>
        <div className="">

          
          <div className="block services-margin ">
            <div className="flat-container">
              <Link href="/services">
                <div className="rotate-top-left rotate-[-90deg] inline-block text-black font-bold p-4 bg-bluePrimary">
                  <p>Services</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="block portfolio-margin">
            <div className="flat-container">
                <Link href="/services">
                  <div className="rotate-top-left rotate-[-90deg] inline-block text-black font-bold p-4 bg-bluePrimary">
                    <p>Portfolio</p>
                  </div>
                </Link>
            </div>
          </div>

          <div className="block about-margin">
            <div className="flat-container">
              <Link href="/services">
                <div className="rotate-top-left rotate-[-90deg] inline-block text-black font-bold p-4 bg-bluePrimary">
                    <p>About Nicolas</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="block contact-margin">
            <div className="flat-container">
              <Link href="/services">
                <div className="rotate-top-left rotate-[-90deg] inline-block text-black font-bold p-4 bg-bluePrimary">
                  <p>Contact</p>
                </div>
              </Link>
            </div>
          </div>
          
        </div>
      </>
  );
};

export default DesktopNavigation;