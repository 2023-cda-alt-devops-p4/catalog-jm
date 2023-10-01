import React from 'react'
import UmlComponent from './UmlComponent'
import styles from '../component.module.scss'


const UmlDisplay = ({item}) => {
  const umlData = item.display.map((item, index) => {
    return (
      <UmlComponent item={item} key={index} />
    )
})
  return (
    <div className={styles.componentDisplay}>
      <h3 className={styles.componentTitle}>
        {item.type}
      </h3>
      {umlData}
    </div>
  )
}

export default UmlDisplay