import React from 'react'
import TopNav from '../../components/common/TopNav/TopNav';
import ProductDetails from '../../components/product/ProductDetails/ProductDetails';
import ProductSidebar from '../../components/product/ProductSidebar/ProductSidebar';
import ProductView from '../../components/product/ProductView/ProductView'
import product1 from "../../public/common/product1.png"


const product = {
  src: product1,
    name: "Duo-tone buildable Foundation",
    type: "50 shades",
    price: "$30",
    images: [product1, product1, product1],
};

const Slug = () => {
  return (
    <>
    <TopNav />
    <div class="container mx-auto">
      <div className="flex gap-10">
      <ProductView product={product}/>
      <ProductSidebar price={product.price}/>
      </div>
      <ProductDetails className="flex gap-12 mt-12"/>
    </div>
    </>
  )
}

export default Slug