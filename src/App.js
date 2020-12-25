// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// // pages
// import NavBar from "./components/navBar/NavBar";
// import NotFound from "./components/NoMatchFound/NotFound";
// import AppNew from "./components/facebook/App";
// import About from "./components/About/About";
// import Experience from "./components/Exp/Experience";
// import Education from "./components/Education/Education";
// import Project from "./components/Projects/Project";
// import AutoReload from "./components/AutoReload";
// import { Workbox } from "workbox-window";

// // css
// // import "./App.css";
// import SpringExp from "./components/LearnSpring/SpringExp";
// import PivotTable from "./components/PivotTable/PivotTable";
// import TestNewUI from "./components/testnew/TestNewUI";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import SecoundNewUI from "./components/secoundNew/SecoundNewUI";
// import ThirdNewUI from "./components/third/ThirdNewUI";
// import CacheBuster from "./CacheBuster";

// library.add(faEnvelope, faKey, fas);

// function App() {
//   console.log("version chane");

//   useEffect(() => {
//     try {
//       const version = window.localStorage.getItem("version");
//       console.log("App -> version", version);
//       if (version && parseInt(version) !== 1) {
//         // window.location.reload();
//         return;
//       }
//       window.localStorage.setItem("version", 2);
//     } catch (error) {
//       //
//     }
//   }, []);

//   let darkModeClass = "bg-white";
//   if (localStorage.getItem("darkMode")) {
//     darkModeClass = " bg-dark text-white";
//   }
//   // return <SpringExp />;

//   return (
//     <div className="App">
//       <AutoReload />
//       <div className={darkModeClass} style={{ height: "100vh" }}>
//         <div className="">
//           <Router>
//             {/* <NavBar /> */}
//             <Switch>
//               <Route path="/" component={ThirdNewUI} exact />

//               <Route path="/exp" component={Experience} exact />

//               <Route path="/Projects" component={Project} exact />

//               <Route path="/edu" component={Education} exact />
//               <Route path="/pivottable" component={PivotTable} />
//               <Route component={NotFound} />
//             </Switch>
//           </Router>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { Component, useEffect } from "react";

import { Document, Page } from "react-pdf";

import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const samplePDF =
  "https://wotnot-conversation-attachment-staging.storage.googleapis.com/2078/Visitor%20-%20A8-4Xcix6Y5hBqN172917192501CagDHnWH/71f7e31e-4544-11eb-b701-6a78cc3c2b14_A%20Sample%20PDF.pdf";

const anotherSamplePdf =
  "https://tetra4d.com/wp-content/uploads/2018/12/PartList-Helico.pdf";

const files = {
  url: `https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/44678.pdf`,
  httpHeaders: {
    "Access-Control-Allow-Origin": "https://rohanvachhetap.netlify.app/",
    "Access-Control-Allow-Methods": "GET, POST, PUT",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
    "cache-control": "max-age=5184000",
    "content-length": "846752",
    "content-type": "application/pdf",
    date: "Fri, 25 Dec 2020 16:24:00 GMT",
    expires: "Tue, 23 Feb 2021 16:24:00 GMT",
    "last-modified": "Mon, 31 Oct 2016 13:42:01 GMT",
    pragma: "public",
    server: "nginx",
    "cross-origin-resource-policy": "cross-origin",
    "x-content-type-options": "nosniff",
  },
  // withCredentials: true,
};

class App extends Component {
  state = {
    numPages: null,
    fileUrl: samplePDF,
  };

  // useEffect(()=>{

  // },[])

  componentDidMount() {
    fetch("https://googleads.g.doubleclick.net/pagead/id").then((response) =>
      console.log(response)
    );
  }

  // https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/44678.pdf

  onDocumentLoadSuccess = (document) => {
    const { numPages } = document;
    this.setState({
      numPages,
    });
  };

  handleUrlChange = () => {
    const { fileUrl } = this.state;
    const newUrl = fileUrl === samplePDF ? anotherSamplePdf : samplePDF;
    this.setState({
      fileUrl: newUrl,
    });
  };

  render() {
    const { numPages } = this.state;

    return (
      <>
        <button onClick={this.handleUrlChange}>Toggle PDF URL</button>
        <Document
          // key={fileUrl} // optional, doesn't affect things
          file={files}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={600}
            />
          ))}
        </Document>
      </>
    );
  }
}

export default App;
