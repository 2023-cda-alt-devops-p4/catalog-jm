'use client'
import React from 'react'
import { useContext } from 'react'
import { elementContext } from '@/context/elementCtx'

import ElementImage from './ElementImage'

const ElementList = () => {

  const { state } = useContext(elementContext)

  const elementImage = state.map((el, i) => {
    return (
      <div key={i}>
        {
          el.url !== '' ?
            <ElementImage item={el} />
            : null
        }
      </ div>
    )
  })

  return (
    <div>
      {elementImage}
    </div>
  )
}

export default ElementList