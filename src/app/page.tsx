import Image from 'next/image'
import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function Home() {
  return (
    <main className="">
      <div className="bg-sandSecondary">
       Vous etes sur le portfolio de Nicolas Foin, freelance en dev web fullstack. Pour consulter mes services, cliquez sur services. Pour voir mes précédents projets: portfolio. Pour en savoir plus sur moi: Nicolas. Et pour me contacter: contact
      </div>
      
    </main>
  )
}
