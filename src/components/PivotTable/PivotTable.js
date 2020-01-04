import React, { Component } from "react";
import "react-pivottable/pivottable.css";

import { CSVReader } from "react-papaparse";
import PivotTableUIComponent from "./PivotTableUI";

class App extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      data: null
    };
  }

  handleReadCSV = data => {
    console.log(data);
    this.setState({
      data
    });
  };

  handleImportOffer = () => {
    const { data } = this.state;
    if (data) {
      this.setState({ data: null });
      return;
    }
    this.fileInput.current.click();
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <CSVReader
          onFileLoaded={this.handleReadCSV}
          inputRef={this.fileInput}
          style={{ display: "none" }}
          onError={this.handleOnError}
        />
        {!data && <p>click and upload csv to view the pivot table</p>}{" "}
        <button
          className={`btn ${data ? "btn-danger" : " btn-info"} mx-auto`}
          onClick={this.handleImportOffer}
        >
          {data ? "Close" : "Import CSV"}
        </button>
        {data && <PivotTableUIComponent {...data} />}
      </div>
    );
  }
}

export default App;
