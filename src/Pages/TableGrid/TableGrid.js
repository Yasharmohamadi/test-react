import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { UsersData } from "../../Data";
import { Modal } from "react-bootstrap";

export default function TableGrid(props) {
	const [columns, setColumn] = useState([
		{ field: "id", headerName: "ID", width: 50, editable: true },
		{ field: "name", headerName: "Name", width: 150 },
		{ field: "phone", headerName: "Phone", width: 150 },
		{
			field: "edit",
			headerName: "Edit",
			width: 120,
			renderCell: (o) => (
				<div>
					<Button
						color="primary"
						variant="contained"
						startIcon={<Edit />}
						onClick={() => setShowEditModal(true)}
					>
						Edit
					</Button>
				</div>
			),
		},
		{
			field: "delete",
			headerName: "Delete",
			width: 150,
			renderCell: (o) => (
				<div>
					<Button
						color="error"
						variant="contained"
						startIcon={<Delete />}
						onClick={() => setShowDeleteModal(true)}
					>
						Delete
					</Button>
				</div>
			),
		},
	]);

	const [rows, setRow] = useState(UsersData);
	const [users, setUsers] = useState();
	const [userID, setUserID] = useState();
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);

	const removeHandler = () => {
		console.log("removed");
		setShowDeleteModal(false);
	};
	const editHandler = () => {
		console.log("edit");
		setShowEditModal(false);
	};

	// useEffect(async() => {
	// 	await fetch("https://react-app-e0af5-default-rtdb.firebaseio.com/users.json", {
	// 		method: "GET",
	// 	})
	// 		.then((response) => console.log(response))
	// 		.then((data) => {
	// 			console.log(Object.entries(data));
	// 			setUsers(Object.entries(data));
	// 		});
	// }, []);

	return (
		<div>
			<h1>TableGrid</h1>
			<DataGrid rows={rows} columns={columns} checkboxSelection />

			<Modal
				show={showDeleteModal}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Body>
					<h3>Do you want to delete this user?</h3>
				</Modal.Body>
				<Button
					className="m-2 mb-1"
					color="primary"
					variant="contained"
					onClick={() => setShowDeleteModal(false)}
				>
					No, Close
				</Button>
				<Button
					className="m-2"
					color="error"
					variant="contained"
					onClick={() => removeHandler()}
				>
					Yes, Delete User
				</Button>
			</Modal>
			<Modal
				show={showEditModal}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Body>
					<h3>Do you want to edit this user?</h3>
				</Modal.Body>
				<Button
					className="m-2 mb-1"
					color="primary"
					variant="contained"
					onClick={() => setShowEditModal(false)}
				>
					No, Close
				</Button>
				<Button
					className="m-2"
					color="error"
					variant="contained"
					onClick={() => editHandler()}
				>
					Yes, Edit User
				</Button>
			</Modal>
		</div>
	);
}
