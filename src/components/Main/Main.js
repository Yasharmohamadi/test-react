import React from "react";
import Users from "../Users/Users";
import ChangeNames from "../ChangeNames/ChangeNames";
import Counter from "../Counter/Counter";

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

		this.changeUserHnadler = this.changeUserHnadler.bind(this);
		this.addCountHandler = this.addCountHandler.bind(this);
		this.subCountHandler = this.subCountHandler.bind(this);
	}

	changeUserHnadler() {
		this.setState({
			users: [
				{ id: 1, name: "Tom" },
				{ id: 2, name: "Donald" },
				{ id: 3, name: "Winston" },
			],
		});
	}

	addCountHandler () {
		this.setState((prevState) => {
			return {count: prevState.count + 1}
		})
	}

	subCountHandler () {
		this.setState((prevState) => {
			return {count: prevState.count - 1}
		})
	}

	render() {
		return (
			<div>
				{/* Send users to Users component */}
				{this.state.users.map((user) => (
					<div key={user.id}>
						<Users {...user} />
					</div>
				))}

				{/* Change names with ChangeNames component */}
				<ChangeNames onClick={this.changeUserHnadler} />

				{/* Counter Section */}
				<Counter count={this.state.count} add={this.addCountHandler} sub={this.subCountHandler}/>


			</div>
		);
	}
}

// 			count: 0,
// 			inputValue: '',
// 			checkedValue: false,

// 		this.inputHandler = this.inputHandler.bind(this)
// 		this.checkHandler = this.checkHandler.bind(this)

// 	}


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
