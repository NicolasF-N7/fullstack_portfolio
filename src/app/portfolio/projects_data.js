import hestauScreenshot from '/public/images/projects_media/hestau-festival/hestau-wless720.png'
import hestauArtistesScreenshot from '/public/images/projects_media/hestau-festival/hestau-artistes-w720.png'
import hestauDescriptionScreenshot from '/public/images/projects_media/hestau-festival/hestau-description-w720.png'
import hestauProgrammeScreenshot from '/public/images/projects_media/hestau-festival/hestau-programme-w720.png'
//TO DELETE

import hestauTop from '/public/images/projects_media/hestau-festival/top-w720.png'
import hestauPartnersTop from '/public/images/projects_media/hestau-festival/partners-w720.png'

import mynftBridgeScreenshot from '/public/images/projects_media/mynft-bridge/MyNFT-Bridge-w720.png'
import mynftBridgeProgressScreenshot from '/public/images/projects_media/mynft-bridge/bridge-progress-w720.png'
import mynftBridgeBreadcrumbScreenshot from '/public/images/projects_media/mynft-bridge/mynft-bridge-breadcrumb-w720.png'
import mynftBridgeSuccessScreenshot from '/public/images/projects_media/mynft-bridge/mynft-bridge-mig-success-w720.png'

import nexchangeHomepage from '/public/images/projects_media/nexchange/homepage-w720.png'
import nexchangeMetamask from '/public/images/projects_media/nexchange/metamask-w720.png'

import mintWallet from '/public/images/projects_media/mynft-mint/wallet-connection-w720.png'
import mintForm from '/public/images/projects_media/mynft-mint/form.png'

import domainTokMint from '/public/images/projects_media/mynft-domain-tokenization/mint-domain-w720.png'
import domainTokEditDNS from '/public/images/projects_media/mynft-domain-tokenization/dns-edit-w720.png'

import islaPriceScraper from '/public/images/projects_media/isla-price-scraper/price-scraper-w720.png'
import islaScraperRunning from '/public/images/projects_media/isla-price-scraper/running-w720.png'
import islaScraperResult from '/public/images/projects_media/isla-price-scraper/result-w720.png'

import islaPopularityScraper from '/public/images/projects_media/isla-popularity/vc-w720.png'
import islaPopularityScraperResult from '/public/images/projects_media/isla-popularity/result-w720.png'

import lbcExtractor from '/public/images/projects_media/lbc-price-extension/lbc-w720side.png'
import lbcExtractorResult from '/public/images/projects_media/lbc-price-extension/result-small-w720.png'

import servicesPortfolio from '/public/images/projects_media/portfolio/services-w720.png'
import figmaPalettePortfolio from '/public/images/projects_media/portfolio/figma-palette-w720.png'
import figmaScreensPortfolio from '/public/images/projects_media/portfolio/figma-screens-w720.png'


/* 
Structure of portfolio_proj_data:
List of project
Project = {title, screenshots, gist}

Gist is what's displayed in the /services page, in the carousel with all projects, to describe them

Projects (Chronological order):
x MYNFT / Perso Nexchange
x MyNFT Bridge
x MyNFT Mint
x MyNFT DNS Tokenization
x ISLA - Isla github marketplaces prices (frontend + scraper)
x ISLA Prices, (visibility), popularity scraper
- ISLA Vinted auto post
x LBC Price extractor extension
x Hestau
x Portfolio

Mapping array to easily change projects order?
*/


