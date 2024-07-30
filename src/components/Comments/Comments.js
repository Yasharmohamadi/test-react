import { useState } from "react";
import { Table, Container, Alert } from "react-bootstrap";

export default function Comments() {
	const [users, setUsers] = useState([]);

	fetch("https://jsonplaceholder.typicode.com/comments", {
		method: "GET",
	})
		.then((response) => response.json())
		.then((data) => setUsers(data));

	return (
		<Container className="mt-5">
			{users.length > 0 ? (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Email</th>
							<th>Comment</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id}>
								<td>{user.email}</td>
								<td>{user.body}</td>
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
