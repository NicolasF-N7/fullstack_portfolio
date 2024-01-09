import React from "react";
import Link from 'next/link';

const DesktopNavigation = ({toggle}) => {
  return (
      <>
        <div className="">

          
          <div className="block services-margin flat-vertic">
            <div className="flat-horiz rotate-top-left rotate-[-90deg]">
              <Link href="/services">
                <div className=" inline-block text-black font-bold p-4 py-2 md:py-4 bg-bluePrimary">
                  <p>Services</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="block portfolio-margin flat-vertic">
            <div className="flat-container flat-horiz rotate-top-left rotate-[-90deg]">
                <Link className="" href="/portfolio">
                  <div className="inline-block text-black font-bold p-4 py-2 md:py-4 bg-bluePrimary">
                    <p>Portfolio</p>
                  </div>
                </Link>
            </div>
          </div>

          <div className="block about-margin flat-vertic">
            <div className="flat-container flat-horiz rotate-top-left rotate-[-90deg]">
              <Link href="/services">
                <div className="inline-block text-black font-bold p-4 py-2 md:py-4 bg-bluePrimary">
                    <p className="">Nicolas</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="block contact-margin flat-vertic">
            <div className="flat-container flat-horiz rotate-top-left rotate-[-90deg]">
              <Link href="/services">
                <div className="inline-block text-black font-bold p-4 py-2 md:py-4 bg-bluePrimary">
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