// import { Button } from "@chakra-ui/react";
import { useState, Children } from "react";
import ProductCard from "../components/product/ProductCard";
import ProductDetails from "../components/product/ProductDetails/ProductDetails";
import ProductTag from "../components/product/ProductTag";
import ProductView from "../components/product/ProductView";
import Button from "../components/ui/Button";
import Counter from "../components/ui/Counter/Counter";
import Grid from "../components/ui/Grid";
import product1 from "../public/landing page/product1.png";
import product2 from "../public/landing page/product2.png";
import product3 from "../public/landing page/product3.png";

const product = {
  src: product1,
  name: "Duo-tone buildable Foundation",
  type: "50 shades",
  price: "$30",
};

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

export default function Storybook() {
  // const [products, setProducts] = useState([])

  return (
    <>
    <ProductDetails />
    <ProductTag variant="run-low">Running Low</ProductTag>
    <ProductTag variant="best-sell">Best Seller</ProductTag>
    <ProductView product={products[0]} />
      <Grid>
        {products.map((product) => (
          <div className="border">
            <ProductCard product={product} variant="large" />
          </div>
        ))}
      </Grid>
      <Grid>
        <ProductCard variant="large" product={product} />
        <ProductCard variant="medium" product={product} />
        <ProductCard variant="medium" product={product} />
        <ProductCard variant="medium" product={product} />
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
