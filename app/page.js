import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'
import { Nobile } from 'next/font/google'

const nobile = Nobile({
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: 'Mon Catalogue UML : Accueil',
  description: 'CheatSheet UML',
}


export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={[nobile.className].join(' ')}>
        HomePage
      </h2>
      <section className={styles.focus}>
        <h3>Important à connaitre</h3>
        <h4 className={[nobile.className].join(' ')}>Les diagrammes UML</h4>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <h4 className={[nobile.className].join(' ')}>La méthode Merise</h4>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
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
