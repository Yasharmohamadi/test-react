import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { UsersData } from "../Data";

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
					<Button color="primary" variant="contained" startIcon={<Edit />}>
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
					<Button color="error" variant="contained" startIcon={<Delete />}>
						Delete
					</Button>
				</div>
			),
		},
	]);

	const [rows, setRow] = useState(UsersData);

	return (
		<div>
			<h1>TableGrid</h1>

			<DataGrid rows={rows} columns={columns} checkboxSelection />
		</div>
	);
}
