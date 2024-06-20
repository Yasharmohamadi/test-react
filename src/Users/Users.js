import React from "react";


/*  
======== FUNCTIONAL COMPONENTS ========
*/  


// create  component with function


// set new name for props name in functional component
// export default function Users ({id, name: color}) {   

// set default value for props in functional component
// export default function Users(id = 3, name = 'Color') {  

// export default function Users(props) {
//     // let {id, name} = props; // store props value in this obj
// 	return (
// 		<div>
// 			<h1>{props.id}. {props.name} {props.children}</h1>
// 		</div>
// 	);
// }

// set default value for props in functional component
// Users.defaultProps = { 
//     id: 3,
//     name: 'Color'
// }



/*  
========== CLASS COMPONENTS ===========
*/  

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

