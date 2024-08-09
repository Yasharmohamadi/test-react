import React, { useState } from "react";

export default function Signin() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const registerHandler = (event) => {
		event.preventDefault();

		let newUser = [username, email, password];

		// fetch("https://react-app-e0af5-default-rtdb.firebaseio.com/users.json", {
		// 	method: "POST",
		// 	body: JSON.stringify(newUser),
		// })
		// 	.then((response) => console.log(response))
		// 	.fetch((error) => console.log(error));
	};

	return (
		<div>
			<form onSubmit={registerHandler}>
				<h1> Signin</h1>
				<input
					placeholder="Username"
					value={username}
					onChange={(event) => setUsername(event.target.value)}
					style={{
						width: "95%",
						border: "1px solid #ccc",
						margin: "10px",
						padding: "10px",
						borderRadius: "5px",
					}}
				/>
				<input
					placeholder="Email ..."
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					style={{
						width: "95%",
						border: "1px solid #ccc",
						margin: "10px",
						padding: "10px",
						borderRadius: "5px",
					}}
				/>
				<input
					placeholder="Password ..."
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					style={{
						width: "95%",
						border: "1px solid #ccc",
						margin: "10px",
						padding: "10px",
						borderRadius: "5px",
					}}
				/>
				<input
					placeholder="Password ..."
					type="submit"
					style={{
						width: "95%",
						border: "1px solid #ccc",
						margin: "10px",
						padding: "10px",
						borderRadius: "5px",
					}}
					value="Signin"
				/>
			</form>
		</div>
	);
}
