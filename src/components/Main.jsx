import React from "react";
// if you want to import something from node module then simply 'react'->it willsearch in module folder
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// this import is from folder ./ is used
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
