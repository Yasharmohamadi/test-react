import React from "react";

// export default function Users ({id, name: color}) {   // set new name for props name
// export default function Users(id = 3, name = 'Color') {  // default value for props
export default function Users(props) {
    // let {id, name} = props; // store props value in this obj
	return (
		<div>
			<h1>{props.id}. {props.name} {props.children}</h1>
		</div>
	);
}

// Users.defaultProps = { // default value for props
//     id: 3,
//     name: 'Color'
// }