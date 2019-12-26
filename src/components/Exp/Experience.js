import React from "react";
import CardComponent from "../Card/CardComponent";
import Education from "../Education/Education";

import socialpilotLogo from "../../assets/timthumb.png";
import cygnetLogo from "../../assets/logo-white.png";

function Experience() {
  return (
    <div className="row p-2  animated fadeIn ">
      <CardComponent
        title="Junior Reactjs Developer"
        description="--My work primarily involved working with React and Redux . I quickly understood
        the code base and improved it over time to make the development process faster. I
        also collaborated with Back End Developers and handled the ownership of
        developing front ends of two major feather updates and shipped them to
        production. Apart from that I also worked on migrating PHP code to React. Along
        with enhancing my React and Redux concepts, this work experience has also helped
        me improve my modern JavaScript (ES6) and version control understandings"
        time="SocialPilot LLP (June 2019 - Dec 2019)"
        image={socialpilotLogo}
        link='https://www.socialpilot.co/'
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
        link='https://www.cygnet-infotech.com/'
      />
      <div className="col-lg-12">
        <Education />
      </div>
    </div>
  );
}

export default Experience;
