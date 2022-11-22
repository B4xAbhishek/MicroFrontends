import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./components/Counter";
import { Header } from "./components/Search"
import { Navigation } from "./components/Navigation/Navigation";

import "./index.css";

const App = () => {
  return (<>
    <div>
      <Navigation />
    </div>
  </>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
