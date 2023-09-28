'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../navbar.module.scss'
import { Nobile } from 'next/font/google'

const nobile = Nobile({
  subsets: ['latin'],
  weight: '400',
})
const Navbar = ({ darkTheme, setDarkTheme }) => {
  const [stylesNav, setStylesNav] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if (toggle) {
      setStylesNav([styles.linkContainer, styles.isHidden])
    } else {
      setStylesNav([styles.linkContainer])
    }
  }, [toggle])

  return (
    <nav className={styles.navbar}>
      <h1 className={[nobile.className, styles.mainTitle].join(' ')}>UML et Merise</h1>
      <div  className={stylesNav.join(' ')}>
      <div onClick={() => setToggle(prev => !prev)} className={styles.toggleButton}></div>
        <ul className={styles.linkList}>
          <li className={styles.listElement}><Link href="/" className={styles.navLink}>Accueil</Link></li>
          <li className={styles.listElement}><Link href="/uml" className={styles.navLink}>UML</Link></li>
          <li className={styles.listElement}><Link href="/merise" className={styles.navLink}>Merise</Link></li>
          <li className={[styles.themeToggle].join(' ')}>
            <p  className={styles.toggleText} onClick={setDarkTheme}>{darkTheme}</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar