import React from 'react'
import s from './Button.module.css'
import clsx from 'clsx'
import cn from 'clsx'


const Button = (props) => {
  const { children, variant, type, className } = props
  const Component = 'button'
  return (
    <Component className={cn(s["root"], s[variant], s[type], className)}>
        {children}
    </Component>
  )
}

export default Button