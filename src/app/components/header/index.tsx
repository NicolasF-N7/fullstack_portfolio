import React from "react";
import Link from 'next/link';

const Header = ({isOpen, toggle}) => {
  return (
      <>
        <header className="bg-bluePrimary text-black p-4 pl-16">
          <div className="">
            {/* Logo */}
            <div className="text-xl text-black font-bold">
              <Link href="/">Nicolas Foin - Developpement Fullstack</Link>
            </div>

          </div>
        </header>
      </>
  );
};

export default Header;