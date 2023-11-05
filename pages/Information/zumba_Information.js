import React from 'react'

const Zumba_Information = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py0 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mr-8">
            <h1 class="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">
              Benefits of Zumba
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              <b>Great for weight loss –</b> Zumba is a powerful exercise with a
              600 to 1,000-calorie burn in just an hour.
              <br /> <br />
              <b>Tones your entire body –</b> You may feel sore in places you
              never knew existed, but it gets results. Zumba targets lots of
              different muscle groups at once for total body toning.
              <br /> <br />
              <b>Improves coordination – </b>In Zumba, your arms and legs are
              generally moving in different directions so it requires a good
              deal of coordination. Repeated practice improves coordination and
              helps you feel more comfortable. <br />
              <br />
              <b>Makes you happy –</b> Every time you exercise, you release
              endorphins, which trigger positive feelings throughout the body.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-8 mb-8">
            <video autoPlay loop style={{ width: "1000px", height: "100%" }}>
              <source src="/zumba.mp4" />
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Zumba_Information;