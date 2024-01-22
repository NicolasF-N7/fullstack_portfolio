import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="sm:ml-14 ml-10">
      <div className="m-4 sm:m-8 p-8 font-semibold text-brownTertiary bg-expandedSection">
        <div className="text-center">
          Vous êtes sur le portfolio de Nicolas Foin, freelance en développement web fullstack, spécialisé en React.
        </div>

        <div>
          <br/>
          <br/>
          Pour consulter les services que j'offre, cliquez sur <Link href="/services" className="font-bold underline">services</Link>.
          <br/>
          <br/>
          Pour vous donner une idée de ce que je fais, regardez mes précédents projets dans l'onglet <Link href="/portfolio" className="font-bold underline">portfolio</Link>.
          <br/>
          <br/>
          Pour en savoir plus sur moi, rendez vous dans l'onget <Link href="/about" className="font-bold underline">Nicolas</Link>. 
          <br/>
          <br/>
          Enfin, pour me contacter allez sur <Link href="/contact" className="font-bold underline">contact</Link>.
        </div>

      </div>
    </main>
  )
}
