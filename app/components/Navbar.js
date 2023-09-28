'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../navbar.module.scss'
import { Nobile } from 'next/font/google'

const nobile = Nobile({
  subsets: ['latin'],
  weight: '400',
})
const Navbar = ({ setDarkTheme }) => {
  const [stylesNav, setStylesNav] = useState([])
  const [toggle, setToggle] = useState(true)

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
      <div className={stylesNav.join(' ')}>
        <div onClick={() => setToggle(prev => !prev)} className={styles.toggleButton}></div>
        <ul className={styles.linkList}>
          <Link href="/" className={styles.navLink}><li className={styles.listElement}>Accueil</li></Link>
          <Link href="/uml" className={styles.navLink}><li className={styles.listElement}>UML</li></Link>
          <Link href="/merise" className={styles.navLink}><li className={styles.listElement}>Merise</li></Link>
          <li>
            <div className={styles.toggleSlide} onClick={setDarkTheme}>
              <div className={[styles.themeToggle].join(' ')}></div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar