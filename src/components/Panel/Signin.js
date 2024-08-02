import React from "react";
import { Typography } from "@mui/material";
import { Form, InputGroup, Button } from "react-bootstrap";

export default function Signin() {
	return (
		<div>
			<InputGroup className="mb-3 mt-3">
				<Typography variant="h2" className="mt-4">
					{" "}
					Signin
				</Typography>
			</InputGroup>

			<InputGroup className="mb-3 mt-3">
				<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
				<Form.Control placeholder="Username" />
			</InputGroup>

			<InputGroup className="mb-3">
				<Form.Control placeholder="Enter Your Email ..." />
				<InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
			</InputGroup>

			<InputGroup className="mb-3">
				<Form.Control placeholder="Enter Your Password ..." />
			</InputGroup>

			<div className="d-grid gap-2">
				<Button variant="secondary" size="lg">
        Signin
				</Button>
			</div>
		</div>
	);
}
