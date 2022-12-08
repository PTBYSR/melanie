import commerce from "../../lib/commerce";
import React from "react";
import ProductList from "../../components/sandbox/ProductList";
import CategoryList from "../../components/sandbox/CategoryList";
import Link from "next/link";

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();
  
  if (!categories || !merchant || !products) return console.log("CHAIIII");
  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default function IndexPage({ merchant, categories, products }) {



  return (
    <React.Fragment>
      <h1>{merchant.business_name}</h1>

      <h3 className="text-3xl">
        <Link href="/categories">
          <a>Categories</a>
        </Link>
      </h3>

      <CategoryList categories={categories} />

      <h3 className="text-3xl">
        <Link href="/products">
          <a>Products</a>
        </Link>
      </h3>

      <ProductList products={products} />
    </React.Fragment>
  );
}