import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import {motion, useAnimation} from "framer-motion"

import { recommendations } from '@/app/services/recommendations'


const ExpandableSection = ({title, children}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimation();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
    controls.start({ height: isExpanded ? 0 : "auto" });
  };

  {/* Hidden by default */}
  useEffect(() => {
    controls.start({ height: 0});
  }, []);

  return (
      <>
        <div className="p-8 px-14">
          
           <motion.div className={`flex-col border-t-2 border-b-2 border-bluePrimary 
              transition-colors duration-200 ease-in-out ${isExpanded ? 'bg-expandedSection' : 'bg-sandSecondary'}`}
              whileHover={`bg-expandedSection`}>
            
            <button onClick={toggleExpand} className="w-full p-2">
              <div className="flex">
                <motion.div
                  initial={false}
                  animate={{ rotate: isExpanded ? [0, 90] : [90,180,270,360] }}
                  whileHover={{ rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="text-lightBrown text-xl font-bold"
                >
                  <IoIosArrowDroprightCircle size="1.5em" />
                </motion.div>
                <h2 className="flex-1 items-center text-xl font-bold">{title}</h2>
              </div>
            </button>

            <motion.div animate={controls}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{overflow: "hidden"}}>
              <div className="m-6">
                {children}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </>
  );
};

export default ExpandableSection;