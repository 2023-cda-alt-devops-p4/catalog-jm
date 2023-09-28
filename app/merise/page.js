'use client'
import React from 'react'
import styles from '../diagram.module.scss'
import merise from '../ressources/merise.json'
import Sidebar from '../components/Sidebar'
import UmlDisplay from '../components/UmlDisplay'
import ElementList from '../components/ElementList'
import { ClickContextProvider } from '@/context/clickCtx'
const Merise = () => {
  const displayModels = merise.map((value, index) => {
    return (
      <UmlDisplay item={value} key={index} />
    )
  })
  return (
    <ClickContextProvider>
    <main className={styles.main}>
      <Sidebar item={merise} />
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>
          MERISE
        </h2>
        {displayModels}
      </section>
      <ElementList />
    </main>
    </ClickContextProvider>
  )
}

export default Merise