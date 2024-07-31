import React from "react";
import Users from "./Users";
import TableGrid from "./TableGrid";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Button } from "@mui/material";
import { ArrowCircleRight } from "@mui/icons-material";

export default function Main() {
	return (
		<Container className="mt-5">
			<Routes>
				<Route path="/users" element={<Users />} />
				<Route path="/table" element={<TableGrid />} />
			</Routes>

			<a href="/users">
				<Button
					color="primary"
					variant="contained"
					endIcon={<ArrowCircleRight />}
				>
					Users Pages
				</Button>
			</a>
			<br />
			<br />
			<a href="/table">
				<Button
					color="secondary"
					variant="contained"
					endIcon={<ArrowCircleRight />}
				>
					Table Pages
				</Button>
			</a>
		</Container>
	);
}
