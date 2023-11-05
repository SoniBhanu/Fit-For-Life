import React from "react";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";
import { useRouter } from "next/router";
import SellerProduct from "./Shopping/Sellers/SellersProduct";

function ProductItem({ id, image1, subtitle, title, description }) {
   const limitedDescription = description.split(" ").slice(0, 20).join(" ") + "...";

   // Build dynamic URL based on subtitle or ID
    
  return (
    <div class="lg:w-1/3 sm:w-1/2 p-4">
      <div class="flex relative" style={{ height: "350px" }}>
        <img
          alt={title}
          class="absolute inset-0 w-full h-full object-fit: cover"
          src={image1}
        />
        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            {subtitle}
          </h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p class="leading-relaxed">{limitedDescription}</p>
          <Link
            target="_blank"
            href="/pages/Payment.js"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
          >
            <FaCartArrowDown class="mr-2" />
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
