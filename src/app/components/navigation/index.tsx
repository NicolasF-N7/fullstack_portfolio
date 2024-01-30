"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link';
import DesktopNav from './desktopbar'

const Navigation = () => {
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