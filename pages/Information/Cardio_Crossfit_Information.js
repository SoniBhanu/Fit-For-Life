import React from 'react'

const Cardio_Crossfit_Information = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py0 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mr-8">
            <h1 class="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">
              Benefits of Cardio and Crossfit
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              <b>Improve your endurance –</b> SA workout that lasts as little as
              15 minutes might not seem to be long enough. 
              <br /> <br />
              <b>Get agile and flexible –</b> Increasing agility and flexibility
              are also benefits of a CrossFit workout, which can include
              plyometric exercises like box jumps, broad jumps, and jumping
              rope.
              <br /> <br />
              <b>Torch calories during your workout – </b>Like other
              high-intensity exercise routines, the health benefits of CrossFit
              can persist even after your workout is done. <br />
              <br />
              <b>Exercise Efficiently – </b>Boulet has spent plenty of time in
              traditional gyms but was attracted to CrossFit because of its
              efficiency.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-8 mb-8">
            <video autoPlay loop style={{ width: "1000px", height: "100%" }}>
              <source src="/crossfit.mp4" />
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cardio_Crossfit_Information