import React from "react";
import Users from "../Users/Users";
import ChangeNames from "../ChangeNames/ChangeNames";

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

		this.changeUserHnadler = this.changeUserHnadler.bind(this)

	}
	
	changeUserHnadler () {
		this.setState({
			users: [
				{ id: 1, name: "Tom" },
				{ id: 2, name: "Donald" },
				{ id: 3, name: "Winston" },
			]
		})

	}

	render () {
		return (
			<div>
				{/* Send users to Users component */}
				{this.state.users.map((user) => (
					<Users {...user} />
				))}

				{/* Change names with ChangeNames component */}
				<ChangeNames onClick={this.changeUserHnadler} />
			</div>
		)
	}
}

// export default function Main() {
// 	let users = [
// 		{ id: 1, name: "Adolf" },
// 		{ id: 2, name: "Joseph" },
// 		{ id: 3, name: "Isaac" },
// 	];

// 	const parentHandler = (users) => {
// 		users = [
// 			{ id: 1, name: "Tom" },
// 			{ id: 2, name: "Donald" },
// 			{ id: 3, name: "Winston" },
// 		];
// 		console.log(users);
// 	};
// 	return (
// 		<div>
// 			{/* Users */}
// 			{users.map((user) => (
// 				<Users {...user} />
// 			))}

// 			{/* Change User */}
// 			<ChangeUser onClick={parentHandler} />
// 		</div>
// 	);
// }

// // *** work with class and state
// export default class Main extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			users: [
// 				{ id: 1, name: "Adolf" },
// 				{ id: 2, name: "Joseph" },
// 				{ id: 3, name: "Isaac" },
// 			],
// 			count: 0,
// 			inputValue: '',
// 			checkedValue: false,

// 		};

// 		this.changeUsersHandler = this.changeUsersHandler.bind(this);
// 		this.inputHandler = this.inputHandler.bind(this)
// 		this.checkHandler = this.checkHandler.bind(this)

// 		let PrentComponent = () => {

// 			let changeUsersHandler = () => {
// 				this.setState({
// 					users: [
// 						{ id: 1, name: "Tom" },
// 						{ id: 2, name: "Donald" },
// 						{ id: 3, name: "Winston" },
// 					],
// 				});
// 			}
// 		}
// 	}

// 	// adderHandler() {
// 	// 	this.setState((prevState) => {
// 	// 		return { count: prevState.count + 1 };
// 	// 	});
// 	// }

// 	// lowerHandler() {
// 	// 	this.setState((prevState) => {
// 	// 		return { count: prevState.count - 1 };
// 	// 	});
// 	// }

// 	// eventHandler(event) {
// 	// 	console.log(event.target);
// 	// }

// 	// inputHandler(event) {
// 	// 	this.setState({inputValue: event.target.value})
// 	// }

// 	// checkHandler(event) {
// 	// 	this.setState({checkedValue: event.nativeEvent.target.checked})
// 	// 	console.log(event.nativeEvent.target.checked);
// 	// }

// 	render() {
// 		return (
// 			<div>
// 				{/* <Users {...this.state.users[0]} />
// 				<Users {...this.state.users[1]} />
// 				<Users {...this.state.users[2]} /> */}
// 				{/* we can also write following script for send prps */}
// 				{this.state.users.map((user) => (
// 					<div key={user.id}>
// 						<Users {...user} />
// 					</div>
// 				))}

// 				<ChangeUser onClick={this.changeUsersHandler}/>

// 				{/* second way for send input to function */}
// 				{/* <button onClick={() => this.lowerHandler()}>
// 					<h3>-</h3>
// 				</button> */}
// 				{/* <button>
// 					<h3>{this.state.count}</h3>
// 				</button> */}
// 				{/* third way for send input to function */}
// 				{/* <button onClick={this.adderHandler.bind(this)}>
// 					<h3>+</h3>
// 				</button> */}
// {/*
// 				<hr />

// 				<button onClick={(event) => this.eventHandler(event)}>
// 					<h3>Event</h3>
// 				</button>

// 				<hr /> */}

// 				{/* <form>
// 					<input type="text" value={this.state.inputValue} onChange={this.inputHandler} placeholder="type to set a value ..." />
// 					<br />
// 					<label htmlFor="checkBox">checkBox</label>
// 					<input type="checkBox" id="checkBox" checked={this.state.checkedValue} onChange={this.checkHandler}></input>
// 				</form> */}
// 			</div>
// 		);
// 	}
// }
