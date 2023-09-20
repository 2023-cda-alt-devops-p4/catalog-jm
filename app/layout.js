'use client'
import { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.scss'
import { Metrophobic } from 'next/font/google'

const metrophobic = Metrophobic({
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout({ children }) {

  const [darkTheme, setDarkTheme] = useState('dark')
  console.log(darkTheme);
  return (
    <html lang="fr">
      <body className={metrophobic.className} data-theme-ui={darkTheme}>
        <Navbar darkTheme={darkTheme} setDarkTheme={()=> setDarkTheme(prev => prev === 'light' ? 'dark': 'light')} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
