import React from 'react'
import s from './Button.module.css'
import clsx from 'clsx'
import cn from 'clsx'


const Button = (props) => {
  const { children, variant, type, className, style } = props
  const Component = 'button'
  return (
    <Component className={cn(className, ["root"], s[variant], s[type])}>
        {children}
    </Component>
  )
}

export default Button