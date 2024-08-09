import React from 'react'
import { Button } from "@mui/material";

import ParentHoc from './ParentHoc'

function Angularjs({title}) {
    return (
		<div>
			<Button variant="outlined" color="primary" className="hook_button">
				{title}
			</Button>
		</div>
	);
}

export default ParentHoc(Angularjs, 'Angular js') 
