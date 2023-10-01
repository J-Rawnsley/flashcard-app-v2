import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Table } from "./TableComponents";
import initialData from "./initialData";
import makeDataArray from "./getData";
import InputForm from "./inputForm";

function App() {
  const [currentData, setData] = useState(initialData)

  const handleClick = () => {
    const input = document.getElementById("inputBox").value
    makeDataArray(input, setData)
  }

  return (
    <>
      <h1 className="width-limited space-above">Flashcard App v2</h1>
      <InputForm clickFunction={() => handleClick()}/>
      <Table data={currentData} />
    </>
  );
}

export default App;
