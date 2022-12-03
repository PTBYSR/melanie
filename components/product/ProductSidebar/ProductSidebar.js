import React from "react";
import Button from "../../ui/Button";
import Counter from "../../ui/Counter/Counter";
import ProductHeader from "./ProductHeader/ProductHeader";

const ProductSidebar = ({ price }) => {
  return (
    <div className="w-full">
    
    <ProductHeader />

      {/*
    Product Shades Panel
    */}

    <div>
    
    </div>

      <div className="flex gap-7">
        <Counter />
        <Button className="w-max-[400px]" variant="primary" type="w-xl">
          Add to Bag 
          {" "}
          {price}
        </Button>
      </div>
    </div>
  );
};

export default ProductSidebar;
