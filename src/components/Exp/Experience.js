import React from "react";
import CardComponent from "../Card/CardComponent";
import Education from "../Education/Education";

import socialpilotLogo from "../../assets/timthumb.png";
import cygnetLogo from "../../assets/logo-white.png";

function Experience() {
  return (
    <div className="row p-2  animated fadeIn ">
      <div className="col-lg-12 mb-5">
        <Education />
      </div>
      <h3 className="p-3">Experience</h3>
      <div className="row p-2">
        <CardComponent
          title="Junior Reactjs Developer"
          description="--My work primarily involved working with React, React-router and Redux"
          time="SocialPilot LLP (June 2019 - oct 2020)"
          image={socialpilotLogo}
          link="https://www.socialpilot.co/"
        />

        <CardComponent
          title="Internship"
          description="--I was assign to a Project call Process Asset Library(PAL) in which I've go through
all the development phase of process for build the project from scratch, also I
made prototype version of this project during my internship, it was great
experience with cygnet i was working
with manager and in other team member for the first time"
          time="Cygnet Infotech(Jan 2019- May 2019)"
          image={cygnetLogo}
          imageClass="bg-info p-2"
          link="https://www.cygnet-infotech.com/"
        />
      </div>
    </div>
  );
}

export default Experience;
