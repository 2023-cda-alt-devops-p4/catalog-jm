import React from 'react'
import styles from '../footer.module.scss'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className={styles.footer}>

      <p>&copy;Jonathan Moreschi</p>
      <div className={styles.sources}>
        <h3>Sources : </h3>
        <Link href={'https://www.uml-diagrams.org/'} target='_blank'>Documentation UML</Link>
        <Link href={'https://www.youtube.com/playlist?list=PL6JepipuvDNKiH_epQq7ZcfWERsyxoGDJ'} target='_blank'>Playlist youtube F.BAURAND</Link>
        <Link href={'https://cours-ofppt.weebly.com/uploads/1/3/0/8/13086652/merise.pdf'} target='_blank'>Cours MERISE S.ELACHOURI</Link>
      </div>
    </footer>
  )
}

export default Footer