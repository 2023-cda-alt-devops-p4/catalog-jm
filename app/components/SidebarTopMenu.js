'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SidebarTopMenu = ({ item }) => {
  const router = usePathname()
  const listMenu = item.map(value => {
    return (
      <li>
        <Link href={`${router}#${value.id}`} key={value.id}>{value.title}</Link>
      </li>
    )
  })

  return (
    <>
      <h3></h3>
      <ul>
        {listMenu}
      </ul>
    </>
  )
}

export default SidebarTopMenu