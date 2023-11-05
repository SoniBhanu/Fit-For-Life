import React from 'react'

const Importer = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center">
                  <Image src={sold} width={30} height={30} alt="gift" />
                  <h2 class="text-gray-900 text-lg title-font font-medium ml-2">
                    Importer
                  </h2>
                </div>
                <div class="flex-grow ml-10">
                  <p
                    class="leading-relaxed text-base mb-3"
                    style={{ fontFamily: "-moz-initial" }}
                  >
                    fitforlife.com ✓ Brand Authorized
                  </p>
                </div>
                <div class="flex items-center">
                  <Image src={shipping} width={30} height={30} alt="gift" />
                  <h2 class="text-gray-900 text-lg title-font font-medium ml-2">
                    Fast Shipping
                  </h2>
                </div>
                <div class="flex-grow ml-10">
                  <p
                    class="leading-relaxed text-base mb-3"
                    style={{ fontFamily: "-moz-initial" }}
                  >
                    Average time: 1-3 days for Delhi-NCR or 3-5 days rest of
                    India - Free Delivery
                  </p>
                </div>
                <div class="flex items-center">
                  <Image src={product} width={30} height={30} alt="gift" />
                  <h2 class="text-gray-900 text-lg title-font font-medium ml-2">
                    Manufacturer
                  </h2>
                </div>
                <div class="flex-grow">
                  <p
                    class="leading-relaxed text-base mb-3 ml-10"
                    style={{ fontFamily: "-moz-initial" }}
                  >
                    All our products are far from expiry, and procured directly
                    from the brand or authorized importers of the brand
                  </p>
                </div>
                <div class="flex items-center">
                  <Image
                    src={returnProduct}
                    width={30}
                    height={30}
                    alt="gift"
                  />
                  <h2 class="text-gray-900 text-lg title-font font-medium ml-2">
                    14 Days Return Policy
                  </h2>
                </div>
                <div class="flex-grow ml-10">
                  <p
                    class="leading-relaxed text-base"
                    style={{ fontFamily: "-moz-initial" }}
                  >
                    All return requests are subject to an unboxing video only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Importer