import React from "react";

const Yoga_Information = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div
          class="container mx-auto flex px-5 py0 md:flex-row flex-col items-start align-center justify-center "
        >
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-8 mt-3">
            <video autoPlay loop style={{ width: "1000px", height: "100%" }}>
              <source src="/yoga.mp4" />
            </video>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mr-8">
            <h1 class="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">
              Benefits of Doing Yoga
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              <b>Promotes physical activity –</b> Starting a yoga practice is
              often the first step towards a more active lifestyle. <br />{" "}
              <br />
              <b>Stress Management –</b> Yoga poses help us release the tension
              that can build up in our bodies as a result of the daily stress
              of life.
              <br /> <br />
              <b>Greater Mind-Body Awareness –</b> Yoga teaches us to notice
              what is happening in the body and mind as we move through the
              different poses. 
              <br />{" "}
              <br />
              <b>Community –</b> Practicing yoga together either in person or as
              part of a virtual community provides a safe environment and
              connection with other people.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Yoga_Information;
