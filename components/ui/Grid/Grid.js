import React from 'react'
import s from './Grid.module.css'
import cn from 'clsx'


const Grid = ({
    children,
    className
}) => {
  return (
    <div className={cn(s.root, className)}>
        {children}
    </div>
  )
}

export default Grid