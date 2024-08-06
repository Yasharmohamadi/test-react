import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";
import useFetch from "./useFetch";
import { Alert, Button } from "@mui/material";

export default function Hooks() {
	const [count, inc, dec] = useCounter(0);
	const [posts, pending, error] = useFetch();

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
				{pending && (
					<Button disabled variant="outlined">
						Pending ...
					</Button>
				)}
				{posts &&
					posts.map((post) => (
						<Button key={post.id} disabled variant="outlined">
							{post.name}
						</Button>
					))}
			</div>
		</div>
	);
}
