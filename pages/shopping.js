import React from "react";
import Aminos from "./Shopping/aminos";
import Burner from "./Shopping/fatburner";
import Gainers from "./Shopping/gainers";
import Pworkout from "./Shopping/pre-workout";
import Proteins from "./Shopping/proteins";
import Sellers from "./Shopping/sellers";
import Wellness from "./Shopping/wellness";
import Payment from "./payment";
import Product from "./Product";

const about = () => {
  return (
    <div>
    <Payment />
      <Sellers />
      <Gainers />
      <Proteins />
      <Pworkout />
      <Aminos />
      <Wellness />
      <Burner />
    </div>
  );
};

export default about;
