import Users from "../Users/Users";
import React from "react";

// export default function Main () {
// let users = [
// {id: 1, name: 'Jack',},
// {id: 2, name: 'John',},
// {id: 3, name: 'John',}
// ]
//     return (
//         <div>
//             <Users {...users[0]}/>
//             <Users id={2} name={5}>
//                 <span>(Child)</span>
//             </Users>
//             {/* <Users/> */}
//         </div>
//     )
// }

// work with class and state
export default class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [
				{ id: 1, name: "Adolf" },
				{ id: 2, name: "Joseph" },
				{ id: 3, name: "Isaac" },
			],
		};

		// setTimeout(() => {
		//     this.setState({
		//         users: [
		//             { id: 1, name: "Tom" },
		//             { id: 2, name: "Donald" },
		//             { id: 3, name: "Winston" },
		//         ],
		//     });
		// }, 1500);
	}

	clickHandler() {
		alert("Clicked !");
	}

	render() {
		return (
			<div>
				<button onClick={this.clickHandler}>
                    <h2>Click Here</h2>
                </button>
				<Users {...this.state.users[0]} />
				<Users {...this.state.users[1]} />
				<Users {...this.state.users[2]} />
			</div>
		);
	}
}
