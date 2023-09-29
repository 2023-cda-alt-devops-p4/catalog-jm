'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../navbar.module.scss'
import { Nobile } from 'next/font/google'
import { useTheme } from 'next-themes'

const nobile = Nobile({
  subsets: ['latin'],
  weight: '400',
})
const Navbar = () => {
  const [stylesNav, setStylesNav] = useState([])
  const [toggle, setToggle] = useState(true)
  const { theme, setTheme } = useTheme()

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
        <div onClick={() => setToggle(prev => !prev)} className={styles.toggleButton}><p className={styles.toggleText}>Menu</p></div>
        <ul className={styles.linkList}>
          <li className={styles.navLink}><Link href="/" className={styles.listElement}>Accueil</Link></li>
          <li className={styles.navLink}><Link href="/uml" className={styles.listElement}>UML</Link></li>
          <li className={styles.navLink}><Link href="/merise" className={styles.listElement}>Merise</Link></li>
          <li>
            <div className={styles.toggleSlide} onClick={() => { theme === 'light' ? setTheme('dark') : setTheme('light') }}>
              <div className={[styles.themeToggle].join(' ')}></div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar