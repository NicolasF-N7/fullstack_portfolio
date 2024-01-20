"use client"
import React from "react";
import Link from 'next/link';
import { useEffect } from 'react';
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';

const About = () => {

  return (
      <>
        <div className="flex-col m-8 pl-10 md:pl-14 text-center">
          <p className="text-xl font-bold text-black">Qui est Nicolas?</p>

          {/* FIRST PARAGRAPH*/}
          <div className="flex text-left mt-12">
            <motion.div className="flex-1 mr-16 text-black"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}>

              <p>Je suis un passionné d'informatique depuis <span className="font-bold">mon plus jeune âge</span>. 
              Au collège, je m'amusais déjà à faire des pièges en écrivant des messages drôles sur les ordinateurs des personnes de mon entourage.</p>
              <br/>

              <p>Lorsque j'ai compris que l'on pouvait faire bien plus que cela avec l'informatique, 
              j'ai décidé d'entreprendre des études d'ingénieur en logiciel et développement web à l'Enseeiht, à Toulouse.</p>
              <p>J'ai découvert <span className="font-bold">la puissance de l'informatique pour les entreprises</span> au travers de la visibilité en ligne et de l'automatisation au cours de plusieurs expériences en startups dans différents pays.</p>
              <br/>
            </motion.div>

            <div className="flex-1 max-w-[33%]">
              <Image
                className="rounded"
                object-fit="cover"
                blurDataURL="data:..."
                placeholder="blur"
                width="480"
                height="480"
                src="/images/portfolio/nico-pict-kl.jpeg"
                alt="Picture of Nicolas smiling"/>
            </div>
          </div>

          {/* SECOND PARAGRAPH*/}
          <div className="flex text-left mt-12">
            <div className="flex-1 max-w-[33%]">
                <Image
                  className="rounded"
                  object-fit="cover"
                  blurDataURL="data:..."
                  placeholder="blur"
                  width="480"
                  height="480"
                  src="/images/portfolio/nico-pict-indo.jpeg"
                  alt="Picture of Nicolas below an indonesian flag"/>
            </div>

            <motion.div className="flex-1 ml-16 text-black"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}>

              <p>Au cours de mes <span className="font-bold">presque 2 années d'expérience</span>, j'ai entre autres développé mon-savoir faire en développement web en travaillant sur des projets innovants, notamment en participant à l'élaboration d'un site d'échange de NFT (des "objets numériques")</p>
              <br/>

              <p>Ma <span className="font-bold">recherche de sens</span> dans mon travail, m'a amené à travailler pour une entreprise d'élevage d'insectes à partir de bio-déchets, et également une startup dans les habits de seconde main. Et c'est cette envie d'avoir un impact social ou écologique positif qui m'anime pour travailler avec mes clients.</p>
              <br/>
              <p>Mon esprit entrepreneurial m'a mené à m'installer en tant que freelance pour avoir un réel <span className="font-bold">contact avec les clients</span> qui me manquait dans mes expériences professionelles, mais aussi de mettre à profit mes compétences techniques poussées au service d'autres entrepreneurs et de personnes avec le même état d'esprit que moi.</p>
            </motion.div>
          </div>

        </div>
      </>
  );
};

export default About;