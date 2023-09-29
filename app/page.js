'use client'
import styles from './page.module.scss'
import Link from 'next/link'
import { Nobile } from 'next/font/google'
import uml from './ressources/uml.json'
import merise from './ressources/merise.json'
import { useEffect, useState } from 'react'

const nobile = Nobile({
  subsets: ['latin'],
  weight: '400',
})


export default function Home() {

  const [majorUML, setMajorUML] = useState([])
  const [majorMerise, setMajorMerise] = useState([])

  // function to loop through
  const loopJSON = (setVariable, json, type) => {
    let filter = []
    let result = []
    json.forEach(element => {
      if (element.display) {
        filter = element.display.filter(item => item.major === true)
        filter.forEach(el => {
          result.push(el)
        })
      }
    })
    setVariable(result)
  }

  useEffect(() => {
    loopJSON(setMajorMerise, merise, 'merise')
    loopJSON(setMajorUML, uml, 'uml')
  }, [])

  console.log(majorMerise, majorUML)

  const showMajorUML = majorUML.map(infos => {
    return (
      <li key={infos.id}>
        <div>
          <Link href={`/uml#${infos.id}`}>
            <p>{infos.title}</p>
            <p>{infos.description}</p>
          </Link>
        </div>
      </li>
    )
  })

  const showMajorMerise = majorMerise.map(infos => {
    return (
      <li key={infos.id}>
        <div>
          <Link href={`/merise#${infos.id}`}>
            <p>{infos.title}</p>
            <p>{infos.description}</p>
          </Link>
        </div>
      </li>
    )
  })
  return (
    <main className={styles.main}>
      <h2 className={[nobile.className].join(' ')}>
        HomePage
      </h2>
      <section className={styles.focus}>
        <h3>Important à connaitre</h3>
        <h4 className={[nobile.className].join(' ')}>Les diagrammes UML</h4>
        <ul>
          {showMajorUML}
        </ul>
        <h4 className={[nobile.className].join(' ')}>La méthode Merise</h4>
        <ul>
          {showMajorMerise}
        </ul>
      </section>
      <section className={styles.navCategory}>
        <h3>Naviguer par catégories</h3>
        <Link href="/uml">
          <div className={styles.navCard}>
            <h4 className={[nobile.className].join(' ')}>
              UML
            </h4>
            <p>
              Ici les différents types de diagrammes UML
            </p>
            <p>voir...</p>
          </div>
        </Link>
        <Link href="/merise">
          <div className={styles.navCard}>
            <h4 className={[nobile.className].join(' ')}>
              Merise
            </h4>
            <p>
              Ici la description de la méthode Merise
            </p>
            <p>voir...</p>
          </div>
        </Link>
      </section>
    </main>
  )
}
