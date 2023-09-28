import React from 'react'
import { Nobile } from 'next/font/google'
import styles from '../element.module.scss'
const nobile = Nobile({
  subsets: ['latin'],
  weight: '400',
})

const ElementImage = ({ item, explanation }) => {

  return (
    <div className={styles.individualElement}>
      <div className={styles.imgElementContainer} onClick={() => { explanation(item.explanation) }}>
        <img
          className={styles.imageElement}
          src={item.url}
          alt={item.name}
        />
      </div>
      <p className={[nobile.className].join(' ')}>{item.name}</p>
    </div>
  )
}

export default ElementImage