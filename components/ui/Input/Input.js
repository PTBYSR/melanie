import React from 'react'
import s from './Input.module.css'
import cn from 'clsx'

const Input = ({ className }) => {
  return (
    <input 
        className={cn(s.root, className)}
        placeholder="Email"
    />

  )


}

export default Input