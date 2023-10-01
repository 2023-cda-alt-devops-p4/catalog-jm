'use client'
import React, { useContext } from 'react'
import { elementContext } from '@/context/elementCtx'
import styles from '../component.module.scss'

const ShowLegendButton = ({ elements }) => {

  // import context to change the content of the element div
  const { state, dispatch } = useContext(elementContext)
  return (
      <div className={styles.legendButton} onClick={() => dispatch({ type: 'hydrate', payload: elements })}>Montrer la légende</div>

  )
}

export default ShowLegendButton