import React, { useEffect, useMemo, useState } from "react";
import useCounter from "./useCounter";
import useFetch from "./useFetch";
import useLocal from "./useLocal";
import { Button } from "@mui/material";
import "./Hooks.css";
import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";

export default function Hooks() {
	const [count, inc, dec] = useCounter(0);
	const [value, setValue] = useLocal("input-value");
	const [posts, isPending, error] = useFetch(
		"https://jsonplaceholder.typicode.com/users"
	);

	const [firstNum, setfirstNum] = useState(0);
	const [secondNum, setSecondNum] = useState(0);

	const firstNumHandler = () => {
		setfirstNum((pre) => pre + 1);
	};
	const secondNumHandler = () => {
		setSecondNum((pre) => pre + 1);
	};
	const firstIsEven = useMemo(() => {
		let index = 0;
		while (index < 2_000_000_000) {
			index++;
		}

		return firstNum % 2 == 0;
	}, [firstNum])
	const secondIsEven = () => {
		return secondNum % 2 == 0;
	}

	return (
		<div>
			<div className="usecounter_hook">
				<Button variant="contained" disabled className="hook_button">
					useCounter hook :
				</Button>
				<Button variant="outlined" onClick={dec}>
					<RemoveCircleOutline className="counter_icons" />
				</Button>
				<Button variant="outlined">{count}</Button>
				<Button variant="outlined" onClick={inc}>
					<AddCircleOutline className="counter_icons" />
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
						<Button
							key={post.id}
							variant="outlined"
							className="userfetch_button"
						>
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
			<hr />

			<div className="usememo_hook">
				<Button disabled variant="contained" className="hook_button">
					useMemo :
				</Button>
				<br />

				<Button style={{marginLeft: '5px !important'}} onClick={firstNumHandler} variant="outlined">
					First Number = {firstNum}
				</Button>
				<Button disabled variant="outlined">
					is {firstIsEven ? "even" : "odd"}, with delay
				</Button>

				<br />

				<Button style={{marginLeft: '5px !important'}} onClick={secondNumHandler} variant="outlined">
					Second Number = {secondNum}
				</Button>
				<Button disabled variant="outlined">
				is {secondIsEven() ? "even" : "odd"}, without delay
				</Button>
			</div>
		</div>
	);
}
