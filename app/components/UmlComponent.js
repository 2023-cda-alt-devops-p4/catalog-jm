'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import { elementContext } from '@/context/elementCtx'
import { Nobile } from 'next/font/google'
import styles from '../component.module.scss'

const nobile = Nobile({
  subsets: ['latin'],
  weight: '400',
})

const UmlComponent = ({ item }) => {
  const ratio = 16 / 9
  // import context to change the content of the element div
  const { state, dispatch } = useContext(elementContext)

  return (
    <section id={item.id} className={styles.individualComponent}>
      <div className={styles.descriptionSection}>
        <h3 className={styles.descriptionTitle}>{item.title}</h3>
        <p className={[nobile.className, styles.descriptionContent].join(' ')}>{item.description}</p>
      </div>

        <div className={styles.legendButton} onClick={() => dispatch({ type: 'hydrate', payload: item.elements })}>Montrer la légende</div>
  
      {
        item.example.url !== '' ?
          <>
            <div className={styles.imgExampleContainer}>
              <img
                src={item.example.url}
                alt={item.title}
              />
            </div>
            <p className={[nobile.className].join(' ')}>{item.example.details}</p>
          </>
          : null
      }
    </section>
  )
}

export default UmlComponent