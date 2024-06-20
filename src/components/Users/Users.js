import React from "react";


/*  
======== FUNCTIONAL COMPONENTS ========
*/  


// create  component with function


// set new name for props name in functional component
// export default function Users ({id, name: username}) {   

// set default value for props in functional component
// export default function Users(id = 3, name = 'User') {  

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
//     name: 'User'
// }



/*  
========== CLASS COMPONENTS ===========
*/  

// create  component with class
export default class Users extends React.Component {
	render(name = 'User') {
		return (
			<div>
				<h1>
					{this.props.id}. {this.props.name} {this.props.children}
				</h1>
			</div>		
		);
	}	
}

// set default value for props in class component
Users.defaultProps = { 
    id: 3,
    name: 'User'
}
