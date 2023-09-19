import Link from 'next/link'
import React from 'react'
import { Nobile } from 'next/font/google'

const nobile = Nobile({
  subsets: ['latin'],
  weight: '400',
})
const Navbar = () => {
  return (
    <nav>
      <h1 className={[nobile.className].join(' ')}>UML et Merise</h1>
      <ul>
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/uml">UML</Link></li>
        <li><Link href="/merise">Merise</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar