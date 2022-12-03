import React from "react";
import ChevronDown from "../../../public/common/icons/ChevronDown";
import FilterIcon from "./FilterIcon";

const FilterBox = () => {
  return (
    <div className="flex gap-3 items-center">
      <FilterIcon color="#0d0d0d" size={30} />
      <div className="flex gap-3 items-center">
        <p>Product Type</p>
        <ChevronDown color="#0d0d0d" size={27}/>
      </div>
    </div>
  );
};

export default FilterBox;
