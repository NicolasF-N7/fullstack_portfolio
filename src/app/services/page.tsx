"use client"
import React from "react";
import Image from "next/image";
import ExpandableSection from '../components/expandableSection'

export default function Services() {
  return (
    <div className="text-black">
      {/*______Services title______*/}
 		  <h1 className="text-center font-bold text-xl mt-8">Mes Services</h1>
      
      <div className="ml-10 md:ml-14">
        {/*______Container Text & Picture______*/}
        <div className="flex flex-col md:flex-row">
          {/*______Picture______*/}
          <div className="order-1 md:order-2 m-8 md:ml-0 mb-0">
            <Image
                src="/images/nfoin_StationF_centered_compressed.jpg"
                alt="Portrait of Nicolas Foin"
                width="720"
                height="480"
                className=""
              />
          </div>
          {/*______Picture______*/}

          {/*______Text______*/}
          <div className="order-2 md:order-1 m-8">
            {/* Pitch*/}
            <div className="p-8 bg-lightBrown">
              <div>
                <h3 className="font-bold text-xl">Je suis</h3>
                <p>Nicolas Foin, Freelance en développemment web fullstack spécialisé en React.</p>
                <br/>
              </div>

              <div>
                <h3 className="font-bold text-xl">J'aide</h3>
                <p>Les TPE / PME partout en France à développer leur visibitilité et leur activité en ligne, et également les startups early stage qui ont besoins de tester leur marché rapidement.</p>
                <br/>
              </div>

              <div>
                <h3 className="font-bold text-xl">En offrant</h3>
                <p>Des sites vitrines, ecommerce, et MVP / prototype d’applications web.</p>
                <br/>
              </div>
            </div>
          </div>
          {/*______Text______*/}

        </div>
        {/*______Container Text & Picture______*/}
      </div>

      <ExpandableSection title="Site vitrine">
        {/* Content for Section 1 */}
        <p>This is the content for Section 1.</p>
      </ExpandableSection>

    {/*______Global container______*/}
    </div>
  );
}