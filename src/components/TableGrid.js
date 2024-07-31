import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

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

	const [rows, setRow] = useState([
		{
			id: 1,
			name: "Leanne Graham",
			phone: "1-770-736-8031 x56442",
		},
		{
			id: 2,
			name: "Ervin Howell",
			phone: "010-692-6593 x09125",
		},
		{
			id: 3,
			name: "Clementine Bauch",
			phone: "1-463-123-4447",
		},
		{
			id: 4,
			name: "Patricia Lebsack",
			phone: "493-170-9623 x156",
		},
		{
			id: 5,
			name: "Chelsey Dietrich",
			phone: "(254)954-1289",
		},
		{
			id: 6,
			name: "Mrs. Dennis Schulist",
			phone: "1-477-935-8478 x6430",
		},
		{
			id: 7,
			name: "Kurtis Weissnat",
			phone: "210.067.6132",
		},
		{
			id: 8,
			name: "Nicholas Runolfsdottir",
			phone: "586.493.6943 x140",
		},
		{
			id: 9,
			name: "Glenna Reichert",
			phone: "(775)976-6794 x41206",
		},
		{
			id: 10,
			name: "Clementina DuBuque",
			phone: "024-648-3804",
		},
	]);

	return (
		<div>
			<br />
			<DataGrid rows={rows} columns={columns} checkboxSelection />
		</div>
	);
}
