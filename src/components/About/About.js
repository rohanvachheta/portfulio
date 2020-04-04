import React from "react";
import "./About.css";
import portfulio from "./../../assets/portfulio.jpg";
import LinkEditorExample from "../DraftJsExmp";

function About(props) {
  return (
    <div className="row animated fadeIn  ">
      <div className="col col-sm-6 ">
        <h1 className="title-text p-2 mt-4">about me</h1>
        <h4 className="p-2 ">
          Hi ,I am <span className="text-info">Rohan Vachheta</span>. software
          devloper based in Ahmedabad, India.
        </h4>
        <p className="p-2">
          I enjoy turning complex problems into simple, beautiful and intuitive
          designs. When I'm not coding, tweeting or pushing pixels, you'll find
          me leraning, capturing photos or listening Music.
        </p>
        <p className="m-2 d-inline">follow me on :</p>
        <a
          target="blank"
          href="https://www.linkedin.com/in/rohan-vachheta-42370215a/"
          className=" linkedin text-info"
        >
          <i class="fab fa-linkedin follow-icon"></i>
        </a>

        <a
          target="blank"
          href="https://www.facebook.com/rohanvachhta"
          className=" facebook text-primary"
        >
          <i class="fab fa-facebook-f follow-icon"></i>
        </a>

        <a
          target="blank"
          href="https://twitter.com/rohan_vachheta"
          className=" twitter text-info"
        >
          <i class="fab fa-twitter follow-icon"></i>
        </a>
        <a
          target="blank"
          href="https://github.com/rohanvachheta"
          className=" github"
        >
          <i class="fab fa-github follow-icon"></i>
        </a>
      </div>
      <div className="col col-sm-6">
        <img
          alt="we-do"
          className="about--user_image  float-right"
          src={portfulio}
        />
      </div>

      {/* <LinkEditorExample /> */}
    </div>
  );
}

export default About;
