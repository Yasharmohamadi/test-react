import React, { useState } from "react";
import { Table, Container } from "react-bootstrap";
import { Person, Delete } from "@mui/icons-material";
import { Alert, Button } from "@mui/material";

export default function Users() {
	const [users, setUsers] = useState([]);

	fetch("https://jsonplaceholder.typicode.com/users", {
		method: "GET",
	})
		.then((response) => response.json())
		.then((data) => setUsers(data))
		.catch((err) => console.log(err));

	return (
		<Container className="mt-5">
			{users.length > 0 ? (
				<div>
					<Alert variant="filled" severity="success">
						We Got your Users.
					</Alert>
					<br />
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Email</th>
								<th>Phone</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr key={user.id}>
									<td>{user.id}</td>
									<td>
										<Person />
										{user.name}
									</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
									<td>
										<Button
											color="error"
											variant="contained"
											startIcon={<Delete />}
										>
											Delete
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			) : (
				<Alert severity="error">This is an error Alert.</Alert>
			)}
		</Container>
	);
}
