import React from 'react'
import SidebarTopMenu from './SidebarTopMenu'

const Sidebar = ({item}) => {

  const sideNavigation = item.map(value => {
    return (
      <>
        <h3>{value.type}</h3>
        <SidebarTopMenu item={value.display}/>
      </>
    )
  })
  return (
    <nav>
      {sideNavigation}
  </nav>
  )
}

export default Sidebar