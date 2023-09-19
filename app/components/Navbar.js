import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/uml">UML</Link></li>
        <li><Link href="/merise">Merise</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar