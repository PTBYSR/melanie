import React from "react";
import Text from "../../ui/Text";
import DiscoverCards from "./DiscoverCards/DiscoverCards";

const Discover = () => {
  return (
    <div className="py-14 container mx-auto">
      <div>
        <Text variant="sectionHeading">Discover Even More</Text>
        <Text variant="subSectionHeading">
          Explore Your Beauty With Different Shades Of Color
        </Text>
      </div>
        <DiscoverCards />
    </div>
  );
};

export default Discover;
