import React from 'react'
import styles from '../page.module.scss'
import { Nobile } from 'next/font/google'

const nobile = Nobile({
  subsets: ['latin'],
  weight: '400',
})

const Uml = () => {
  return (
    <main className={styles.main}>
      <h2>
        UML
      </h2>
      <section>
        <h3>Diagramme de classes</h3>
        <h4 className={[nobile.className].join(' ')}>Description</h4>
        <h4 className={[nobile.className].join(' ')}>Les élements</h4>
        <h4 className={[nobile.className].join(' ')}>Exemple</h4>
      </section>
      <section>
        <h3>Diagramme de séquence</h3>
        <h4 className={[nobile.className].join(' ')}>Description</h4>
        <h4 className={[nobile.className].join(' ')}>Les élements</h4>
        <h4 className={[nobile.className].join(' ')}>Exemple</h4>
      </section>
      <section>
        <h3>Diagramme de cas d'utilisation</h3>
        <h4 className={[nobile.className].join(' ')}>Description</h4>
        <h4 className={[nobile.className].join(' ')}>Les élements</h4>
        <h4 className={[nobile.className].join(' ')}>Exemple</h4>
      </section>
    </main>
  )
}

export default Uml