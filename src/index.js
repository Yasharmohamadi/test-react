import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Container } from "react-bootstrap";
import Users from "./components/Users/Users";
import Table from "./components/Table/Table";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

// FIRST WAY TO USE REACT
// ReactDOM.render(
//     <Main />,
//     document.getElementById('root')
// );

// SECOND WAY TO USE REACT
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Container  className="mt-5">
		<Users />
		<Table />
	</Container>
);
