import React from "react";
import { Button } from "@mui/material";

import LibraryHoc from "./LibraryHoc";

function Angularjs({ title }) {
	return (
		<div>
			<Button variant="outlined" color="primary" className="hook_button">
				{title}
			</Button>
		</div>
	);
}

export default LibraryHoc(Angularjs, "Angular js");
