"use client"
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import ExpandableSection from '@/app/components/expandableSection'
import FlippingImage from '@/app/components/flippingImage'
import { technologies_logo } from '@/app/services/technologies'
import { portfolio_proj_data } from '@/app/portfolio/projects_data'
import { recommendations } from '@/app/services/recommendations'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination, Grid, A11y, Mousewheel } from 'swiper/modules';
import { Button } from "@nextui-org/react";
import LinkedInLogo from "/public/images/social_networks/LinkedIn_icon.svg"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default async function Services() {
  return (
    <div className="text-black">

      {/*______Services title______*/}
 		  <motion.h1 className="text-center font-bold text-xl mt-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}>Mes Services</motion.h1>
      
      <div className="ml-0 sm:ml-14">
        {/*vvvvvv Container Text & Picture vvvvvvvv*/}
        <div className="flex flex-col sm:flex-row">
          {/*______Picture______*/}
          <motion.div className="order-1 sm:order-2 m-8 ml-16 sm:ml-0 mb-4 sm:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}  
            transition={{ duration: 0.5, ease: 'easeOut' }}>
            <Image
                src="/images/nicolas/nfoin_StationF_centered_compressed.jpg"
                alt="Portrait of Nicolas Foin"
                width="720"
                height="480"
                className="rounded"
              />
          </motion.div>
          {/*______Picture______*/}

          {/*______Text______*/}
          <div className="order-2 sm:order-1 m-8">
            {/* Pitch*/}
            <motion.div className="rounded p-8 bg-sunglowBgSection text-black"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}>

              <div>
                <h3 className="font-bold text-xl">Je suis</h3>
                <p>Nicolas Foin, ingénieur freelance en développement web fullstack spécialisé en React.</p>
                <br/>
              </div>

              <div>
                <h3 className="font-bold text-xl">J'aide</h3>
                <p>Les TPE / PME partout en France à développer leur visibilité et leur activité en ligne, ainsi que les startups early stage qui ont besoin de prototypes pour tester leur marché rapidement.</p>
                <br/>
              </div>

              <div>
                <h3 className="font-bold text-xl">En offrant</h3>
                <p>Des sites vitrine, e-commerce, et produit minimal viable d’applications web.</p>
                <br/>
              </div>

            </motion.div>
          </div>
          {/*______Text______*/}
        </div>
        {/*^^^^^^^ Container Text & Picture ^^^^^^^*/}
      </div>

      {/*______Services______*/}
      <ExpandableSection title="Site vitrine">
        {/* Content for Section 1 */}
        <p className="whitespace-pre-wrap">Je crée des sites vitrine avec le CMS Wordpress pour gérer l'administration de données et le backend. Selon la personnalisation souhaitée et le budget, je peux réaliser la partie interface utilisateur avec React, ou bien avec l’éditeur de thème Elementor.
        <br/></p>
      </ExpandableSection>

      <ExpandableSection title="E-commerce">
        {/* Content for Section 1 */}
        <p className="whitespace-pre-wrap">J’utilise Shopify pour créer les sites e-commerce. Selon votre budget, je peux créer l’interface utilisateur totalement personnalisée en React, ou bien utiliser l’éditeur de thème intégré à Shopify.
        <br/></p>
      </ExpandableSection>

      <ExpandableSection title="Application web">
        {/* Content for Section 1 */}
        <p className="whitespace-pre-wrap">Pour la création de SaaS et autres applications web nécessitant des fonctionnalités sur-mesures, j’utilise React pour faire l’interface utilisateur, et NodeJS pour créer un backend léger et rapide.
        <br/></p>
      </ExpandableSection>
      {/*______Services______*/}

      {/*vvvvv Contact vvvvv*/}
      <div className="m-8 mx-0 bg-sunglow min-h-[10em] flex flex-col justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="sm:ml-[20%] ml-0 font-bold text-xl text-black mb-4 sm:mb-0">Discutons de vos besoins !</p>

          <div className="sm:mr-[20%] mr-0  flex justify-center">
            <Link href="/contact">
              <Button color="primary" className="px-16 py-6 border-softSunglow border-2" variant="solid" radius="none">
                <div className="text-center text-softSunglow font-bold">
                  <p>Contactez moi</p>
                </div>
              </Button>
            </Link>
          </div>

        </div>
      </div>
      {/*^^^^^ Contact ^^^^^*/}

      {/*vvvvv Projects Carousel section vvvvv*/}
      <div className="project-overview-section my-8 p-2 sm:p-8 bg-sunglowBgSection">
        <h3 className="font-bold text-xl text-black text-center pb-8">Mes projets</h3>

        <div className="swiper-container mx-auto">
          
          <Swiper
            className="h-[28em]"
            modules={[FreeMode, Navigation, Grid, Pagination, A11y, Mousewheel]}
            spaceBetween={30}
            grid={{
              rows: 2,
              fill: 'row'
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 0.3
            }}
            loop={false}
            freeMode={true}
            navigation
            pagination={{ clickable: true }}>

            {portfolio_proj_data.map((project, index) => (
              <SwiperSlide className="swiper-slide" key={`project-img-${index}`}>
                <div className="rounded bg-white overflow-hidden">
                  <Image
                    className="rounded max-h-[14em]"
                    src={project.screenshots[0].src}
                    alt={project.screenshots[0].alt}/>
                </div>
              </SwiperSlide>
            ))}

            {portfolio_proj_data.map((project, index) => (
              <SwiperSlide className="swiper-slide" key={`project-gist-${index}`}>
                <div className="rounded mt-2 p-4 py-2 bg-white w-100">
                  <p className="text-center font-bold py-2">{project.title}</p>
                  <p className="py-2">{project.gist}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center mt-8">
          
            <Link href="/portfolio">
              <Button color="primary" className="px-16 py-6 border-charcoal border-2" variant="bodered" radius="none">
                <div className="text-center text-charcoal font-bold">
                  <p>Détails</p>
                </div>
              </Button>
            </Link>
          
        </div>
      </div>
      {/*^^^^^Projects Carousel section ^^^^^*/}


      {/*vvvvv Tech skills vvvvv*/}
      <div className="m-16 mx-0 bg-sunglow">
        <div className="flex-col p-8">
          <h2 className="text-xl font-bold text-center">Les technologies que je maitrise</h2>

          <div className="swiper-container mx-auto">
            
            <Swiper
              className="mt-8 h-[24em]"
              modules={[FreeMode, Navigation, Pagination, Grid, A11y, Mousewheel]}
              spaceBetween={30}
              grid={{
                rows: 2,
                fill: 'row'
              }}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              mousewheel={{
                forceToAxis: true,
                sensitivity: 0.3
              }}
              loop={false}
              freeMode={true}
              navigation
              pagination={{ clickable: true }}>

              {/* Slide */}
              {technologies_logo.map((techno, index) => (
                <SwiperSlide className=""  key={`techno-pict-${index}`}>

                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-center mt-8 rounded-tl-lg rounded-br-lg bg-white h-full overflow-hidden">
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
                <SwiperSlide className=""  key={`techno-desc-${index}`}>
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


      {/*vvvvv Recommendations vvvvv*/}
      <div className="m-16 mx-0 bg-sunglowBgSection">
        <div className="flex-col p-8">
          <h2 className="text-xl font-bold text-center">J'ai travaillé pour eux</h2>

          <div className="swiper-container mx-auto">
            
            <Swiper
              className="mt-8 h-full"
              modules={[FreeMode, Navigation, Pagination, Grid, A11y, Mousewheel]}
              spaceBetween={30}
              grid={{
                rows: 2,
                fill: 'row'
              }}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              mousewheel={{
                forceToAxis: true,
                sensitivity: 0.3
              }}
              loop={false}
              freeMode={false}
              navigation
              pagination={{ clickable: true }}>

              {/* Slide */}
              {recommendations.map((recomm, index) => (
                <SwiperSlide key={`recommendation-portrait-${index}`}>

                  <div className="flex justify-center items-center rounded-tl-lg rounded-br-lg bg-charcoal bg-opacity-15 overflow-hidden">
                    
                      <Link className="mx-auto" target="_blank" href={recomm.linkedIn_profile}>
                        <div className="h-[12em] py-4">
                          <FlippingImage src_initial={recomm.profile_picture_src} alt_initial={recomm.profile_picture_alt} 
                          src_flipped={LinkedInLogo} alt_flipped="LinkedIn logo" />
                        </div>
                      </Link>

                  </div>
                </SwiperSlide>
              ))}

              {recommendations.map((recomm, index) => (
                <SwiperSlide  key={`recommendation-text-${index}`} className="h-full">
                  <div className="h-full">
                    <p>{recomm.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
      {/*^^^^^ Recommendations ^^^^^*/}


    {/*______Global container______*/}
    </div>
  );
}