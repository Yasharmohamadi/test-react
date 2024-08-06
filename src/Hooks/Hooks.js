import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";
import useFetch from "./useFetch";
import useLocal from "./useLocal";
import { Button } from "@mui/material";
import "./Hooks.css";

export default function Hooks() {
	const [count, inc, dec] = useCounter(0);
	const [posts, isPending, error] = useFetch(
		"https://jsonplaceholder.typicode.com/users"
	);
	const [value, setValue] = useLocal('input-value');

	return (
		<div>
			<div className="usecounter_hook">
				<Button variant="contained" disabled>
					useCounter hook :
				</Button>
				<Button variant="outlined" onClick={dec}>
					-
				</Button>
				<Button variant="outlined" disabled>
					{count}{" "}
				</Button>
				<Button variant="outlined" onClick={inc}>
					+
				</Button>
			</div>
			<hr />
			<div className="usefetch_hook">
				<Button variant="contained" disabled>
					useFetch hook :
				</Button>

				{error && (
					<Button disabled variant="outlined">
						Error !
					</Button>
				)}
				{isPending && (
					<Button disabled variant="outlined">
						Pending ...
					</Button>
				)}
				{posts &&
					posts.map((post) => (
						<Button key={post.id} disabled variant="outlined">
							{post.id} - {post.name}
						</Button>
					))}
			</div>
			<hr />
			<div className="uselocal_hook">
				<Button disabled variant="contained">
					useLocalStorage :
				</Button>
				<input
					className="local-input"
					value={value}
					onChange={(event) => setValue(event.target.value)}
          maxLength={20}
				/>
				<br />
			</div>
		</div>
	);
}
