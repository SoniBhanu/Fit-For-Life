import React from "react";
import Image from "next/image";
import gift from "/public/gift.png"
import offer from "/public/offer.png"

const Offer = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center">
                  <Image src={gift} width={20} height={20} alt="gift" />
                  <h2 class="text-gray-900 text-lg title-font font-medium ml-5">
                    SPECIAL OFFER
                  </h2>
                </div>
                <div class="flex-grow mb-3 ml-10">
                  <p
                    class="leading-relaxed text-base"
                    style={{ fontFamily: "-moz-initial" }}
                  >
                    Get A Free Shaker on Every Purchase of Above 5000/-
                  </p>
                </div>
                <div class="flex items-center">
                  <Image src={offer} width={30} height={30} alt="gift" />
                  <h2 class="text-gray-900 text-lg title-font font-medium ml-2">
                    OFFER FOR INDIAN MUSCLES
                  </h2>
                </div>
                <div class="flex-grow ml-10">
                  <p
                    class="leading-relaxed text-base"
                    style={{ fontFamily: "-moz-initial" }}
                  >
                    Get An Extra 5% Off, Use Code: 5AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
