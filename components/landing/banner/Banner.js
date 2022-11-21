import React from "react";
import s from "./Banner.module.css";
import Button from "../../ui/Button";
import BlackVariant from "./BlackVariant/BlackVariant";
import PinkVariant from "./PinkVariant/PinkVariant";


const Banner = ({ variant }) => {
  if (variant === "black") {
    return (
      <BlackVariant root={s.root} variant={s[variant]} />
    );
  } else{
    return(
      <PinkVariant root={s.root} variant={s[variant]} />
    )
  }
};

export default Banner;
