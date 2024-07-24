import React from "react";
import Users from "../Users/Users";
import ChangeNames from "../ChangeNames/ChangeNames";
import Counter from "../Counter/Counter";
import Input from "../Input/Input";
import CheckBox from "../CheckBox/CheckBox";
// import Alert from "react-bootstrap/Alert";
// import Button from "react-bootstrap/Button";
import { Button, Alert, Card } from "react-bootstrap";
import { Holder } from "holderjs";

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
			isLoading: false,
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

	loadingHandler() {
		this.setState({
			isLoading: true,
		});

		setTimeout(() => {
			this.setState({
				isLoading: false,
			});
		}, 1000);
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
				<br />

				{/* Change names with ChangeNames component */}
				<ChangeNames onClick={this.changeUserHnadler} />
				<br />
				<br />


				{/* Counter Section */}
				<Counter
					count={this.state.count}
					add={this.addCountHandler}
					sub={this.subCountHandler}
				/>
				<br />

				{/* Input Section */}
				<Input value={this.state.inputValue} onChange={this.inputHandler} />
				<br />

				{/* CheckBox Section */}
				<CheckBox
					checked={this.state.checkValue}
					onChange={this.checkHandler}
				/>
				<br />

				{/* Buttons section BTS */}
				<button className="btn btn-success">Success</button>
				<button className="btn btn-danger">Danger</button>
				<br />
				<br />

				{/* Alert section react-bootstrap */}
				{/* onClose={} */}
				<Alert variant="success" dismissible>
					<Alert.Heading>Success !</Alert.Heading>
					This is <Alert.Link href="#">react-bootstrap</Alert.Link>
				</Alert>
				<br />

				{/* Buttons section rBTS */}
				<Button variant="outline-primary" size="lg">
					Large
				</Button>
				<Button variant="outline-primary" size="md" disabled>
					medium
				</Button>
				<Button variant="outline-primary" size="sm">
					small
				</Button>
				<br />
				<br />

				{/* block level Button with rbts*/}
				{/* Loading btn with rbts */}
				<div className="d-grid gap-2">
					<Button
						variant="primary"
						onClick={this.loadingHandler.bind(this)}
						disabled={this.state.isLoading}
					>
						{this.state.isLoading ? "Loading ..." : "Download"}
					</Button>
				</div>

				<br />

				{/* Card Component */}
				<div className="card-box">
					<Card style={{ width: "12rem" }}>
						<Card.Img variant="top" src="holder.js/100px120"></Card.Img>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">See More</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: "12rem" }}>
						<Card.Img variant="top" src="holder.js/100px120"></Card.Img>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">See More</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: "12rem" }}>
						<Card.Img variant="top" src="holder.js/100px120"></Card.Img>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">See More</Button>
						</Card.Body>
					</Card>
				</div>
			</div>
		);
	}
}
