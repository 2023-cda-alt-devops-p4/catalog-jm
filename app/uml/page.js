import React from 'react'
import styles from '../page.module.scss'

const Uml = () => {
  return (
    <main className={styles.main}>
      <h2>
        UML
      </h2>
      <section>
        <h3>Diagramme de classes</h3>
        <h4>Description</h4>
        <h4>Les élements</h4>
        <h4>Exemple</h4>
      </section>
      <section>
        <h3>Diagramme de séquence</h3>
        <h4>Description</h4>
        <h4>Les élements</h4>
        <h4>Exemple</h4>
      </section>
      <section>
        <h3>Diagramme de cas d'utilisation</h3>
        <h4>Description</h4>
        <h4>Les élements</h4>
        <h4>Exemple</h4>
      </section>
    </main>
  )
}

export default Uml