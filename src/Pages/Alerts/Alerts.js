import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";

export default function Alerts() {
	return (
		<div>
			<Button
				color="error"
				variant="contained"
				onClick={() => toast("hi, I'm Alert !")}
			>
				Click to show Alert !
			</Button>
			<ToastContainer />
		</div>
	);
}
