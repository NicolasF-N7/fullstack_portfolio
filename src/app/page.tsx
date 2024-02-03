import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="sm:ml-14 ml-10">
      <div className="m-4 sm:m-8 p-8 text-black bg-olivine">
        <div className="text-center">
          <h1 className="font-bold">Vous êtes sur le portfolio de Nicolas Foin, freelance en développement web fullstack, spécialisé en React.</h1>
        </div>

        <div className="font-medium">
          <br/>
          <br/>
          Pour consulter les services que j'offre, cliquez sur <Link href="/services" className="font-bold underline">services</Link>.
          <br/>
          <br/>
          Pour avoir une idée de ce que je fais, regardez mes précédents projets dans <Link href="/portfolio" className="font-bold underline">portfolio</Link>.
          <br/>
          <br/>
          Pour en savoir plus sur moi, rendez-vous dans l'onget <Link href="/about" className="font-bold underline">Nicolas</Link>. 
          <br/>
          <br/>
          Enfin, pour m'écrire allez sur <Link href="/contact" className="font-bold underline">contact</Link>.
          <br/>
          <br/>
          <br/>
          Bonne visite !
        </div>

      </div>
    </main>
  )
}
