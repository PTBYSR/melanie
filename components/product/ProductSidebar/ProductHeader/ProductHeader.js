import React from "react";
import ProductTag from "../../ProductTag/ProductTag";
import StarsRating from "../../StarsRating";

const ProductHeader = () => {
  return (
    <div className="flex flex-col gap-4">
      <div class="flex gap-3">
        <ProductTag variant="run-low">Running Low</ProductTag>
        <ProductTag variant="best-sell">Best Seller</ProductTag>
      </div>

      <div>
        <h1 className="text-3xl font-semibold">Duo-tone buildable foundation</h1>
      </div>

      <div>
        <p className="text-sm">Long Lasting, natural, mix buildable foundation</p>
      </div>

      <div className="flex gap-3">
        <StarsRating />
        <p className="font-semibold">(4.5)</p>
        <p className="">(2456 reviews)</p>

      </div>
    </div>
  );
};

export default ProductHeader;
