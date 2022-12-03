import React from 'react'
import s from './Input.module.css'
import cn from 'clsx'

const Input = ({ className, placeholder, variant }) => {
  return (
    <input 
        className={cn(s.root, className, s[variant])}
        placeholder={placeholder}
    />

  )


}

export default Input