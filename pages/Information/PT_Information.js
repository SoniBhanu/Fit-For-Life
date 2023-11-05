import React from 'react'

const PT_Information = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py0 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-12">
            <video autoPlay loop style={{ width: "100%", height: "100%" }}>
              <source src="/personal.mp4" />
            </video>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mr-8">
            <h1 class="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">
              Personal Training
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              <b>You’ll learn about health, fitness, and your body –</b> A
              personal trainer isn’t just there to make you sweat — you likely
              learn something from your time together, too.
              <br /> <br />
              <b>Helps with goal setting –</b> A personal trainer can help you
              set realistic and attainable goals based on your personal
              experiences and abilities, aiding you in your progress along the
              way.
              <br /> <br />
              <b>You’ll get an individualized plan –</b> To address the issue,
              your trainer then incorporates single-leg movements into your
              workouts, allowing you to correct this imbalance and make yourself
              stronger overall. <br />
              <br />
              <b>Promotes exercise variety –</b> A personal trainer can
              introduce you to exercises you may have never done before or would
              never have attempted on your own, decreasing your chance of
              boredom and hitting a plateau.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PT_Information