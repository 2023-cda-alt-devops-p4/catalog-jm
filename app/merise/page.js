import React from 'react'
import styles from '../page.module.scss'
import merise from '../ressources/merise.json'
import Sidebar from '../components/Sidebar'
import UmlDisplay from '../components/UmlDisplay'
import ElementList from '../components/ElementList'

const Merise = () => {
  const displayModels = merise.map((value, index) => {
    return (
      <UmlDisplay item={value} key={index} />
    )
  })
  return (
    <main className={styles.main}>
      <Sidebar item={merise} />
      <section>
        <h2>
          UML
        </h2>
        {displayModels}
      </section>
      <ElementList />
    </main>
  )
}

export default Merise