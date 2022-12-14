import Link from "next/link";
import React from "react";
import ChevronRight from "../../../../public/common/icons/ChevronRight";

const DiscoverCard = ({ card }) => {
  return (
    <div className="relative">
      <div className="relative md:block hidden -z-[100]">{card.image}</div>
      <div className="center-all md:absolute bottom-[6px] flex h-[80px] w-full bg-black bg-opacity-50">
        <Link href={card.route}>
          <a className="flex items-center">
            <p className="font-semibold text-white">{card.label}</p>
            <ChevronRight size="29" color="#FFF" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DiscoverCard;
