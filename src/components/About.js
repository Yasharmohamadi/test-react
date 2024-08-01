import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Info } from "@mui/icons-material";



export default function About() {
	return (
		<div>
			<br />
			<br />
			<h1>About</h1>
			<Link to="/about">
				<Button color="secondary" variant="outlined">
					Dashboard
				</Button>
			</Link>
			<Link to="/about">
				<Button color="secondary" variant="outlined">
					Setting
				</Button>
			</Link>
		</div>
	);
}
