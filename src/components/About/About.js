import React from "react";
import "./About.css";

function About(props) {
  return (
    <div className="row ">
      <div className="col col-sm-6">
        <h1 className="title-text p-2 mt-4">about me</h1>
        <h4 className="p-2">
          Hi ,I am <span className='text-info'>Rohan Vachheta</span>.
         software devloper based in Ahmedabad, India.
        </h4>
        <p className="p-2">
          I enjoy turning complex problems into simple, beautiful and intuitive
          designs. When I'm not coding, tweeting or pushing pixels, you'll find
          me leraning, capturing photos or listening Music.
        </p>
      </div>
      <div className="col col-sm-6">
        <img
          className="about--user_image shadow p-3 mb-5 bg-white rounded"
          src="https://i.picsum.photos/id/1/5616/3744.jpg"
        />
      </div>
    </div>
  );
}

export default About;
