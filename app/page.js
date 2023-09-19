import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
        HomePage
      </h1>
      <section>
        <h2>Important à connaitre</h2>
        <h3>Les diagrammes UML</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <h3>La méthode Merise</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </section>
      <section>
        <h2>Naviguer par catégories</h2>
        <Link href="/uml">
        <div>
          <h3>
            UML
          </h3>
          <p>
            Ici les différents types de diagrammes UML
          </p>
          <p>voir...</p>
        </div>
        </Link>
        <Link href="/merise">
        <div>
          <h3>
            Merise
          </h3>
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
