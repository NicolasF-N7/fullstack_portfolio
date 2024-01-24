import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Zoom, A11y } from 'swiper/modules';
import github_logo from '/public/images/social_networks/github-full-white-sand-light-contrast.webp'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PortfolioSlide = ({project_data}) => {
  return (
      <>
        <div className="flex-col p-8 text-center">
          <h2 className="text-black font-bold text-xl mb-4">{project_data.title}</h2>

          <div className="flex items-center">
            <div className="flex-1 slide-swiper-container">

              <Swiper
                className="slide-swiper"
                modules={[ Navigation, Pagination, Zoom, A11y ]}
                spaceBetween={"25em"}
                zoom={{
                    maxRatio: 1.5,
                    minRatio: 1
                }}
                slidesPerView={1}
                loop={false}
                navigation
                pagination={{clickable: true}}>


                {project_data.screenshots.map((image, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                        <div className="swiper-zoom-container">
                          <Image
                            className="rounded m-auto slider-image"
                            src={image.src}
                            alt={image.alt}/>
                        </div>
                  </SwiperSlide>
                ))}
              </Swiper>


              </div>

              <div className="flex-1 px-4 mt-4 self-start">
                <p className="p-2 bg-expandedSection">{project_data.desc}</p>
                
                <div className="flex flex-wrap items-start">
                  {project_data.tech_stack.map((techno, index) => (
                    <span className="text-xs font-semibold p-1.5 rounded-md mr-2 mb-2 mt-6 bg-lightBrown whitespace-no-wrap">{techno}</span>
                  ))}
                </div>

                {project_data.github.map((gitLink, index) => (
                  <div className="mt-4">
                    <Link target="_blank" href={gitLink}>
                      <Image
                        src={github_logo}
                        alt="Github Icon"
                        width={32}
                        height={32}
                        className="object-contain"/>
                    </Link>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </>
  );
};

export default PortfolioSlide;