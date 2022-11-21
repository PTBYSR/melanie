import React from 'react'
import s from './Grid.module.css'


const Grid = ({
    children
}) => {
  return (
    <div className={s.root}>
        {children}
    </div>
  )
}

export default Grid