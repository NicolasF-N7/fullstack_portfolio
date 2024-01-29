"use client"
import React from "react";
import { useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { portfolio_proj_data } from '@/app/portfolio/projects_data'
import ExpandableSection from '@/app/components/expandableSection'
import PortfolioSlide from '@/app/components/portfolio_slide'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { FreeMode, Navigation, Pagination, A11y, Mousewheel, EffectCreative } from 'swiper/modules';
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
        <div className="ml-10 md:ml-14">
        	<div className="m-4 mr-0 portfolio-swiper-container">
        		<Swiper
	        		hidden={true}
	        		className="portfolio-swiper"
		            modules={[EffectCreative, FreeMode, Pagination, A11y, Mousewheel]}
		            spaceBetween={50}
		            grabCursor={true}
		            onSwiper={handleSwiperInit}
		            slidesPerView={1}
		            direction='horizontal'
		            mousewheel={{
				          forceToAxis: true,
				          sensitivity: 0.5
				        }}
		            freeMode={true}
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
		              <SwiperSlide className="bg-bluePrimary rounded portfolio-slides" key={`portfolio-project-${index}`}>
		                <PortfolioSlide project_data={project} />
		              </SwiperSlide>
		            ))}
		            
		        </Swiper>
        	</div>
        </div>
      </>
  );
};

export default Portfolio;