import React from "react";
import { FaUserSecret  } from "react-icons/fa";

// *** set new name for props name in functional component
// export default function Users ({id, name: username}) {

// *** set default value for props in functional component
// export default function Users(id = 3, name = 'User') {

// export default function Users(props) {
// 	// let {id, name} = props; // store props value in this obj
// 	return (
// 		<div>
// 			<h3>
// 				{props.id}. {props.name} {props.children}
// 			</h3>
// 		</div>
// 	);
// }

export default class Users extends React.Component {
	render() {
		return (
				<h2 onClick={this.props.onRemove}>
					<FaUserSecret  />
					 {this.props.name} : {this.props.children}
				</h2>
		);
	}
}

// *** set default value for props in class component
// Users.defaultProps = {
//     id: 3,
//     name: 'User'
// }

// Users.propTypes = {
// 	name: propTypes.string
// }
