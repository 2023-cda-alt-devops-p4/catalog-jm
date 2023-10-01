import React from 'react'
import { Nobile } from 'next/font/google'
import styles from '../component.module.scss'
import ShowLegendButton from './ShowLegendButton'

const nobile = Nobile({
  subsets: ['latin'],
  weight: '400',
})

const UmlComponent = ({ item }) => {

  return (
    <section id={item.id} className={styles.individualComponent}>
      <div className={styles.descriptionSection}>
        <h3 className={styles.descriptionTitle}>{item.title}</h3>
        <p className={[nobile.className, styles.descriptionContent].join(' ')}>{item.description}</p>
      </div>
      {
        item.elements.length < 1 ?
        null
        :
        <ShowLegendButton elements={item.elements} />
      }
      {
        item.example.url !== '' ?
          <>
            <div className={styles.imgExampleContainer}>
              <img
                src={item.example.url}
                alt={item.title}
              />
            <p className={[nobile.className].join(' ')}>{item.example.details}</p>
            </div>
          </>
          : null
      }
    </section>
  )
}

export default UmlComponent