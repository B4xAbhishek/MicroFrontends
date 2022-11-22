import React from "react";
import ReactDOM from "react-dom";
import { Counter } from 'counter/Counter';
import { Navigation } from "counter/Navigation";

import "./index.css";

const App = () => {
  console.log('tgi')
  return (
    <>
      <div>
        <Navigation />
        <Counter />
        <hr />
      </div>
    </>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
