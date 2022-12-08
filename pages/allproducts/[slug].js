import React from "react";
import Footer from "../../components/common/Footer/Footer";
import TopNav from "../../components/common/TopNav/TopNav";
import ProductDetails from "../../components/product/ProductDetails/ProductDetails";
import ProductSidebar from "../../components/product/ProductSidebar/ProductSidebar";
import ProductView from "../../components/product/ProductView/ProductView";
import product1 from "../../public/common/product1.png";

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
      <div class="container mx-auto my-10">
        <div className="flex gap-10 md:flex-row flex-col">
          <ProductView product={product} />
          <ProductSidebar price={product.price} />
        </div>
        <ProductDetails className="mt-12 flex gap-12 md:flex-row flex-col" />
      </div>
      <Footer />
    </>
  );
};

export default Slug;
