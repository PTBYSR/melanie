import React from "react";
import {
  generateAboutMinisqueLinks,
  generateHelpLinks,
} from "./FooterNav.utils";
import NavLink from "./NavLink";
import s from './FooterNav.module.css'

const FooterNav = ({ variant, title }) => {
  const help = generateHelpLinks();
  const about = generateAboutMinisqueLinks();

  if (variant === "help") {
    return (
      <div>
      <div className={s.body}>
      <p className={s.title}>
        {title}
      </p>
    </div>
        <ul className={s.uList}>
          {help.map((nav) => (
            <NavLink nav={nav} key={nav.key} />
          ))}
        </ul>
      </div>
    );
  }

  if (variant === "about") {
    return (
      <div>
      <div className="mb-4">
          <p className="font-light text-white text-opacity-90">
            {title}
          </p>
        </div>
          <ul className="flex flex-col gap-2 text-sm text-white">
            {about.map((nav) => (
              <NavLink nav={nav} key={nav.key} />
            ))}
          </ul>
      </div>
    );
  }
};

export default FooterNav;
