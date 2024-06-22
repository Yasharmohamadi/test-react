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
			count: 0,
		};
	}

	changeUsersHandler() {
		this.setState({
			users: [
				{ id: 1, name: "Tom" },
				{ id: 2, name: "Donald" },
				{ id: 3, name: "Winston" },
			],
		});
	}

	adderHandler() {
		this.setState((prevState) => {
			return { count: prevState.count + 1 };
		});
	}

	lowerHandler() {
		this.setState((prevState) => {
			return { count: prevState.count - 1 };
		});
	}

	render() {
		return (
			<div>
				<Users {...this.state.users[0]} />
				<Users {...this.state.users[1]} />
				<Users {...this.state.users[2]} />

				<hr />
				<hr />

				<button onClick={this.changeUsersHandler.bind(this)}>
					<h3>Change Usernames</h3>
				</button>

				<hr />
				<hr />

				<button onClick={this.lowerHandler.bind(this)}>
					<h3>-</h3>
				</button>
				<button>
					<h3>{this.state.count}</h3>
				</button>
				<button onClick={this.adderHandler.bind(this)}>
					<h3>+</h3>
				</button>

				<hr />
				<hr />
			</div>
		);
	}
}
