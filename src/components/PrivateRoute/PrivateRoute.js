import React, { useEffect, useState } from "react";
import { canSeePosts } from "../../Utils";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Alert, Button } from "@mui/material";

export default function PrivateRoute({ children }) {
	const [checkUser, setCheck] = useState(false);

	let navigate = useNavigate();

	useEffect(() => {
		setCheck(canSeePosts());
	}, []);

	return (
		<div>
			{checkUser ? (
				children
			) : (
				<div>
					<Link to="/" style={{ color: "black", textDecoration: "none" }}>
						<Alert severity="error">Please Enter the right Code :)</Alert>
					</Link>
					<br />
					<Button
						color="error"
						variant="outlined"
						onClick={() => {
							navigate("/posts");
							// navigate(-1); back to previous page
							// navigate(-1, {replace: true/false}); store page in history and navigate
						}}
					>
						try again
					</Button>
					<br />
				</div>
			)}
		</div>
	);
}
