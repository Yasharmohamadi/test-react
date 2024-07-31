import React from "react";
import Users from "./Users";
import TableGrid from "./TableGrid";
import Posts from "./Posts";
import MainPost from "./MainPost";
import { Route, Routes, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Button } from "@mui/material";
import { TableChart, People, Home, DynamicFeed } from "@mui/icons-material";

export default function Main() {
	return (
		<Container className="mt-5">
			<Link to="/">
				<Button color="warning" variant="contained" startIcon={<Home />}>
					Home
				</Button>
			</Link>
			<Link to="/users">
				<Button color="primary" variant="contained" startIcon={<People />}>
					Users
				</Button>
			</Link>
			<Link to="/table">
				<Button
					color="secondary"
					variant="contained"
					startIcon={<TableChart />}
				>
					Table
				</Button>
			</Link>
			<Link to="/posts">
				<Button color="success" variant="contained" startIcon={<DynamicFeed />}>
					Posts
				</Button>
			</Link>

			<Routes>
				<Route path="/" />
				<Route path="/users" element={<Users />} />
				<Route path="/table" element={<TableGrid />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/posts/:postID" element={<MainPost />} />
			</Routes>
			<br />
			<br />
			<h1>Test Project with REACT</h1>
		</Container>
	);
}
