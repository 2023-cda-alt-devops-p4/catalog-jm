'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../navbar.module.scss'
import { Nobile } from 'next/font/google'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'

const nobile = Nobile({
  subsets: ['latin'],
  weight: '400',
})
const Navbar = () => {
  const [stylesNav, setStylesNav] = useState([])
  const [toggle, setToggle] = useState(true)
  const { theme, setTheme } = useTheme()

  const path = usePathname()
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
          <li><Link href="/" className={styles.navLink}><div className={path === "/" ? styles.isSelected : styles.listElement}>Accueil</div></Link></li>
          <li><Link href="/uml" className={styles.navLink}><div className={path === "/uml" ? styles.isSelected : styles.listElement}>UML</div></Link></li>
          <li><Link href="/merise" className={styles.navLink}><div className={path === "/merise" ? styles.isSelected : styles.listElement}>Merise</div></Link></li>
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