import React from "react";
import Users from "./Users";
import TableGrid from "./TableGrid";
import { Route, Routes, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Button } from "@mui/material";
import { TableChart, People, Home } from "@mui/icons-material";

export default function Main() {
	return (
		<Container className="mt-5">
			

			<Link to="/">
				<Button
					color="warning"
					variant="contained"
					startIcon={<Home />}
				>
					Home
				</Button>
			</Link>
			<Link to="/users">
				<Button
					color="primary"
					variant="contained"
					startIcon={<People />}
				>
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

            <Routes>
				<Route path="/" />
				<Route path="/users" element={<Users />} />
				<Route path="/table" element={<TableGrid />} />
			</Routes>
		</Container>
	);
}
