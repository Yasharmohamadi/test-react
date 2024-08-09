import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Person, Delete } from "@mui/icons-material";
import { Alert } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./Users.css";
import { UsersData } from "../../Data";


export default function Users() {
	const [users, setUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageiniatedTodos, setPageiniatedTodos] = useState([]);
	let pageSize = 3;
	let pagesNumbers;

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((datas) => {
				setUsers(datas);
				let endIndex = pageSize * currentPage;
				let startIndex = endIndex - pageSize;
				let allShownTodos = datas.slice(startIndex, endIndex);
				setPageiniatedTodos(allShownTodos);
			})
			.catch((err) => console.log(err));
	}, []);

	const deleteHandler = (userID) => {
		let filteredUsers = users.filter((user) => {
			return user.id !== userID;
		});

		setUsers(filteredUsers);
	};

	useEffect(() => {
		let endIndex = pageSize * currentPage;
		let startIndex = endIndex - pageSize;
		let allShownTodos = users.slice(startIndex, endIndex);
		setPageiniatedTodos(allShownTodos);
	}, [currentPage])
	
	const changePaginate = (newPage) => {
		setCurrentPage(newPage);
	};
	
		const pagesCount = Math.ceil(users.length / pageSize);
		pagesNumbers = Array.from(Array(pagesCount).keys());

	return (
		<div>
			<h1>Users</h1>

			{!users ? (
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
							{pageiniatedTodos.map((user) => (
								<tr key={user.id}>
									<td>{user.id}</td>
									<td>
										<Person />
										{user.name}
									</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
									<td>
										<Delete onClick={() => deleteHandler(user.id)} />
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<div className="pagination_container">
						{pagesNumbers.map((pageNumber) => (
							<NavLink
							key={pageNumber + 1}
								variant="outlined"
								className={
									pageNumber + 1 === currentPage
										? "pagination_btn selected"
										: "pagination_btn"
								}
								onClick={() => changePaginate(pageNumber + 1)}
							>
								{pageNumber + 1}
							</NavLink>
						))}
					</div>
				</div>
			) : (
				<Alert severity="error">
					an Error appeared in Receiving Datas from{" "}
					<a href="https://jsonplaceholder.typicode.com/">
						jsonplaceholder.typicode.com.
					</a>
					<br />
					Please Check Your Internet Connection !
				</Alert>
			)}
		</div>
	);
}
