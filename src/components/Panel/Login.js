import React from "react";
import { Typography } from "@mui/material";
import { Form, InputGroup, Button } from "react-bootstrap";

export default function Login() {
	return (
		<div>
			<InputGroup className="mb-3 mt-3">
				<Typography variant="h2" className="mt-4">
					{" "}
					Login
				</Typography>
			</InputGroup>

			<InputGroup className="mb-3 mt-3">
				<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
				<Form.Control placeholder="Username" />
			</InputGroup>

			<InputGroup className="mb-3">
				<Form.Control placeholder="Enter Your Password ..." />
			</InputGroup>

			<div className="d-grid gap-2">
				<Button variant="secondary" size="lg">
					Login
				</Button>
			</div>
		</div>
	);
}
