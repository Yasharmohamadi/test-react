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

// *** work with class and state
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

		this.changeUsersHandler = this.changeUsersHandler.bind(this);
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

	eventHandler(event) {
		console.log(event.target);
	}

	render() {
		return (
			<div>
				{/* <Users {...this.state.users[0]} />
				<Users {...this.state.users[1]} />
				<Users {...this.state.users[2]} /> */}
				{/* we can also write following script for send prps */}
				{this.state.users.map((user) => (
					<div key={user.id}>
						<Users {...user} />
					</div>
				))}

				<hr />
				<hr />
				{/* first way for send input to function */}
				<button onClick={this.changeUsersHandler}>
					<h3>Change Names</h3>
				</button>

				<hr />
				<hr />

				{/* second way for send input to function */}
				<button onClick={() => this.lowerHandler()}>
					<h3>-</h3>
				</button>
				<button>
					<h3>{this.state.count}</h3>
				</button>
				{/* third way for send input to function */}
				<button onClick={this.adderHandler.bind(this)}>
					<h3>+</h3>
				</button>

				<hr />
				<hr />

				<button onClick={(event) => this.eventHandler(event)}>
					<h3>Event</h3>
				</button>

				<hr />
				<hr />
			</div>
		);
	}
}
