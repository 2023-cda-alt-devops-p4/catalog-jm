'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React,{useState} from 'react'
import styles from '../diagram.module.scss'
import { useContext } from 'react'
import { clickContext } from '@/context/clickCtx'

const SidebarTopMenu = ({ item }) => {
  const router = usePathname()
  const { state, dispatch } = useContext(clickContext)
  const listMenu = item.map(value => {
    return (
      <Link href={`${router}#${value.id}`} className={styles.modelLink} key={value.id} onClick={() => {
        dispatch({type:'click', payload: value.id})
        }}>
      <li className={value.id === state ?[styles.modelListElement, styles.isSelected].join(' ') : [styles.modelListElement].join(' ')}>
        {value.title}
      </li>
      </Link>
    )
  })

  return (
    <>
      <ul className={styles.modelList}>
        {listMenu}
      </ul>
    </>
  )
}

export default SidebarTopMenu