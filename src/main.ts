import { createElement } from "react";
import { render } from "react-dom";
import { App } from "./App";

// Initialize framework7 app
import "@libs";

// Import global style css
import "./styles.css";

render(createElement(App), document.getElementById("app"));
