import Link from "next/link";
import React from "react";
import Hamburger from "../../../public/nav/icons/Hamburger";
import Search from "../../../public/nav/icons/Search";
import User from "../../../public/nav/icons/User";

const Header = () => {
  return (
    <div className="border-b  z-[100]">
        <div className="container mx-auto mt-1 flex h-14 items-center justify-between ">
          <div className=""><Hamburger color="#0D0D0D" size={30}/></div>
          <div className="text-2xl cursor-pointer"><Link href="/">Canopy .</Link></div>
          <div className="flex gap-5">
            <Search color="#333333" size={25} />
            <User color="#0D0D0D" size={25} />
          </div>
        </div>
    </div>
  );
};

export default Header;
