import React from "react";

// export default function Users ({id, name: color}) {   // set new name for props name
// export default function Users(id = 3, name = 'Color') {  // default value for props

// create  component with function

// export default function Users(props) {
//     // let {id, name} = props; // store props value in this obj
// 	return (
// 		<div>
// 			<h1>{props.id}. {props.name} {props.children}</h1>
// 		</div>
// 	);
// }

// create  component with class
export default class Users extends React.Component {
	render() {
		return (
			<div>
				<h1>
					{this.props.id}. {this.props.name} {this.props.children}
				</h1>
			</div>
		);
	}
}

// Users.defaultProps = { // default value for props
//     id: 3,
//     name: 'Color'
// }
