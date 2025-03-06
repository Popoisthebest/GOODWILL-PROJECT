import { useState } from "react";
import StarRating from "../components/test/testStar.tsx";

const Test = props => {
  const [star, setStar] = useState("");

  const getStarRating = num => {
    setStar(num);
    console.log(num);
  };
  return (
    <>
      <StarRating getStarRating={getStarRating} star={star} />
    </>
  );
};

export default Test;
