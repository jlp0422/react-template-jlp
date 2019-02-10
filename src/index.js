import React from "react";
import ReactDOM from "react-dom";

const app = document.getElementById("app");
const title = "My minimal React Webpack Babel app";

ReactDOM.render(<div>{title}</div>, app);

module.hot.accept();
