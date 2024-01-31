import { useState } from 'react';
import Image from "next/image";
import {motion, useAnimation} from "framer-motion"

import type {StaticImageData} from "@/app/components/StaticImageDataType"

const FlippingImage = ({src_initial,alt_initial,src_flipped,alt_flipped}: 
  {src_initial: StaticImageData;alt_initial: string;src_flipped: StaticImageData;alt_flipped: string;}) => {
  const mainImgControls = useAnimation();
  const flippedImgControls = useAnimation();
  const [isHovered, setHovered] = useState(false);

  const toggleIsHovered = () => {
    setHovered(!isHovered);
    mainImgControls.start({
      rotateY: isHovered? [180, 90, 0] : [0, 90, 180],
      opacity: isHovered? 1 : 0,
      transition: { duration: 0.15 }
    })
    flippedImgControls.start({
       rotateY: isHovered? [0, 90, 180] : [180, 90, 0],
      opacity: isHovered? 0 : 1,
      transition: { duration: 0.15 }
    })
  };

  return (
      <>
        {/*This motion div only takes the hover information. We don't want to rely on the flipping div for the hover as it will move along the animation */}
        <motion.div
          onHoverStart={toggleIsHovered}
          onHoverEnd={toggleIsHovered}
          className="w-full h-full flip-card-inner">

          {/*This motion.div is used for the flip animation, triggered by toggleIsHovered()*/}
          <div className="w-full h-full relative">

            {/*This motion.div is used for the fade out animation, triggered by toggleIsHovered()*/}
            <motion.div className="w-full h-full absolute" animate={mainImgControls}>
              <Image
                height={128}
                width={128}
                className={`w-full h-full object-cover rounded-full`}
                src={src_initial}
                alt={alt_initial}/>
            </motion.div>

            {/*This motion.div is used for the fade in animation, triggered by toggleIsHovered()*/}
            <motion.div className="w-full h-full" animate={flippedImgControls}>
              <Image
                height={128}
                width={128}
                src={src_flipped}
                alt={alt_flipped}
                className="w-full h-full object-fit rounded-full"/>
            </motion.div>
          </div>
        </motion.div>
      </>
    );
  }

export default FlippingImage;