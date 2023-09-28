import React from 'react'
import { Nobile } from 'next/font/google'
import Image from 'next/image'
const nobile = Nobile({
  subsets: ['latin'],
  weight: '400',
})

const ElementImage = ({item}) => {
  const ratio = 16 / 9

  return (
    <div>
      <p className={[nobile.className].join(' ')}>{item.name}</p>
      <Image
        src={item.url}
        width={150}
        height={200 / ratio}
        alt={item.name}
      />
      <p>{item.explanation}</p>
    </div>
  )
}

export default ElementImage