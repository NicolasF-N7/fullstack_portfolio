import Image from 'next/image'
import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function Home() {
  return (
    <main className="">
      <div className="bg-sandSecondary">
       salut
      </div>
      
    </main>
  )
}
