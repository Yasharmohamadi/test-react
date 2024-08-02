import React from "react";

export default function Login() {
	return (
		<div>
			<form>
				<h1>Login</h1>
				<input
					placeholder="Username"
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
					value="Login"
				/>
			</form>
		</div>
	);
}
