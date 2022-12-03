import React from 'react'
import cn from 'clsx'
import s from './ProductTag.module.css'

const ProductTag = ({ variant, className, children }) => {
  return (
    <div className={cn( s.root, s[variant], className )}>
      {children}
    </div>
  )
}

export default ProductTag