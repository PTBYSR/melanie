import React from 'react'
import ProductSlider from '../components/product/ProductView'

export const products = [
  {
    src: product1,
    name: "Duo-tone buildable Foundation",
    type: "50 shades",
    price: "$30",
    images: [product1, product1, product1],
  },
  {
    src: product2,
    name: "Generation Z",
    type: "20 shades",
    price: "$28",
  },
  {
    src: product3,
    name: "Cream blush & Highlight Duo",
    type: "48 shades",
    price: "$28",
  },
];


const productview = () => {
  return (
    <div>
      <ProductSlider products={products}/>
    </div>
  )
}

export default productview