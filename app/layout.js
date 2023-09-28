'use client'
import { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.scss'
import { Metrophobic } from 'next/font/google'
import { ElementContextProvider } from '@/context/elementCtx'
const metrophobic = Metrophobic({
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout({ children }) {

  const [darkTheme, setDarkTheme] = useState('dark')

  return (
    <html lang="fr">
      <body className={metrophobic.className} data-theme-ui={darkTheme}>
        <ElementContextProvider>
          <Navbar darkTheme={darkTheme} setDarkTheme={() => setDarkTheme(prev => prev === 'light' ? 'dark' : 'light')} />
          {children}
          <Footer />
        </ElementContextProvider>
      </body>
    </html>
  )
}
