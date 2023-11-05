import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import ProductItem from "../productItem";

const Proteins = () => {
  const [data, setData] = useState();
  const sendRequest = () => {
    fetch("../api/StaticData/ProteinStatic")
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

  console.log(data);
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Best in Protein Supplements
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Here are the best Sellers Suppliments which mostly preferred to
              buy.
            </p>
            <div class="flex mt-3 justify-center">
              <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            {" "}
            {/** main div */}
            {Array.isArray(data) &&
              data.map((item, index) => (
                <ProductItem
                  description={item.description}
                  subtitle={item.subtitle}
                  title={item.title}
                  id={item.id}
                  image1={item.image1}
                  key={index}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Proteins