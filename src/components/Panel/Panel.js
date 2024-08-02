import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";

export default function Panel() {
	return (
		<div>
			<h1>Panel</h1>
			<Link to="signin">
				<Button color="secondary" variant="outlined">
					Signin
				</Button>
			</Link>
			<Link to="login">
				<Button color="secondary" variant="outlined">
					Login
				</Button>
			</Link>
			<Outlet />
		</div>
	);
}
