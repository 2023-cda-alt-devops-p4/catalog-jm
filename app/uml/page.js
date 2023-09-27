import React from 'react'
import styles from '../page.module.scss'
import uml from '../ressources/uml.json'
import Sidebar from '../components/Sidebar'
import UmlDisplay from '../components/UmlDisplay'

const Uml = () => {
  const displayDiagrams = uml.map((value, index) => {
    return (
      <UmlDisplay item={value} key={index} />
    )
  })
  return (
    <main className={styles.main}>
      <Sidebar item={uml} />
      <section>
        <h2>
          UML
        </h2>
        {displayDiagrams}
      </section>
    </main>
  )
}

export default Uml