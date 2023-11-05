import React from "react";
import { useState, useEffect } from "react";
import Product from "@/pages/Product";
import Offer from "../offer";
import Sold from "../sold";

const AminoProduct = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const [data, setData] = useState();
  const sendRequest = () => {
    fetch("../api/StaticData/staticdata")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.message);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <Product
              description={item.description}
              subtitle={item.subtitle}
              title={item.title}
              id={item.id}
              image1={item.image1}
              key={index}
            />
          ))}
        <Offer />
        <Sold />
      </section>
    </div>
  );
};

export default AminoProduct;
