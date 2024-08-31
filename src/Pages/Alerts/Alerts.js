import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";

export default function Alerts() {
	return (
		<div>

			<Button color="error" variant="outlined" onClick={() => toast.error("")}>
				toast error
			</Button>
			<br />
			<Button
				color="success"
				variant="outlined"
				onClick={() => toast.success("")}
			>
				toast success
			</Button>
			<br />
			<Button color="info" variant="outlined" onClick={() => toast.info("")}>
				toast info
			</Button>
			<br />
			<Button
				color="warning"
				variant="outlined"
				onClick={() => toast.warning("")}
			>
				toast warning
			</Button>
			<br />


			<ToastContainer />
		</div>
	);
}
