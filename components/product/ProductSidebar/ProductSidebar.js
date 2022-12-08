import React from "react";
import Button from "../../ui/Button";
import Counter from "../../ui/Counter/Counter";
import ProductHeader from "./ProductHeader/ProductHeader";
import ProductShadesPanel from "./ProductShadesPanel";

const ProductSidebar = ({ price }) => {
  return (
    <div className="w-full">
      <ProductHeader />

      <div>
        <ProductShadesPanel />
      </div>

      <div className="mt-10 flex md:flex-row flex-col gap-5 md:gap-7">
        <Counter />
        <Button className="w-max-[400px]" variant="primary" type="w-xl">
          Add to Bag {price}
        </Button>
      </div>
    </div>
  );
};

export default ProductSidebar;
