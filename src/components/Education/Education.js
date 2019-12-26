import React from "react";
import Pdf from "../../assets/rohanvachhetaResume.pdf";

function Education() {
  let darkModeClass = "";
  if (localStorage.getItem("darkMode")) {
    darkModeClass = " bg-dark text-white border";
  }

  return (
    <div className={`shadow-lg p-3 mb-5  rounded ${darkModeClass}  animated fadeIn `}>
      <h3>Education</h3>
      <p>
        I have completed my bachelor of technology in Computer Engineering from
        Ldrp-itr , Gandhinagar.
      </p>
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
