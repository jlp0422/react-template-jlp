/* eslint-disable no-unused-vars */
import React from "react";
/* eslint-enable no-unused-vars */

import ReactDOM from "react-dom";

/* eslint-disable no-undef */
const app = document.getElementById("app");
/* eslint-enable no-undef */

const title = "My minimal React Webpack Babel app";

ReactDOM.render(<div>{title}</div>, app);

module.hot.accept();
