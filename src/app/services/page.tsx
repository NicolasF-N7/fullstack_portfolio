import React from "react";
import Image from "next/image";

export default function Services() { 
  return (
    <div>
      {/* TITLE */}
      <div className="ml-14 text-black">
   		  <h1 className="text-center font-bold text-xl mt-4">Mes Services</h1>
        
        <div className="inline">

        <div className="flex flex-col md:flex-row">
          {/* Picture */}
          <div className="order-1 md:order-2 m-8 md:ml-0 mb-0 w/4">
            <Image
                src="/images/nfoin_StationF_centered_compressed.jpg"
                alt="Portrait of Nicolas Foin"
                width="1920"
                height="1080"
                layout="responsive"
                className=""
              />
          </div>

          {/* Text */}
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
        </div>


        {/* Presentation */}
        <div className="">
          
          </div>
        </div>

      </div>

    </div>

  );
}