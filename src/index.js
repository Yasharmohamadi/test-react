import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Users from "./components/Users/Users";
import Material from "./components/Material/Material";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

// FIRST WAY TO USE REACT
// ReactDOM.render(
//     <Main />,
//     document.getElementById('root')
// );

// SECOND WAY TO USE REACT
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.Fragment>
		<Users />
		<Material />
	</React.Fragment>
);
