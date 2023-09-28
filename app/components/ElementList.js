'use client'
import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import { elementContext } from '@/context/elementCtx'
import styles from '../element.module.scss'

import ElementImage from './ElementImage'

const ElementList = () => {

  const { state, dispatch } = useContext(elementContext)
  const [explanation, setExplanation] = useState('Cliquez sur un élément pour sa définition')
  const [stylesExplanation, setStylesExplanation] = useState([styles.elementDisplay])

  useEffect(() => {
    if (state.length === 0) {
      setStylesExplanation([styles.elementDisplay, styles.isHidden])
    } else {
      setStylesExplanation([styles.elementDisplay])
    }
    console.log(stylesExplanation);
  }, [state])

  const elementImage = state.map((el, i) => {
    return (
      <div key={i}>
        {
          el.url !== '' ?
            <ElementImage item={el} explanation={setExplanation} />
            : null
        }
      </ div>
    )
  })


  return (
    <div className={stylesExplanation.join(' ')}>
      <div className={styles.explanationCloseButton} onClick={() => {
        dispatch({type:'init'})
        setExplanation('Cliquez sur un élément pour sa définition')
        }}>X</div>
      <div className={styles.explanationFrame}>{explanation}</div>
      <div className={styles.elementContainer}>
        {elementImage}
      </div>

    </div>
  )
}

export default ElementList