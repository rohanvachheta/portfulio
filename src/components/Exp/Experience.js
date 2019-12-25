import React from "react";
import CardComponent from "../Card/CardComponent";
import Education from "../Education/Education";

function Experience(props) {
  return (
    <div className="row">
      <CardComponent />
      <CardComponent />
      <div className="col-lg-12">
        <Education />
      </div>
    </div>
  );
}

export default Experience;
