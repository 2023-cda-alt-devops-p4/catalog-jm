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
  const loopJSON = (setVariable, json) => {
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
    loopJSON(setMajorMerise, merise)
    loopJSON(setMajorUML, uml)
  }, [])

  const showMajorUML = majorUML.map(infos => {
    return (
      <li key={infos.id}>
        <div className={styles.majorElementDiv}>
          <Link href={`/uml#${infos.id}`}>
            <p className={styles.majorElementTitle}>{infos.title}</p>
            <p className={styles.majorElementDescription}>{infos.description}</p>
          </Link>
        </div>
      </li>
    )
  })

  const showMajorMerise = majorMerise.map(infos => {
    return (
      <li key={infos.id}>
        <div className={styles.majorElementDiv}>
          <Link href={`/merise#${infos.id}`}>
            <p className={styles.majorElementTitle}>{infos.title}</p>
            <p className={styles.majorElementDescription}>{infos.description}</p>
          </Link>
        </div>
      </li>
    )
  })
  return (
    <main className={styles.main}>
      <h2 className={[nobile.className, styles.mainTitle].join(' ')}>
        Accueil
      </h2>
      <section className={styles.focus}>
        <h3 className={styles.focusTitle}>Important à connaitre</h3>
        <div className={styles.focusDiv}>
          <div className={styles.focusSubdiv}>
            <h4 className={[nobile.className, styles.focusSubtitle].join(' ')}>Les diagrammes UML</h4>
            <ul>
              {showMajorUML}
            </ul>
          </div>
          <div className={styles.focusSubdiv}>
            <h4 className={[nobile.className, styles.focusSubtitle].join(' ')}>La méthode Merise</h4>
            <ul>
              {showMajorMerise}
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.focus}>
        <h3 className={styles.focusTitle}>Naviguer par catégories</h3>
        <div className={styles.focusDiv}>

          <div className={styles.focusSubdiv}>


            <h4 className={[nobile.className, styles.focusSubtitle].join(' ')}>
              UML
            </h4>
            <div className={styles.majorElementDiv}>
              <Link href="/uml">
                <p className={styles.majorElementTitle}>
                  Ici les différents types de diagrammes UML
                </p>
                <p>voir...</p>
              </Link>
            </div>
          </div>
          <div className={styles.focusSubdiv}>


            <h4 className={[nobile.className, styles.focusSubtitle].join(' ')}>
              Merise
            </h4>
            <div className={styles.majorElementDiv}>
              <Link href="/merise">
                <p className={styles.majorElementTitle}>
                  Ici les différent modèles de la métode Merise
                </p>
                <p>voir...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main >
  )
}
