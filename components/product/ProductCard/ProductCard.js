import React from "react";
import s from "./ProductCard.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../../ui/Button";

const size = {
  medium: 250,
  large: 350,
};

const ProductCard = ({ product, variant }) => {
  return (
    <div className={s.root}>
      <div className={s.imageContainer}>
        <Image
          src={product.src}
          alt=""
          height={size[variant]}
          width={size[variant]}
          layout="fixed"
        />
      </div>
      <Link href={"/productview"}>
        <a href="">
            <div class="my-7">
              <h3 className={s.header}>{product.name}</h3>
              <p className={s.headerSub}>{product.type}</p>
            </div>
        </a>
      </Link>
      <Button variant="cart" type="w-m" >
        Add to Bag
        <div>{product.price}</div>
      </Button>
    </div>
  );
};

export default ProductCard;
