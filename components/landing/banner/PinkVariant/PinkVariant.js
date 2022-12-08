import React from "react";
import clsx from "clsx";
import generatePinkVariantIcon from "./PinkVariantIcons";
import PinkVariantCard from "./PinkVariantCard";
import Text from "../../../ui/Text";

const PinkVariant = ({ root, variant }) => {
  const icons = generatePinkVariantIcon();

  return (
    <>
      <div className={variant}>
        <div className={clsx(root, variant)}>
          <div className="mb-16">
            <Text variant="sectionHeading">
            About
              <span className="font-light"> Canopy.</span>
            </Text>
          </div>
          <div class="flex flex-col items-end justify-center gap-10 md:flex-row">
            {icons.map((icon, idx) => (
              <PinkVariantCard key={idx} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PinkVariant;
