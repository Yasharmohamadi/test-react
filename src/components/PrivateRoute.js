import React from "react";
import { userIsLogin } from "../Utils";
import { Link, Outlet } from "react-router-dom";
import { Alert } from "@mui/material";

export default function PrivateRoute() {
	let checkUser = userIsLogin("s yashar");
	console.log(checkUser);

	return (
		<div>
			<br />
			<br />
			{checkUser ? (
				<Outlet />
			) : (
				<Link to="/" style={{ color: "black", textDecoration: "none" }}>
					<Alert severity="error">
						You are not Login, Please Click here and Go to Home
					</Alert>
				</Link>
			)}
		</div>
	);
}