import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { HEIGHT } from './constants';

// document.body.style.overflowY = "hidden";
// document.body.style.overflowX = "hidden";

// document.body.style.width = WIDTH + "px";
document.body.style.fontFamily = 'cursive';

document.body.style.height = HEIGHT + "px";
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
