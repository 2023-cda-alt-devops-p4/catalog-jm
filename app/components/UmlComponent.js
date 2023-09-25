import React from 'react'
import { Nobile } from 'next/font/google'


const nobile = Nobile({
  subsets: ['latin'],
  weight: '400',
})

const UmlComponent = ({item}) => {
  return (
    <section id={item.id}>
      <h3>{item.title}</h3>
      <h4 className={[nobile.className].join(' ')}>{item.description}</h4>
      {item.elements.map((el, i) => {
        return (
          <div key={i}>
            <h4 className={[nobile.className].join(' ')}>{el.name}</h4>
            <p>{el.url}</p>
          </div>
        )
      })}
      <h4 className={[nobile.className].join(' ')}>{item.example.details}</h4>
      <p>{item.example.url}</p>
    </section>
  )
}

export default UmlComponent