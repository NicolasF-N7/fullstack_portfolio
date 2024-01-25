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

              <p className="whitespace-pre-wrap">    Je suis un passionné d'informatique depuis <span className="font-bold">mon plus jeune âge</span>. 
              Au collège, je m'amusais déjà à faire des pièges en écrivant des messages drôles sur les ordinateurs des personnes de mon entourage.</p>
              <br/>

              <p className="whitespace-pre-wrap">    Lorsque j'ai compris que l'on pouvait faire bien plus que cela avec l'informatique, 
              j'ai décidé d'entreprendre des études d'<span className="font-bold">ingénieur</span> en logiciel et développement web à l'Enseeiht, à Toulouse à la sortie de ma classe préparatoire maths spé.</p>
              <p className="whitespace-pre-wrap">    J'ai découvert la puissance de l'informatique pour <span className="font-bold">la visibilité en ligne des entreprises</span> et pour <span className="font-bold">tester rapidement une idée de produit</span> au cours de plusieurs expériences en startups à différent stages de développement dans plusieurs pays.</p>
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
                src="/images/nicolas/portrait-nature.jpeg"
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
                  src="/images/nicolas/nico-pict-indo.jpeg"
                  alt="Picture of Nicolas below an indonesian flag"/>
            </div>

            <motion.div className="flex-1 ml-16 text-black"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}>

              <p className="whitespace-pre-wrap">    Au cours de mes presque <span className="font-bold">2 années d'expérience</span>, j'ai entre autres développé mon-savoir faire en développement web en travaillant sur des projets innovants, notamment chez <Link className="text-lightBrown underline italic" target="_blank" href="https://mynft.com/">MyNFT</Link> en participant à l'élaboration d'un site d'échange de NFT et plusieurs produits associés.
              <br/>    Puis chez <Link className="text-lightBrown underline italic" target="_blank" href="https://www.oly-platform.com/">Oly Patform</Link> en prototypant l'automatisation de l'aquisition de données pour leur logiciel de vente de vêtements de seconde main sur une multitude de places de marché.
              <br/>    Et également chez <Link className="text-lightBrown underline italic" target="_blank" href="https://www.protenga.com/">Protenga</Link>, qui crée des fermes d'élevage d'insectes high tech, en améliorant un système de comptage d'insectes.
              </p>
              <br/>

              <p className="whitespace-pre-wrap">    Ma <span className="font-bold">recherche de sens</span> dans mon travail, m'a amené à travailler pour Oly et Protenga. Et c'est cette envie d'avoir un impact social et écologique positif qui m'anime pour travailler avec mes clients.</p>
              <br/>
              <p className="whitespace-pre-wrap">    Mon esprit entrepreneurial m'a mené à m'installer en tant que freelance pour avoir un réel <span className="font-bold">contact avec les clients</span> qui me manquait dans mes expériences professionelles, mais aussi de mettre à profit mes compétences techniques poussées au service d'autres entrepreneurs et de personnes avec le même état d'esprit que moi.</p>
            </motion.div>
          </div>

        </div>
      </>
  );
};

export default About;