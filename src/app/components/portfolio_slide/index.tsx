import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PortfolioSlide = ({title, imageList, gist}) => {
  return (
      <>
        <div className="flex-col p-8 text-center">
          <h2 className="text-black font-bold text-xl mb-4">{title}</h2>

          <div className="flex items-center">
            <div className="flex-1 slide-swiper-container">
              <Swiper
                className="slide-swiper"
                modules={[ Navigation, A11y ]}
                spaceBetween={"25em"}
                slidesPerView={1}
                loop={true}
                navigation>

            {imageList.map((image, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                      <Image
                        className="rounded m-auto slider-image"
                        src={image.src}
                        alt={image.alt}/>
                  </SwiperSlide>
                ))}
              </Swiper>


              </div>

              <div className="flex-1 px-4">
                <p className="py-2 bg-expandedSection">{gist}</p>
                <br/>
                <br/>
                <p className="bg-expandedSection">Pour la création de SaaS et autres applications web nécessitant des fonctionalités uniques, j’utilise React pour faire l’interface utilisateur, et NodeJS pour créer un backend léger et rapide.</p>
                <br/>
                <p className="bg-expandedSection">Pour la création de SaaS et autres applications web nécessitant des fonctionalités uniques, j’utilise React pour faire l’interface utilisateur, et NodeJS pour créer un backend léger et rapide.</p> 
              </div>
          </div>
        </div>
      </>
  );
};

export default PortfolioSlide;