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
			inputValue: '',
			checkedValue: false,

		};

		this.changeUsersHandler = this.changeUsersHandler.bind(this);
		this.inputHandler = this.inputHandler.bind(this)
		this.checkHandler = this.checkHandler.bind(this)
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

	inputHandler(event) {
		this.setState({inputValue: event.target.value})
	}

	checkHandler(event) {
		this.setState({checkedValue: event.nativeEvent.target.checked})
		console.log(event.nativeEvent.target.checked);
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
				{/* first way for send input to function */}
				<button onClick={this.changeUsersHandler}>
					<h3>Change Names</h3>
				</button>

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

				<button onClick={(event) => this.eventHandler(event)}>
					<h3>Event</h3>
				</button>

				<hr />
				
				<form>
					<input type="text" value={this.state.inputValue} onChange={this.inputHandler} placeholder="type to set a value ..." />
					<br />
					<label htmlFor="checkBox">checkBox</label>
					<input type="checkBox" id="checkBox" checked={this.state.checkedValue} onChange={this.checkHandler}></input>
				</form>
			</div>
		);
	}
}
