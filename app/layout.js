import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.scss'
import { Metrophobic } from 'next/font/google'
import { ElementContextProvider } from '@/context/elementCtx'
import { Providers } from '@/context/themeProviders'
const metrophobic = Metrophobic({
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout({ children }) {

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={metrophobic.className}>
        <Navbar />
        <Providers>
          <ElementContextProvider>
            {children}
          </ElementContextProvider>
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
