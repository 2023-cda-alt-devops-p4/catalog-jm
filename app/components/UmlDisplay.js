import React from 'react'
import UmlComponent from './UmlComponent'

const UmlDisplay = ({item}) => {
  const umlData = item.display.map((item, index) => {
    return (

      <UmlComponent item={item} key={index} />
    )
})

  return (
    <div>
      <h3>
        {item.type}
      </h3>
      {umlData}
    </div>
  )
}

export default UmlDisplay