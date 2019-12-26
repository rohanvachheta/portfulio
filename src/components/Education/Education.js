import React from "react";
import Pdf from "../../assets/rohanvachhetaResume.pdf";

function Education(props) {
  return (
    <div class="jumbotron">
      <h3>Education</h3>
      <p class="lead">
        I have completed my bachelor of technology in Computer Engineering from
        Ldrp-itr , Gandhinagar.
      </p>
      <hr class="my-4" />
      <p>
        download my resume by clicking this link,
        {"  "}
        <a class="text-info" href={Pdf} target="blank" role="button">
          view/download resume
        </a>
      </p>
    </div>
  );
}

export default Education;
