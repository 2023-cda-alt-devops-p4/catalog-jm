'use client'
import React, { useState, useEffect } from 'react'
import styles from '../diagram.module.scss'
import SidebarTopMenu from './SidebarTopMenu'

const Sidebar = ({ item }) => {
  const [stylesNav, setStylesNav] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if (toggle) {
      setStylesNav([styles.sidebarNav, styles.menuHidden])
    } else {
      setStylesNav([styles.sidebarNav])
    }
  }, [toggle])


  const sideNavigation = item.map(value => {
    return (
      <div className={styles.sidebarSection}>
        <h3 className={styles.sectionTitle}>{value.type}</h3>
        <SidebarTopMenu item={value.display} />
      </div>
    )
  })
  return (
    <nav className={stylesNav.join(' ')}>
      <div onClick={() => setToggle(prev => !prev)} className={styles.toggleButton}></div>
      {sideNavigation}
    </nav>
  )
}

export default Sidebar