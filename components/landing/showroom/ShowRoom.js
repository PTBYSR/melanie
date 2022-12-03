import React from "react";
import ProductCard from "../../product/ProductCard";
import Grid from "../../ui/Grid";
// import product1 from "../../../public/product1.png";
import { products } from "../../../pages/storybook";
import Button from "../../ui/Button";
import Text from "../../ui/Text";

const ShowRoom = ({ title, subtitle, variant }) => {
  return (
    <div>
      <div className=" container mx-auto w-full  border-black pt-20 pb-16">
        <Text variant="sectionHeading">{title}</Text>
        <Text variant="subSectionHeading">{subtitle}</Text>
        <div className="center-all mt-5 flex md:py-12">
          <Grid>
            {products.map((product) => (
              <ProductCard variant="large" product={product} />
            ))}
          </Grid>
        </div>
      </div>

      {variant === "second" ? (
        <div className="center-all mb-16 flex">
          <Button variant="primary">Shop all sets</Button>
        </div>
      ) : null}
    </div>
  );
};

export default ShowRoom;
