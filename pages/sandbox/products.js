import React from 'react'
import commerce from "../../lib/commerce";
import ProductList from "../../components/sandbox/ProductList";
import Image from 'next/image';

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}

export default function ProductsPage({ products }) {
    // console.log(products)
  return (
    <React.Fragment>
      <h1>Products</h1>
        <Image src={products[2].image.url} width={products[2].image.image_dimensions.width} height={products[2].image.image_dimensions.height}/>
      <ProductList products={products} />
    </React.Fragment>
  );
}