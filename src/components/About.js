import React from "react";
import { Link, Outlet} from "react-router-dom";
import { Button } from "@mui/material";

export default function About() {
	return (
		<div>
			<h1>About</h1>
			<Link to="dashboard">
				<Button color="secondary" variant="outlined">
					Dashboard
				</Button>
			</Link>
			<Link to="setting">
				<Button color="secondary" variant="outlined">
					Setting
				</Button>
			</Link>
			<Outlet />
		</div>
	);
}
