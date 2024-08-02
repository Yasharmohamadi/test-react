import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../style.css";

export default function Panel() {
	return (
		<div>
			<h1>Panel</h1>
			<Link to="signin">
				<Button variant="secondary" >
					Signin
				</Button>
			</Link>
			<Link to="login" className="button">
				<Button variant="secondary" >
					Login
				</Button>
			</Link>
			<Outlet />
		</div>
	);
}
