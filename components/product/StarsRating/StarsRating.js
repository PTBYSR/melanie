import React from "react";
import Star from "../../../public/common/icons/Star";
import { useState, useEffect } from "react";

const StarsRating = ({ num }) => {
  const [col, setCol] = useState([]);

  useEffect(() => {
    let x = []
    let color = "gray"
    if (col.length < 5) {
        if (num === 5) {
          for (let i = 0; i < num; i++) {
            setCol(t => [...t, color])
          }
        }
    } else {
        setCol([])
    }
  }, [])
  return (
    <div className="flex gap-1">
      <Star color="gray" size="0.9" />
      <Star color="gray" size="0.9" />
      <Star color="gray" size="0.9" />
      <Star color="gray" size="0.9" />
      <Star color="gray" size="0.9" />
    </div>
  );
};

export default StarsRating;
