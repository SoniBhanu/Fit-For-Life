import React from 'react'

const Boxing_Information = () => {
  return (
    <div>
      <section class="text-gray-600 body-font" style={{ position: "revert" }}>
        <div class="container mx-auto flex px-5 py0 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-8 mb-8">
            <video autoPlay loop style={{ width: "1000px", height: "100%" }}>
              <source src="/boxing.mp4" />
            </video>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mr-8">
            <h1 class="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">
              Benefits of Boxing
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              <b>Improves Cardiovascular Health –</b> Doctors recommend getting
              at least 20 minutes of cardiovascular exercise at least five days
              per week.
              <br /> <br />
              <b>Builds Muscles And Definition –</b> Boxing training gives you a
              full-body workout that helps to build big, strong muscles. The
              intense cardiovascular exercise you perform while training helps
              keep these muscles well-defined.
              <br /> <br />
              <b>Builds Strong Bones And Joints –</b> Boxing requires you to be
              light on your feet as you move around the circle.<br />
              <br />
              <b>Improves Hand-Eye Coordination –</b> Boxing requires strong
              visual-motor coordination on your part since you are often
              performing multiple motions at one. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Boxing_Information