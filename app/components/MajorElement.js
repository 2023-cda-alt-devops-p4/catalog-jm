import React from 'react'
import Link from 'next/link'
import styles from '../page.module.scss'


const MajorElement = ({infos, type}) => {
  return (
    <li key={infos.id}>
    <div className={styles.majorElementDiv}>
      <Link href={`/${type}#${infos.id}`}>
        <p className={styles.majorElementTitle}>{infos.title}</p>
        <p className={styles.majorElementDescription}>{infos.description}</p>
      </Link>
    </div>
  </li>
  )
}

export default MajorElement