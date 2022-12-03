import React from "react";
import { generateNavItems } from "./Nav.utils";
import Link from "next/link";

const Nav = () => {
  const links = generateNavItems();

  return (
    <nav className="h-12 border-b md:block hidden">
      <ul className="cursor-pointer flex text-xs  gap-16 justify-center items-center h-full font-semibold">
        {links.map((link) => (
          <Link href={link.route}>{link.label}</Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
