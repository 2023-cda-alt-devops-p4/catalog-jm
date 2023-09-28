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
      <div>
        <h3>{item.title}</h3>
        <h4 className={[nobile.className].join(' ')}>{item.description}</h4>
      </div>
      <div>
        <div onClick={() => dispatch({ type: 'hydrate', payload: item.elements })}>Montrer la légende</div>
      </div>
      {
        item.example.url !== '' ?
          <>
            <div className={styles.imgExample}>
              <Image
                src={item.example.url}
                fill
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