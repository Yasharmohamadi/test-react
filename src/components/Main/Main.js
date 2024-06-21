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
            count: 0
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

	changeUsersHandler() {
		this.setState({
			users: [
				{ id: 1, name: "Tom" },
				{ id: 2, name: "Donald" },
				{ id: 3, name: "Winston" },
			],
		});
	}
    
    changeCounterValue () {
        this.setState((prevState) => {
            return {count: prevState.count + 1};
        });

    }

	render() {
		return (
			<div>
				{/* <button onClick={() => this.clickHandler()}> */}
				<button onClick={this.changeUsersHandler.bind(this)}>
					<h2>Change Usernames</h2>
				</button>

				<button onClick={this.changeCounterValue.bind(this)}>
					<h2>{this.state.count}</h2>
				</button>

				<Users {...this.state.users[0]} />
				<Users {...this.state.users[1]} />
				<Users {...this.state.users[2]} />
			</div>
		);
	}
}
