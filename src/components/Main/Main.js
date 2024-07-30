import React from "react";
import { Table, Container, Alert } from "react-bootstrap";

export default class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					posts: data,
				});
			});
	}

	render() {
		return (
			<Container className="mt-5">
				{this.state.posts.length > 0 ? (
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Email</th>
								<th>Phone</th>
							</tr>
						</thead>
						{this.state.posts.map((post) => (
							<tbody>
								<tr>
									<td>{post.id}</td>
									<td>{post.name}</td>
									<td>{post.email}</td>
									<td>{post.phone}</td>
								</tr>
							</tbody>
						))}
					</Table>
				) : (
					<Alert variant="danger">Your database is not correct !</Alert>
				)}
			</Container>
		);
	}
}
