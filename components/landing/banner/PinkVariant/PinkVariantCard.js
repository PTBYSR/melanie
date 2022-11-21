import React from "react";

const PinkVariantCard = ({ icon }) => {
  return (
    <div className="flex  gap-1 center-all text-center flex-col w-[350px]">
      <div>{icon.url}</div>
      <div>
        <h3 className="font-semibold">{icon.label}</h3>
      </div>
      <div className="mt-2">
      <p className="text-sm">{icon.description}</p></div>
    </div>
  );
};

export default PinkVariantCard;
