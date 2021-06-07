//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "jquery";
import "popper.js";
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Navbar } from "./component/navbar.js";
//import { Home } from "./component/home.js";

//render your react application
ReactDOM.render(<Navbar />, document.querySelector("#app"));
//ReactDOM.render(<Home />, document.querySelector("#app"));
