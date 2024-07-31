import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { Person, Delete } from "@mui/icons-material";
import { Alert, Button } from "@mui/material";

export default function Users() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => setUsers(data))
			.catch((err) => console.log(err));
	}, []);

	
	const deleteHandler = (userID) => {
		let filteredUsers = users.filter(user => {
			return user.id !== userID
		})

		setUsers(filteredUsers)
	}

	return (
		<div>
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
											onClick={() => deleteHandler(user.id)}
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
		</div>
	);
}