export const portfolio_proj_data = [
	{
		title: "Mon Portfolio - Freelance",
		gist: "Site de présentation de mes services de developpement web",
		proj_desc: "Ce site a été fait en typescript avec React-JS et Next-JS, et Tailwind-CSS pour le design de l'interface. Les animations sont faites grâce à Framer-Motion. La maquette pour l'interface utilisateur à été faite sous Figma.",
		proj_desc: "Mon portfolio présente les services que j'offre en tant que freelance, les technologies que je maitrise, mon parcours, et biensur les projets sur lesquels j'ai travaillé par le passé.",
		my_work: "J'ai fais ce site en typescript avec Next-JS sous React, et avec Tailwind-CSS pour le design. Les animations sont faites grâce à Framer-Motion. La maquette du design à été faite sous Figma.",
		tech_stack: ["React-JS", "Tailwind-CSS", "Framer-Motion", "Figma"],
		github: "https://github.com/NicolasF-N7/fullstack_portfolio",
		screenshots: [
			{
				src: servicesPortfolio,
				alt: "Service page of Nicolas's portfolio"
			},
			{
				src: figmaPalettePortfolio,
				alt: "Figma mock-up with color palette"
			},
			{
				src: figmaScreensPortfolio,
				alt: "Figma mock-up of portfolio pages"
			},
		]
	},
	{
		title: "Festival de musique - Hestau",
		gist: "Site de présentation du festival pour améliorer sa visibilité en ligne.",
		proj_desc: "L'objectif de ce site était d'appuyer la communication de ce festival en plus de ce qui a été fait sur les réseaux sociaux et auprès d'écoles partenaire de l'association qui organise ce festival.",
		my_work: "J'ai fais ce site de présentation avec Wordpress et Elementor, l'un des éditeurs de thème les plus connus.",
		tech_stack: ["Wordpress", "Elementor"],
		github: "",
		screenshots: [
			{
				src: hestauTop,
				alt: "Hestau festival project screenshot"
			},
			{
				src: hestauPartnersTop,
				alt: "Hestau festival screenshot of partners section"
			}
		],
	},
	{ 
		title: "Extracteur de prix LeBonCoin - Projet perso",
		gist: "Extension chrome agrégeant les prix des annonces d'une recherche sur LeBonCoin sous format excel",
		proj_desc: "Cette extension chrome permet d'obtenir des informations d'annonces LeBonCoin sous un format exploitable. Un cas d'utilisation est de déterminer le prix moyen d'un modèle de moto, pour pouvoir repérer plus facilement les annonces qui ont un prix inférieur au marché.",
		my_work: "Elle a été faite en pure javascript. Elle viens récupérer les données de LeBonCoin directement sur la page des résultats d'une recherche par l'utilisateur.",
		tech_stack: ["Javascript"],
		github: "https://github.com/NicolasF-N7/LBC_price_extractor_extension",
		screenshots: [
			{
				src: lbcExtractor,
				alt: "LeBonCoin page which data are extracted from"
			},
			{
				src: lbcExtractorResult,
				alt: "LeBonCoin prices extracted result under csv format"
			}
		]
	},
	{
		title: "Estimateur de popularité des marques de mode - ISLA",
		gist: "Script récupérant le nombre de produits d'une marque disponible sur le marché de la seconde main",
		proj_desc: "Ce script est un agrégateur de données comptabilisant le nombre d'objets de différentes marques en ciculation sur le maché de la seconde main. Cela avait pour objectif de donner une mesure de la popularité d'une marque.",
		my_work: "Il est basé sur Puppeteer, un module de web scraping en javascript qui émule un navigateur web pour accéder aux données d'un site.",
		tech_stack: ["Puppeteer"],
		github: "https://github.com/NicolasF-N7/Brand_popularity_scraper",
		screenshots: [
			{
				src: islaPopularityScraper,
				alt: "Agrégateur de donnés depuis Vestiaire Collective et d'autres marketplaces"
			},
			{
				src: islaPopularityScraperResult,
				alt: "Web scraper result"
			}
		]
	},
	{ 
		title: "Agrégateur de prix de marketplaces - ISLA",
		gist: "Script récupérant les prix de vêtements sur des marketplaces de seconde main",
		proj_desc: "Ce projet est un prototype qui avait pour but de récupérer les prix des vêtements de seconde main dans l'objectif d'établir une suggestion de prix pour simplifier le processus de publication d'annonce et de vente. ",
		my_work: "Il a été fait avec Node-JS et Express. L'interface n'est pas belle - c'est sûr - mais ce qui a été testé avec ce prototype est la fiabilité de la prédiction. ",
		tech_stack: ["Node-JS", "EJS", "Express"],
		github: "https://github.com/ISLA-Tech/Marketplace_prices_frontend/tree/main",
		screenshots: [
			{
				src: islaPriceScraper,
				alt: "Web application to scrape prices from second hand garments on several marketplaces"
			},
			{
				src: islaScraperRunning,
				alt: "Web app's Scraper running"
			},
			{
				src: islaScraperResult,
				alt: "Scraper result"
			},
		]
	},
	{ 
		title: "Bridge - MyNFT",
		gist: "Application web permettant de transférer des NFT entre différentes blockchains",
		proj: "J'ai créé le frontend de cette application web en pure javascript à partir des maquettes fournies par l'équipe de design. Je l'ai connecté à l'API du backend ainsi qu'aux différentes blockchains utilisées en utilisant le module Web3-JS.",
		proj_desc: "Ce projet a pour objectif d'agir comme un système sécurisé de transfert de NFT (un titre de propriété) entre plusieurs blockchains indépendantes.",
		my_work: "J'ai créé le frontend de cette application web en pure javascript, HTML & CSS à partir des maquettes fournies par l'équipe de design. Je l'ai connecté à l'API du backend ainsi qu'aux différentes blockchains en utilisant le module Web3-JS.",
		tech_stack: ["Node-JS", "Solidity", "Express", "Web3-JS"],
		github: "https://github.com/Perpetual-Altruism-Ltd/myNFT-Bridge",
		screenshots: [
			{
				src: mynftBridgeScreenshot,
				alt: "Screenshot of MyNFT Bridge web app"
			},
			{
				src: mynftBridgeBreadcrumbScreenshot,
				alt: "Screenshot of MyNFT Bridge breadcrumb"
			},
			{
				src: mynftBridgeProgressScreenshot,
				alt: "Screenshot of MyNFT Bridge web app in progress; first step"
			},
			{
				src: mynftBridgeSuccessScreenshot,
				alt: "Screenshot of MyNFT Bridge web app success;"
			}
		]
	},
	{
		title: "NFTisation de noms de domaines",
		gist: "Application web de création et échange de nom de domaines sous forme de NFT et sécurisé par une blockchain",
		proj_desc: "Cette application web est un prototype servant de preuve de concepte technique. J'ai construit le backend de celle-ci, en utilisant l'API du registrar de nom de domaine GoDaddy. Ce projet a été fait en pure javascript, avec Express",
		my_work: "Cette application web est un prototype servant de preuve de concepte technique. J'ai construit le backend de celle-ci, en utilisant l'API du registrar de nom de domaine GoDaddy. Ce projet a été fait en pure javascript, avec Express",
		tech_stack: ["Node-JS", "MongoDB", "Express", "EJS"],
		github: "",
		screenshots: [
			{
				src: domainTokMint,
				alt: "Mint page for domain name tokenization"
			},
			{
				src: domainTokEditDNS,
				alt: "Name server edit for a domain name already under an NFT format"
			},
		]
	},
	{ 
		title: "Mint - MyNFT",
		gist: "Application web de création de NFT",
		proj_desc: "J'ai créé le module de connexion à la plupart des wallet utilisés en dans le monde des crypto monnaies. Et j'ai construit le backend avec Node-JS pour se connecter au frontend fait en pure javascript.",
		my_work: "J'ai créé le module de connexion à la plupart des wallet utilisés en dans le monde des crypto monnaies. Et j'ai construit le backend avec Node-JS pour se connecter au frontend fait en pure javascript.",
		tech_stack: ["Node-JS", "Solidity", "Express", "EJS"],
		github: "",
		screenshots: [
			{
				src: mintWallet,
				alt: "Wallet connection page to MyNFT mint"
			},
			{
				src: mintForm,
				alt: "Form to mint a new NFT"
			},
		]
	},
	{
		title: "Nexchange - Projet perso",
		gist: "Marketplace prototype d'échange de NFT pour des objets de seconde main",
		proj_desc: "J'ai créé cette application web de bout en bout avec Express et Node-JS. L'interface est faite avec le moteur de template EJS, et en javascript pure.",
		my_work: "J'ai créé cette application web de bout en bout avec Express et Node-JS. L'interface est faite avec le moteur de template EJS, et en javascript pure.",
		tech_stack: ["Node-JS", "MongoDB", "Solidity", "Web3-JS", "Express", "EJS"],
		github: "https://github.com/NicolasF-N7/Nexchange",
		screenshots: [
			{
				src: nexchangeHomepage,
				alt: "Nexchange home page"
			},
			{
				src: nexchangeMetamask,
				alt: "Metamask confirmation request for transaction on Nexchange"
			},
		]
	}
]