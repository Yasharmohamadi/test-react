import React, { useState } from "react";
import { Table, Container, Alert } from "react-bootstrap";

export default function Users () {

	const [users, setUsers] = useState([])

	fetch("https://jsonplaceholder.typicode.com/users", {
		method: "GET",
	})
		.then((response) => response.json())
		.then((data) => setUsers(data))
		.catch((err) => console.log(err));

		return (
			<Container className="mt-5">
				{users.length > 0 ? (
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Email</th>
								<th>Phone</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr key={user.id}>
									<td>{user.id}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
								</tr>
							))}
						</tbody>
					</Table>
				) : (
					<Alert variant="danger">Your database is not correct !</Alert>
				)}
			</Container>
		);
}
