"use client"
import React from "react";
import { useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { portfolio_proj_data } from '@/app/portfolio/projects_data'
import ExpandableSection from '@/app/components/expandableSection'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { FreeMode, Pagination, A11y, Mousewheel, EffectCreative } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-creative';

const Portfolio = ({isOpen, toggle}) => {

  const handleSwiperInit = (swiper) => {
    swiper.snapGrid = swiper.slidesGrid.slice(0);
  };

  return (
      <>
      	<div className="">
	        <div className="ml-10 md:ml-14">
	        	<div className="ml-1 portfolio-swiper-container">
		        	<Swiper
		        		className="h-full"
			            modules={[EffectCreative, FreeMode, Pagination, A11y, Mousewheel]}
			            spaceBetween={50}
			            centeredSlides={true}
			            grabCursor={true}
			            onSwiper={handleSwiperInit}
			            slidesPerView={1}
			            mousewheel={true}
			            freeMode={false}
			            pagination={{ clickable: true }}
			            effect={'creative'}
				        creativeEffect={{
				        	limitProgress: 2,
					        prev: {
					            shadow: true,
					            scale: 0.7,
					            origin: 'left center',
					            translate: ['-5%', 0, -10],
					            rotate: [0, 0, 0],
					        },
					        next: {
					          	shadow: false,
					          	scale: 1.3,
					            origin: 'right center',
					            /* [x, y, z] */
					            translate: ['200%', 0, 50],
					            rotate: [0, 0, 0],
					        },
				        }}>

			            {portfolio_proj_data.map((project, index) => (
			              <SwiperSlide className="m-10 bg-bluePrimary rounded" key={index}>
			                <div className="flex-col p-8 text-center ">
			                	<h2 className="text-black font-bold text-xl mb-4">{project.title}</h2>

			                	<div className="flex">
					                <Image
					                  	className="w-1/2"
					                    src={project.screenshot_src}
					                    alt={project.screenshot_alt}/>

					                <div className="mt-4 px-4">
					                    <p className="py-2 bg-expandedSection">{project.gist}</p>
					                    <br/>
					                    <br/>
									    <p className="bg-expandedSection">Pour la création de SaaS et autres applications web nécessitant des fonctionalités uniques, j’utilise React pour faire l’interface utilisateur, et NodeJS pour créer un backend léger et rapide.</p>
									    <br/>
									    <p className="bg-expandedSection">Pour la création de SaaS et autres applications web nécessitant des fonctionalités uniques, j’utilise React pour faire l’interface utilisateur, et NodeJS pour créer un backend léger et rapide.</p>
									    
					                </div>
					            </div>
			                </div>
			              </SwiperSlide>
			            ))}
			            <SwiperSlide className="m-10 swiper-slide">
			            </SwiperSlide>
			        </Swiper>
	        	</div>
	        </div>
		</div>
      </>
  );
};

export default Portfolio;