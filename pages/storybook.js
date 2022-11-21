// import { Button } from "@chakra-ui/react";
import { useState, Children } from 'react'
import ProductCard from "../components/product/ProductCard";
import ProductView from "../components/product/ProductView";
import Button from "../components/ui/Button";
import Counter from "../components/ui/Counter/Counter";
import Grid from "../components/ui/Grid";
import product1 from '../public/product1.png'

const product = {
  src: product1,
  name: "Duo-tone buildable Foundation",
  type: "50 shades",
  price: "$30",
}

export const products = [
  {
    src: product1,
    name: "Duo-tone buildable Foundation",
    type: "50 shades",
    price: "$30",
    images: [
      product1,
      product1,
      product1,
    ]
  },
  {
    src: product1,
    name: "Duo-tone buildable Foundation",
    type: "50 shades",
    price: "$30",
  },
  {
    src: product1,
    name: "Duo-tone buildable Foundation",
    type: "50 shades",
    price: "$30",
  }
]

export default function Storybook() {
  // const [products, setProducts] = useState([])

  return (
    <>
      <ProductView product={products[0]}/>
      <Grid >
        {
          products.map((product) => (
            <div className="border">
              <ProductCard product={product} variant="large" />
            </div>
          ))
        }
      </Grid>
      <Grid>
      <ProductCard variant="large" product={product}/>
      <ProductCard variant="medium" product={product}/>
      <ProductCard variant="medium" product={product}/>
      <ProductCard variant="medium" product={product}/>
      </Grid>
      <Counter />
      {/* <Button /> */}
      <Button variant="primary" type="w-m">
        Load more
      </Button>
      <Button variant="primary" type="w-xl">
        Add to Bag 
      </Button>
      <Button variant="hybrid" type="w-xl">
        Load more
        <div>30$</div>
      </Button>
      <Button variant="cart" type="w-m">
        Load more
        <div>30$</div>
      </Button>
    </>
  );
}
