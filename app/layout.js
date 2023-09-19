import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.scss'
import { Metrophobic } from 'next/font/google'

const metrophobic = Metrophobic({
  subsets: ['latin'],
  weight: '400',
})


export const metadata = {
  title: 'Mon Catalogue UML',
  description: 'CheatSheet UML',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={metrophobic.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
