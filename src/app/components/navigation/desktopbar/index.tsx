import React from "react";
import Link from 'next/link';
import { Button } from "@nextui-org/react";

const DesktopNavigation = ({selectedPage} : {selectedPage: string}) => {
  return (
      <>
        <div className="">

          
          <div className="block services-margin flat-vertic">
            <div className="flat-horiz rotate-top-left rotate-[-90deg]">
              <Link href="/services">
                <Button color="warning" className={`${selectedPage === '/services' ? 'bg-pageBackground' : 'hover:-translate-y-1'}  p-5 py-2 md:py-7`} variant={selectedPage === '/services' ? undefined : 'solid'}  radius="none">
                  <div className="text-black font-bold ">
                    <p>Services</p>
                  </div>
                </Button>
              </Link>
            </div>
          </div>

          <div className="block portfolio-margin flat-vertic">
            <div className="flat-container flat-horiz rotate-top-left rotate-[-90deg]">
                <Link href="/portfolio">
                  <Button color="warning" className={`${selectedPage === '/portfolio' ? 'bg-pageBackground' : 'hover:-translate-y-1'}  p-5 py-2 md:py-7`} variant={selectedPage === '/portfolio' ? undefined : 'solid'} radius="none">
                    <div className="text-black font-bold">
                      <p>Portfolio</p>
                    </div>
                  </Button>
                </Link>
            </div>
          </div>

          <div className="block about-margin flat-vertic">
            <div className="flat-container flat-horiz rotate-top-left rotate-[-90deg]">
              <Link href="/about">
                <Button color="warning" className={`${selectedPage === '/about' ? 'bg-pageBackground' : 'hover:-translate-y-1'}  p-5 py-2 md:py-7`} variant={selectedPage === '/about' ? undefined : 'solid'} radius="none">
                  <div className="text-black font-bold">
                      <p className="">Nicolas</p>
                  </div>
                </Button>
              </Link>
            </div>
          </div>

          <div className="block contact-margin flat-vertic">
            <div className="flat-container flat-horiz rotate-top-left rotate-[-90deg]">
              <Link href="/contact">
                <Button color="warning" className={`${selectedPage === '/contact' ? 'bg-pageBackground' : 'hover:-translate-y-1'}  p-5 py-2 md:py-7`} variant={selectedPage === '/contact' ? undefined : 'solid'} radius="none">
                  <div className="text-black font-bold">
                    <p>Contact</p>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          
        </div>
      </>
  );
};

export default DesktopNavigation;