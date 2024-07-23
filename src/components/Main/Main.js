import React from "react";
import Users from "../Users/Users";
import ChangeNames from "../ChangeNames/ChangeNames";
import Counter from "../Counter/Counter";
import Input from "../Input/Input";
import CheckBox from "../CheckBox/CheckBox";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

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
			inputValue: "",
			checkValue: true,
		};

		this.changeUserHnadler = this.changeUserHnadler.bind(this);
		this.addCountHandler = this.addCountHandler.bind(this);
		this.subCountHandler = this.subCountHandler.bind(this);
		this.inputHandler = this.inputHandler.bind(this);
		this.checkHandler = this.checkHandler.bind(this);
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

	removeUserHandler(userID) {
		let newUsers = [...this.state.users];

		let mainIndex = this.state.users.findIndex((user) => {
			return user.id === userID;
		});

		newUsers.splice(mainIndex, 1);

		this.setState({
			users: newUsers,
		});
	}

	addCountHandler() {
		this.setState((prevState) => {
			return { count: prevState.count + 1 };
		});
	}

	subCountHandler() {
		this.setState((prevState) => {
			return { count: prevState.count - 1 };
		});
	}

	inputHandler(event) {
		this.setState({
			inputValue: event.target.value,
		});
	}

	checkHandler(event) {
		this.setState({
			checkValue: event.nativeEvent.target.checked,
		});
	}

	render() {
		return (
			<div>
				{/* Send users to Users component */}
				{this.state.users.map((user) => (
					<Users
						key={user.id}
						{...user}
						onRemove={this.removeUserHandler.bind(this, user.id)}
					>
						Don't touch me, bitch !
					</Users>
				))}
				<hr />
				<hr />

				{/* Change names with ChangeNames component */}
				<ChangeNames onClick={this.changeUserHnadler} />
				<hr />
				<hr />

				{/* Counter Section */}
				<Counter
					count={this.state.count}
					add={this.addCountHandler}
					sub={this.subCountHandler}
				/>
				<hr />
				<hr />

				{/* Input Section */}
				<Input value={this.state.inputValue} onChange={this.inputHandler} />
				<hr />
				<hr />

				{/* CheckBox Section */}
				<CheckBox
					checked={this.state.checkValue}
					onChange={this.checkHandler}
				/>
				<hr />
				<hr />

				{/* Buttons section BTS */}
				<button className="btn btn-success">Success</button>
				<button className="btn btn-danger">Danger</button>
				<hr />
				<hr />

				{/* Buttons section rBTS */}
				<Button variant="outline-primary" size="lg">
					Large
				</Button>
				<Button variant="outline-primary" size="md">
					medium
				</Button>
				<Button variant="outline-primary" size="sm">
					small
				</Button>
				<hr />
				<hr />

				{/* block level Button with rbts*/}
				<div className="d-grid gap-2">
					<Button variant="primary">medium</Button>
				</div>

				<hr />
				<hr />
				{/* Alert section react-bootstrap */}
				{/* onClose={} */}
				<Alert variant="success" dismissible>
					<Alert.Heading>Success !</Alert.Heading>
					This is <Alert.Link href="#">react-bootstrap</Alert.Link>
				</Alert>
				<hr />
				<hr />
			</div>
		);
	}
}
