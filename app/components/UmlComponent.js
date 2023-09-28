'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import { elementContext } from '@/context/elementCtx'
import { Nobile } from 'next/font/google'

const nobile = Nobile({
  subsets: ['latin'],
  weight: '400',
})

const UmlComponent = ({ item }) => {
  const ratio = 16 / 9
  // import context to change the content of the element div
  const {state, dispatch} = useContext(elementContext)

  return (
    <section id={item.id}>
      <div>
        <h3>{item.title}</h3>
        <h4 className={[nobile.className].join(' ')}>{item.description}</h4>
      </div>
      <div>
        <div onClick={() => dispatch({type:'hydrate', payload: item.elements})}>Montrer la légende</div>

      </div>
      {
        item.example.url !== '' ?
          <div>
            <Image
              src={item.example.url}
              width={400}
              height={400 / ratio}
              alt={item.title}
            />
            <p className={[nobile.className].join(' ')}>{item.example.details}</p>
          </div>
          : null
      }
    </section>
  )
}

export default UmlComponent