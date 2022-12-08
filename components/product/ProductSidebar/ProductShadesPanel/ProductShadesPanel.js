import React from "react";
import s from "./ProductShadesPanel.module.css";
import cn from "clsx";
import Filter from "../../../../public/common/icons/Filter";
import Button from "../../../ui/Button";
import ChevronDown from "../../../../public/common/icons/ChevronDown";
import Link from "next/link"

const ProductShadesPanel = () => {
  return (
    <div className="">
      <div className="mb-4 mt-6">
        <p className="font-semibold">Shades</p>
      </div>
      <div className={cn(s.bb, s.flat)}>
        <Filter color="#000" size="0.8" />
        All shades
      </div>
      <div className="flex w-full justify-center ">
        <p>actual panel</p>
      </div>
      <div className="my-9">
        <Button variant="select-shade" type="w-xl">
          Selected shade
          <ChevronDown color="#000" size="29" />
        </Button>
      </div>
      <div className="text-sm">
        <p>Don’t know how to customize the shades?</p>
        <p>
          Don’t worry, we will help for you.
          <Link href="/">
            <>
              {""}
              <a className="text-[blue]"> Find Your Shades</a>
            </>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProductShadesPanel;
