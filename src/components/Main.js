import React, { useState } from "react";
import "./style.css";
import routes from "../Routes";
import { Route, Routes, Link, useRoutes, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Alert, Button } from "@mui/material";
import {
	TableChart,
	People,
	Home,
	DynamicFeed,
	AccountCircle,
} from "@mui/icons-material";

export default function Main() {
	let router = useRoutes(routes);

	return (
		<Container className="mt-5">
			<NavLink
				className={`button ${(link) => (link.isActive ? "active" : "")}`}
				to="/home"
			>
				<Button color="primary" variant="contained" startIcon={<Home />}>
					Home
				</Button>
			</NavLink>

			<NavLink className="button" to="/users">
				<Button color="primary" variant="contained" startIcon={<People />}>
					Users
				</Button>
			</NavLink>
			<NavLink className="button" to="/table">
				<Button color="primary" variant="contained" startIcon={<TableChart />}>
					Table
				</Button>
			</NavLink>
			<NavLink className="button" to="/posts">
				<Button color="primary" variant="contained" startIcon={<DynamicFeed />}>
					Posts
				</Button>
			</NavLink>
			<NavLink className="button" to="/panel">
				<Button color="primary" variant="contained" startIcon={<AccountCircle />}>
				Panel
				</Button>
			</NavLink>
			{/* <Routes>
				<Route path="/" />
				<Route path="/users" element={<Users />} />
				<Route path="/table" element={<TableGrid />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/posts/:postID" element={<MainPost />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/about" element={<About />}>
					<Route path="setting" element={<h3>Setting</h3>} />
					<Route path="dashboard" element={<h3>Dashboard</h3>} />
				</Route>
			</Routes> */}
			<hr />

			{router}

			<hr />
			<Alert severity="info">Test Project by REACT</Alert>
		</Container>
	);
}
