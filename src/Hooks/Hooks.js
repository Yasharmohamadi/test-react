import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";
import useFetch from "./useFetch";
import useLocal from "./useLocal";
import { Button } from "@mui/material";
import "./Hooks.css";
import {
	RemoveCircleOutline,
	AddCircleOutline
} from "@mui/icons-material";

export default function Hooks() {
  const [count, inc, dec] = useCounter(0);
  const [value, setValue] = useLocal('input-value');
	const [posts, isPending, error] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
	);

	return (
		<div>
			<div className="usecounter_hook">
				<Button variant="contained" disabled className="hook_button">
					useCounter hook :
				</Button>
				<Button variant="outlined" onClick={dec}>
					<RemoveCircleOutline className='counter_icons'/>
				</Button>
				<Button variant="outlined" >
					{count}
				</Button>
				<Button variant="outlined" onClick={inc}>
					<AddCircleOutline className='counter_icons'/>
				</Button>
			</div>
			<hr />
			<div className="usefetch_hook">
				<Button variant="contained" disabled className="hook_button">
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
						<Button key={post.id} variant="outlined" className="userfetch_button">
							{post.id} - {post.name}
						</Button>
					))}
			</div>
			<hr />
			<div className="uselocal_hook">
				<Button disabled variant="contained" className="hook_button">
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
