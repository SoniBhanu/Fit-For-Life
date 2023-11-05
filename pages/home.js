import React from "react";
import Herosection from "./herosections";
import Footer from "@/components/Footer";
import Services from "./services";
import Team from "./team";
import Yoga_Information from "./Information/yoga_information";
import Cardio_Crossfit_Information from "./Information/Cardio_Crossfit_Information";
import Boxing_Information from "./Information/Boxing_Information";
import PT_Information from "./Information/PT_Information";
import Zumba_Information from "./Information/zumba_Information";
import Information from "./Information/information";

const home = () => {
  return (
    <div>
      <Herosection />;
      <Services />;
      {/* <Information />; */}
      <Yoga_Information />;
      <Cardio_Crossfit_Information />;
      <Boxing_Information />;
      <Zumba_Information />;
      <PT_Information />;
      <Team />;
      <Footer />;
    </div>
  );
};

export default home;
