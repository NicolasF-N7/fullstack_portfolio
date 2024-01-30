import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Zoom, A11y } from 'swiper/modules';
import github_logo from '/public/images/social_networks/github-full-white-sand-light-contrast.webp'
import type {ProjectDataType} from '@/app/portfolio/projectDataType';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PortfolioSlide = ({project_data} : {project_data: ProjectDataType}) => {
  return (
      <>
        <div className="flex-col p-8 pb-0 h-full">
          <h2 className="text-center text-black font-bold text-xl mb-4">{project_data.title}</h2>

          <div className="flex items-center h-[90%]">
            <div className="flex-1 slide-swiper-container self-center">
              <Swiper
                className="slide-swiper"
                modules={[ Navigation, Pagination, Zoom, A11y ]}
                spaceBetween={"25em"}
                zoom={{
                    maxRatio: 2,
                    minRatio: 1
                }}
                slidesPerView={1}
                loop={false}
                navigation
                pagination={{clickable: true}}>


                {project_data.screenshots.map((image, index) => (
                  <SwiperSlide className="swiper-slide" key={`project-screenshots-${index}`}>
                    <div className="h-full flex justify-center items-center pb-[10%]">
                      <div className="swiper-zoom-container">
                        <Image
                          className="rounded m-auto slider-image"
                          src={image.src}
                          alt={image.alt}/>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

              <div className="flex-1 pl-4 mt-4 self-center pb-[5%]">

                <div className="py-4 px-8 pt-2 bg-expandedSection">
                  <h2 className="text-center font-bold text-xl">Le projet</h2>
                  <p>{project_data.proj_desc}</p>
                </div>

                <div className="py-4 px-8 pt-2 my-[3vh] bg-expandedSection">
                  <h2 className="text-center font-bold text-xl">Comment c'est fait</h2>
                  <p>{project_data.my_work}</p> 
                </div>
                
                <div className="mt-6 flex flex-wrap items-start">
                  {project_data.tech_stack.map((techno, index) => (
                    <span className="text-xs font-semibold p-2 rounded-md mr-2 mb-2 bg-lightBrown whitespace-no-wrap">{techno}</span>
                  ))}

                  <div className="ml-auto transform hover:scale-110 transition-transform duration-300">
                    <Link target="_blank" href={project_data.github}>
                      <Image
                        src={github_logo}
                        alt="Github Icon"
                        width={32}
                        height={32}
                        className="object-contain"/>
                    </Link>
                  </div>
                </div>

                
              </div>
          </div>
        </div>
      </>
  );
};

export default PortfolioSlide;