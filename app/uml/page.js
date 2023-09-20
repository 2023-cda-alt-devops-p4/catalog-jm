import React from 'react'
import styles from '../page.module.scss'
import uml from '../ressources/uml.json'
import UmlComponent from '../components/UmlComponent'

const Uml = () => {
  const umlData = uml.map((item, index) => <UmlComponent item={item} key={index} /> )
  return (
    <main className={styles.main}>
      <h2>
        UML
      </h2>
      {umlData}
    </main>
  )
}

export default Uml