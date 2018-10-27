import React from "react";
import ReactDOM from "react-dom";
// import FormExample from "./FormExample";
import FormRevised from "./FormRevised";
// import Reducer from "./ReducerExample";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<FormRevised />, document.getElementById("root"));

serviceWorker.register();
