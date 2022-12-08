import React from "react";
import s from "./Button.module.css";
import clsx from "clsx";
import cn from "clsx";
import Link from "next/link";

const Button = (props) => {
  const { children, variant, type, className, style, route = "" } = props;
  const Component = "button";
  return (
    <Link href={variant === "cart" ? "/allproducts/hello" : ""}>
      <Component style={style} className={cn(className, ["root"], s[variant], s[type])}>
        {children}
        
        </Component>
        </Link>
  );
};

export default Button;
