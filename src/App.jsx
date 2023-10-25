import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //import bootstrap for styling
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Table } from "./TableComponents";
// import initialData from "./initialData"; /* used during development for testing */
import makeDataArray from "./getData";
import InputForm from "./inputForm";

function App() {
  const [currentData, setData] = useState([]);

  //fetch data when user clicks "generate"
  const handleClick = () => {
    const input = document.getElementById("inputBox").value;
    makeDataArray(input, setData);
  };

  // when data is returned, re-render the page using imported Table component function to create an output table
  if (currentData[0]) {
    return (
      <>
        <InputForm clickFunction={() => handleClick()} />
        <Table data={currentData} />
      </>
    );
  }

  // when current data is empty (before the request has been sent to the server), render the title and input form only
  else
    return (
      <>
        <InputForm clickFunction={() => handleClick()} />
      </>
    );
}

export default App;
