import React from "react";
import Layout from "../../components/layouts/Layout";
import ProductCard from "../../components/product/ProductCard/ProductCard";
import BreadCrumb from "../../components/ui/BreadCrumb";
import Grid from "../../components/ui/Grid/Grid";
import product1 from "../../public/landing page/product1.png";
import product2 from "../../public/landing page/product2.png";
import product3 from "../../public/landing page/product3.png";
import { useRouter } from "next/router";
import FilterBox from "../../components/ui/FilterBox";
import Button from "../../components/ui/Button";


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

const AllProducts = () => {
const router = useRouter()
  return (
    <div>
      <div className=" container flex justify-between flex-row py-7">
        <BreadCrumb router={router.asPath}/>
        <FilterBox />
      </div>
      <Grid className="gap-6">
        {products.map((product) => (
          <div className="border">
            <ProductCard product={product} variant="medium" />
          </div>
        ))}
      </Grid>
      <div className="container mx-auto py-14 text-center text-sm">
      <p>Showing 1-12 of 64 items</p>
      </div>
      <div className="container pb-20 flex items-center justify-center mx-auto">
          <Button variant="primary">
            Load more
          </Button>
      </div>
    </div>
  );
};

export default AllProducts;

AllProducts.getLayout = (page) => <Layout>{page}</Layout>;
