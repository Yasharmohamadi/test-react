import React from "react";

import { Route, Routes, Link, useRoutes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Button } from "@mui/material";
import { TableChart, People, Home, DynamicFeed, Info } from "@mui/icons-material";

export default function Main() {
	let router = useRoutes([]);

	return (
		<Container className="mt-5">
			<Link to="/">
				<Button color="primary" variant="contained" startIcon={<Home />}>
					Home
				</Button>
			</Link>
			<Link to="/users">
				<Button color="success" variant="contained" startIcon={<People />}>
					Users
				</Button>
			</Link>
			<Link to="/table">
				<Button color="warning" variant="contained" startIcon={<TableChart />}>
					Table
				</Button>
			</Link>
			<Link to="/posts">
				<Button color="error" variant="contained" startIcon={<DynamicFeed />}>
					Posts
				</Button>
			</Link>
			<Link to="/about">
				<Button color="secondary" variant="contained" startIcon={<Info />}>
					About
				</Button>
			</Link>

			{/* <Routes>
				<Route path="/" />
				<Route path="/users" element={<Users />} />
				<Route path="/table" element={<TableGrid />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/posts/:postID" element={<MainPost />} />
				<Route path="*" element={<NotFound />} />
			</Routes> */}
			{router}
			{/* در پروژه های بزرگ روت هارا از فایل دیگری ایمپورت میکنیم */}
			<br />
			<br />
			<h1>Test Project by REACT</h1>
		</Container>
	);
}
