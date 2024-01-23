import hestauScreenshot from '/public/images/projects_media/hestau-720.png'
import hestauArtistesScreenshot from '/public/images/projects_media/hestau-artistes-720.png'
import hestauDescriptionScreenshot from '/public/images/projects_media/hestau-description-720.png'
import hestauProgrammeScreenshot from '/public/images/projects_media/hestau-programme-720.png'

import mynftBridgeScreenshot from '/public/images/projects_media/mynft-bridge/MyNFT-Bridge-720.png'
import mynftBridgeProgressScreenshot from '/public/images/projects_media/mynft-bridge/bridge-progress-720.png'
import mynftBridgeBreadcrumbScreenshot from '/public/images/projects_media/mynft-bridge/mynft-bridge-breadcrumb-720.png'
import mynftBridgeSuccessScreenshot from '/public/images/projects_media/mynft-bridge/mynft-bridge-mig-success-720.png'

import nexchangeHomepage from '/public/images/projects_media/nexchange/homepage-720.png'
import nexchangeMetamask from '/public/images/projects_media/nexchange/metamask.png'

import mintWallet from '/public/images/projects_media/mynft-mint/wallet-connection.png'
import mintForm from '/public/images/projects_media/mynft-mint/form.png'

import domainTokMint from '/public/images/projects_media/mynft-domain-tokenization/mint-domain.png'
import domainTokEditDNS from '/public/images/projects_media/mynft-domain-tokenization/dns-edit.png'

import islaPriceScraper from '/public/images/projects_media/isla-price-scraper/price-scraper.png'

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
- ISLA - Isla github marketplaces prices (frontend + scraper)
- ISLA Prices, visibility, popularity scraper
- ISLA Vinted auto post
- LBC Price extractor extension
- Hestau
- Portfolio

Mapping array to easily change projects order?
*/


export const portfolio_proj_data = [
	{ 
		title: "Agrégateur de prix de marketplaces - ISLA",
		gist: "Script récupérant les prix de vêtements sur des marketplaces de seconde main",
		desc: "Ce projet est un MVP qui avait pour but de récupérer les données des prix des vêtements ainsi que leurs caractéristiques pour pouvoir proposer un outil de prédiction / suggestion de prix pour les habits usagés selon leur valeur sur le marché de la seconde main. Seul le backend a été travaillé. Il a été fait avec Node-JS et Express.",
		tech_stack: ["Node-JS", ""],
		github: ["https://github.com/ISLA-Tech/Marketplace_prices_frontend/tree/main"],
		screenshots: [
			{
				src: islaPriceScraper,
				alt: "Web application to scrape prices from second hand garments on several marketplaces"
			},
		]
	},
	{ 
		title: "Bridge - MyNFT",
		gist: "Application web permettant de transférer des NFT entre différentes blockchains",
		desc: "J'ai créé le frontend de cette application web en pure javascript à partir des maquettes fournies par l'équipe de design. Je l'ai connecté à l'API du backend ainsi qu'aux différentes blockchains utilisées en utilisant le module Web3-JS.",
		tech_stack: ["Node-JS", "Solidity"],
		github: ["https://github.com/Perpetual-Altruism-Ltd/myNFT-Bridge"],
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
		title: "Festival de musique - Hestau",
		gist: "Site de présentation du festival pour améliorer sa visibilité en ligne. Site de présentation du festival pour améliorer sa visibilité en ligne. Site de présentation du festival pour améliorer sa visibilité en ligne.",
		github: [""],
		screenshots: [
			{
				src: hestauScreenshot,
				alt: "Hestau festival project screenshot"
			},
			{
				src: hestauArtistesScreenshot,
				alt: "Hestau festival screenshot of artist section"
			},
			{
				src: hestauDescriptionScreenshot,
				alt: "Hestau festival screenshot of description section"
			},
			{
				src: hestauProgrammeScreenshot,
				alt: "Hestau festival screenshot of planning section"
			}

		],
	},
	{
		title: "NFTisation de noms de domaines",
		gist: "Application web de création et échange de nom de domaines sous forme de NFT et sécurisé par une blockchain",
		desc: "Cette application web est un prototype servant de preuve de concepte technique. J'ai construit le backend de celle-ci, en utilisant l'API du registrar de nom de domaine GoDaddy. Ce projet a été fait en pure javascript, avec Express",
		tech_stack: ["Node-JS", "MongoDB"],
		github: [""],
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
		desc: "J'ai créé le module de connexion à la plupart des wallet utilisés en dans le monde des crypto monnaies. Et j'ai construit le backend avec Node-JS pour se connecter au frontend fait en pure javascript.",
		tech_stack: ["Node-JS", "Solidity"],
		github: [],
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
		desc: "J'ai créé cette application web de bout en bout avec Express et Node-JS. L'interface est faite avec le moteur de template EJS, et en javascript pure.",
		tech_stack: ["Node-JS", "MongoDB", "Solidity"],
		github: ["https://github.com/NicolasF-N7/Nexchange"],
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
	},
	{ 
		title: "",
		gist: "",
		desc: "",
		tech_stack: ["", ""],
		github: [""],
		screenshots: [
			{
				src: mynftBridgeScreenshot,
				alt: ""
			},
		]
	}
]