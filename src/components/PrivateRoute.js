import React, { useEffect, useState } from "react";
import { canSeePosts } from "../Utils";
import { Link, Outlet } from "react-router-dom";
import { Alert } from "@mui/material";

export default function PrivateRoute({ children }) {
	const [checkUser, setCheck] = useState(false);

	useEffect(() => {
		setCheck(canSeePosts());
		console.log(checkUser);
	}, []);

	return (
		<div>
			<br />
			<br />
			{checkUser ? (
				children
			) : (
				<Link to="/" style={{ color: "black", textDecoration: "none" }}>
					<Alert severity="error">
						Please Enter the right Code :) 
					</Alert>
				</Link>
			)}
		</div>
	);
}
