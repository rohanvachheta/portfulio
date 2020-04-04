import React from "react";

const projectsArray = [
  {
    image: "",
    title: "Process Asset Library(PAL)",
    smallTitle: "Summer Internship project",
    desription:
      "For Managing Asset in an Organization this Web Application was created ,In which for front-end We have Used React-redux and back-end was Managed By flask-rest full Api ,In which It was Connected With PostgreSQL. Here this project was Build with different react popular libraries like react-redux, redux-thunk ,reduxform,React Bootstrap etc.",
  },
  {
    image: "",
    title: "Local Services Android App",
    smallTitle: "Last Semester Project (Android,java,MongoDb,node js)",
    desription:
      "This application will give you authority to create local services for vehicle management in your relative location and also helps other to book that service.In This Project I have Implemented Google Map API which was Integration with own latitude longitude values for making marker related things on map.I have also Used Retrofit,Fire-base and other libraries and for back-end I have Used Node with mongoDb .",
  },
  {
    image: "",
    title: "Real time web app with socket io",
    smallTitle: "(node js ,mongoose,socket io,express,moment)",
    desription:
      "This application gives Us chat room which is basically use socket and node js combination where front end was created with express.js .where you have to enter in particulate room for chatting with other joiner's in that chat room",
  },
  {
    image: "",
    title: "Blogger And News Android App",
    smallTitle: "6th Semester Project (Android,java,firebase)",
    desription:
      "This application I have implemented Android with FireBase for first time In which i have used firebase for authentication ,Cloud storage and Cloud Notification in android mobile phone. Also here In this project I have Used Blogger Api for getting blog post's from the blogger.",
  },
];

const Project = () => {
  let darkModeClass = "bg-white";
  if (localStorage.getItem("darkMode")) {
    darkModeClass = " bg-dark text-white border";
  }

  return (
    <div className="row p-3">
      {projectsArray.map(({ image, title, smallTitle, desription }) => {
        return (
          <div className="p-3 d-flex col-lg-6 " key={title}>
            <div className={`card shadow-sm p-3 mb-5 ${darkModeClass} rounded`}>
              {/* <div class="card-header">{title}</div> */}
              <div className="card-body  ">
                <h5 className="card-title">
                  {title + "  "}
                  <small className=" text-info">{smallTitle}</small>
                </h5>
                <p className="card-text">{desription}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
