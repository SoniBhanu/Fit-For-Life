export default function Payment() {
  const makePayment = async () => {
    console.log("here...");
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("./api/razorpay", { method: "POST" }).then(
      (t) => t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Fit For Life",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank You Purchasing this Product",
      image: "/public/icon.jpg",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Fit For Life",
        email: "fitforlife@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  return (
    <div>
      <main className="font-Inter h-screen overflow-auto bg-gradient-to-tr from-[#252B30] to-[#191C22]">
        <Hero onClick={makePayment} />
      </main>
    </div>
  );
}

const Hero = ({ onClick }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="supplement"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://fitnesstack.com/wp-content/uploads/2020/01/BSN-Syntha-6-1.jpg"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              SYNTHA G
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              PROTEIN SUPPLEMENT
            </h1>
            <div className="flex mb-4"></div>
            <p className="leading-relaxed">Here is our Protein Supplement</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>3.5 Lbs</option>
                    <option>7 Lbs</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                INR 1500
              </span>
              <div className="bg-gradient-to-r from-[#3e4044] to-[#1D2328] p-[1px] rounded-md mb-4 ml-8">
                <button
                  onClick={onClick}
                  className="bg-gradient-to-r from-[#2E3137] to-[#1D2328] rounded-md w-full py-4 shadow-xl drop-shadow-2xl text-gray-300 font-bold"
                >
                  Purchase Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
