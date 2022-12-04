import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";

function App() {
  const Person={
    name:"kaliraj",
    age:25,
    married:false
  }
const scores=[2,3,4,5]

  return (
    <div className="App">
      <h1>hello world</h1>
      <FirstComponent />
      <p>{Person.name} is {Person.age} and is {Person.married? 'married':'unmarried'}</p>
      {scores.map((s,i)=> (<h2 key={s+ `${i}`} style={{color:"blue"}}>{s}</h2>))}
    </div>
  );
}

export default App;
