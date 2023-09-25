import React from 'react'
import styles from '../page.module.scss'
import uml from '../ressources/uml.json'
import UmlComponent from '../components/UmlComponent'
import Link from 'next/link'

const Uml = () => {
  const umlData = uml.map((item, index) => <UmlComponent item={item} key={index} />)
  return (
    <main className={styles.main}>
      <nav>
        <ul>
          {
            uml.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={`#${item.id}`}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
      <section>
        <h2>
          UML
        </h2>
        {umlData}
      </section>
    </main>
  )
}

export default Uml