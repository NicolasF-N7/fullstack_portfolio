"use client"
import React from "react";
import Link from 'next/link';
import Image from "next/image";

const Header = () => {
  return (
      <>
        <header className="bg-sunglow text-black p-2 pl-16">
          <title>Portfolio - Nicolas Foin</title>
          <link rel="icon" href="/favicon.ico" />
          <div className="flex flex-row justify-between">
            {/* Logo */}
            <div className="text-xl pt-2 text-black font-bold">
              <Link href="/">Nicolas Foin - Developpement Fullstack</Link>
            </div>

          </div>
        </header>
      </>
  );
};

export default Header;