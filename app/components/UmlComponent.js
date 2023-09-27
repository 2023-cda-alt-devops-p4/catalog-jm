import React from 'react'
import { Nobile } from 'next/font/google'
import Image from 'next/image'

const nobile = Nobile({
  subsets: ['latin'],
  weight: '400',
})

const UmlComponent = ({ item }) => {
  const ratio = 16/9
  const elementImage = item.elements.map((el, i) => {
    return (
      <div key={i}>
        <p className={[nobile.className].join(' ')}>{el.name}</p>
        <Image
          src={el.url}
          width={150}
          height={200 / ratio}
          alt={el.name}
        />
        <p>{el.explanation}</p>
      </div>
    )
  })
  return (
    <section id={item.id}>
      <div>
        <h3>{item.title}</h3>
        <h4 className={[nobile.className].join(' ')}>{item.description}</h4>
      </div>
      <div>
        {elementImage}
      </div>
      <div>
        <p>{item.example.url}</p>
        <p className={[nobile.className].join(' ')}>{item.example.details}</p>
      </div>
    </section>
  )
}

export default UmlComponent