"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link';
import MobileNav from './mobilebar'
import DesktopNav from './desktopbar'

const Navigation = () => {
  const [isMobileNavOpened, setMobileNav] = useState(false);
  const toggleMobileNav = () => {
    setMobileNav(!isMobileNavOpened);
  };
  const pathname = usePathname();

  return (
      <>
        <nav>
          <DesktopNav selectedPage={pathname}/>
        </nav>
      </>
  );
};

export default Navigation;