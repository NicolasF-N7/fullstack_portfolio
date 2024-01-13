"use client"
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import ExpandableSection from '@/app/components/expandableSection'
import { technologies_logo } from '@/app/services/techno-logo'
import { portfolio_proj_data } from '@/app/portfolio/projects_data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination, Grid, A11y, Mousewheel } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Services() {
  return (
    <div className="text-black">
      {/*______Services title______*/}
 		  <h1 className="text-center font-bold text-xl mt-8">Mes Services</h1>
      
      <div className="ml-10 md:ml-14">
        {/*vvvvvv Container Text & Picture vvvvvvvv*/}
        <div className="flex flex-col md:flex-row">
          {/*______Picture______*/}
          <div className="order-1 md:order-2 m-8 md:ml-0 mb-0">
            <Image
                src="/images/nfoin_StationF_centered_compressed.jpg"
                alt="Portrait of Nicolas Foin"
                width="720"
                height="480"
                className="rounded"
              />
          </div>
          {/*______Picture______*/}

          {/*______Text______*/}
          <div className="order-2 md:order-1 m-8">
            {/* Pitch*/}
            <div className="rounded p-8 bg-lightBrown">
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
        {/*^^^^^^^ Container Text & Picture ^^^^^^^*/}
      </div>

      {/*______Services______*/}
      <ExpandableSection title="Site vitrine">
        {/* Content for Section 1 */}
        <p>Je crée des sites vitrine avec le CMS Wordpress pour gérer le stockage de données et le backend. Selon la personnalisation souhaité et le budget, je peux réaliser la partie interface utilisateur avec React, ou bien avec l’editeur de thème Elementor.
          Il me faut les maquettes graphiques de chaque pages pour pouvoir commencer le projet. Si vous ne les avez pas, bien que je ne sois pas Designer, je peux faire les maquettes moi même sur Figma.</p>
      </ExpandableSection>

      <ExpandableSection title="E-commerce">
        {/* Content for Section 1 */}
        <p>J’utilise Shopify pour créer les sites ecommerces. Selon votre budget, je peux créer l’interface utilisateur totalement personalisée en React, ou bien utiliser l’editeur de thème pour un site plus rapidement fait.
          Il me faut les maquettes graphiques de chaque pages pour pouvoir commencer le projet. Si vous ne les avez pas, bien que je ne sois pas Designer, je peux faire les maquettes moi même sur Figma.</p>
      </ExpandableSection>

      <ExpandableSection title="Application web">
        {/* Content for Section 1 */}
        <p>Pour la création de SaaS et autres applications web nécessitant des fonctionalités uniques, j’utilise React pour faire l’interface utilisateur, et NodeJS pour créer un backend léger et rapide.</p>
      </ExpandableSection>
      {/*______Services______*/}

      {/*vvvvv Projects Carousel section vvvvv*/}
      <div className="m-8 mx-0 p-8 bg-lightBrown">
        <h3 className="font-bold text-xl text-center pb-8">Mes réalisations</h3>

        <div className="swiper-container mx-auto">
          <Swiper
            modules={[FreeMode, Navigation, Pagination, A11y, Mousewheel]}
            spaceBetween={"25em"}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            mousewheel={true}
            loop={true}
            freeMode={true}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}>

            {portfolio_proj_data.map((project, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="text-center">
                  <div className="rounded bg-white">
                    <Image
                      className="rounded w-full"
                      src={project.screenshots[0].src}
                      alt={project.screenshots[0].alt}/>
                  </div>

                  <div className="rounded mt-4 p-2 bg-white w-100">
                    <p className="font-bold py-2">{project.title}</p>
                    <p className="py-2">{project.gist}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center mt-4 ">
          <Link className="p-4 w-1/4 bg-redAccent border-sandSecondary border-2" href="/portfolio">
            <div className=" text-center text-sandSecondary font-bold">
              <p>Détails</p>
            </div>
          </Link>
        </div>
      </div>
      {/*^^^^^Projects Carousel section ^^^^^*/}

      {/*vvvvv Tech skills vvvvv*/}
      <div className="m-16 mx-0 bg-bluePrimary">
        <div className="flex-col p-4">
          <h2 className="text-xl font-bold text-center">Les technologies que je maitrise</h2>

          <div className="swiper-container mx-auto">
            <Swiper
              className="mt-8 h-[24em]"
              modules={[FreeMode, Navigation, Pagination, Grid, A11y, Mousewheel]}
              spaceBetween={30}
              grid={{
                rows: 2,
                fill: 'columns'
              }}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              mousewheel={true}
              loop={false}
              freeMode={true}
              navigation
              pagination={{ clickable: true }}>

              {/* Slide */}
              {technologies_logo.map((techno, index) => (
                <SwiperSlide className="" key={index}>

                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-centermt-8 rounded-tl-lg rounded-br-lg bg-white h-full overflow-hidden">
                      <Image
                        className="p-2 mx-auto"
                        height={128}
                        width={128}
                        src={techno.src}
                        alt={techno.alt}/>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {technologies_logo.map((techno, index) => (
                <SwiperSlide className="">
                  <div className="">
                    <p>{techno.description}</p>
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>
          </div>

        </div>
      </div>

      {/*^^^^^ Tech skills ^^^^^*/}


    {/*______Global container______*/}
    </div>
  );
}