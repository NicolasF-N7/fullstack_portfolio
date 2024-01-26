import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './components/navigation'
import Header from './components/header'
import Footer from './components/footer'
import {Providers} from "./providers";
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        {/*Providers is a wrapper to use NextUI*/}
        <Providers>
          <Header />

          <div className=" flex">
            <Navigation />
            <div className="main-content-container flex-1 bg-sandSecondary">
              {children}
            </div>
          </div>

          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
