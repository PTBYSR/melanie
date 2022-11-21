import React from "react";
import { generateNavItems } from "./Nav.utils";

const Nav = () => {
  const routes = generateNavItems();

  return (
    <nav className="h-12 border-b">
      <ul className="cursor-pointer flex text-xs  gap-16 justify-center items-center h-full font-semibold">
        {routes.map((route) => (
          <li>{route.link}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
