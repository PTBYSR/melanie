import React from 'react'
import ProductSlider from '../components/product/ProductView'
import product1 from "../public/landing page/product1.png";
import product2 from "../public/landing page/product2.png";
import product3 from "../public/landing page/product3.png";

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