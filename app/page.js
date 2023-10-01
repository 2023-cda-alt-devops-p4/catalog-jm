import styles from './page.module.scss'
import Link from 'next/link'
import { Nobile } from 'next/font/google'
import uml from './ressources/uml.json'
import merise from './ressources/merise.json'
import MajorElement from './components/MajorElement'

const nobile = Nobile({
  subsets: ['latin'],
  weight: '400',
})


export default function Home() {
  // function to loop through
  const loopJSON = (json, route) => {
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
    return result.map(infos => {
      return (
        <MajorElement key={infos.id} infos={infos} type={route} />
      )
    })
  }


  const showMajorUML = loopJSON(uml, 'uml')
  const showMajorMerise =loopJSON(merise,'merise')

  return (
    <main className={styles.main}>
      <h2 className={[nobile.className, styles.mainTitle].join(' ')}>
        Accueil
      </h2>
      <div className={styles.presentationHomepage}>
      <p>Vous êtes sur un catalogue résumant les différents diagrammes UML ainsi que la méthode Merise.</p>
      <p>Pour chaque diagramme ou modèle, vous pourrez voir un exemple d'utilisation ainsi que les différents éléments pouvant être utilisés pour les créer, accompagner d'une explication.</p>
      </div>
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
    </main >
  )
}
