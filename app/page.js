import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>
        HomePage
      </h2>
      <section>
        <h3>Important à connaitre</h3>
        <h4>Les diagrammes UML</h4>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <h4>La méthode Merise</h4>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </section>
      <section>
        <h3>Naviguer par catégories</h3>
        <Link href="/uml">
        <div>
          <h4>
            UML
          </h4>
          <p>
            Ici les différents types de diagrammes UML
          </p>
          <p>voir...</p>
        </div>
        </Link>
        <Link href="/merise">
        <div>
          <h4>
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
