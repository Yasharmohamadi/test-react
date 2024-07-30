import React from "react";
import { Table, Container, Alert } from "react-bootstrap";

export default class Users extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					users: data,
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<Container className="mt-5">
				{this.state.users.length > 0 ? (
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
							{this.state.users.map((user) => (
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
}
