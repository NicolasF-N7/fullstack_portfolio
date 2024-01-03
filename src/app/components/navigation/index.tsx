"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
import MobileNav from './mobilebar'
import DesktopNav from './desktopbar'

const Navigation = () => {
  const [isMobileNavOpened, setMobileNav] = useState(false);
  const toggleMobileNav = () => {
    setMobileNav(!isMobileNavOpened);
  };

  return (
      <>
        <DesktopNav toggle={toggleMobileNav}/>
        <MobileNav isOpened={isMobileNavOpened} toggle={toggleMobileNav}/>
      </>
  );
};

export default Navigation;