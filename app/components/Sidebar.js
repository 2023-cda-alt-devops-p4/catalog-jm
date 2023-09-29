'use client'
import React, { useState, useEffect } from 'react'
import styles from '../diagram.module.scss'
import SidebarTopMenu from './SidebarTopMenu'

const Sidebar = ({ item }) => {
  const [stylesNav, setStylesNav] = useState([])
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    if (toggle) {
      setStylesNav([styles.sidebarNav, styles.menuHidden])
    } else {
      setStylesNav([styles.sidebarNav])
    }
  }, [toggle])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const sideNavigation = item.map((value, index) => {
    return (
      <div className={styles.sidebarSection} key={index}>
        <h3 className={styles.sectionTitle}>{value.type}</h3>
        <SidebarTopMenu item={value.display} />
      </div>
    )
  })
  return (
    <nav className={stylesNav.join(' ')}>
      <div onClick={() => setToggle(prev => !prev)} className={styles.toggleButton}><p className={styles.toggleText}>Choisir</p></div>
      <div className={styles.allSections}>
      {sideNavigation}
      <div className={styles.toTopButton} onClick={()=> scrollToTop()}>To the Top ^</div>
      </div>
    </nav>
  )
}

export default Sidebar