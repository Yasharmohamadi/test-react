import React, { useEffect, useMemo, useState, useRef } from "react";
import useCounter from "./useCounter";
import useFetch from "./useFetch";
import useLocal from "./useLocal";
import { Button } from "@mui/material";
import "./Hooks.css";
import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";

export default function Hooks() {
	// use counter_hook state
	const [count, inc, dec] = useCounter(0);
	// use local_hook state
	const [value, setValue] = useLocal("input-value");
	// use fetch_hook state
	const [posts, isPending, error] = useFetch(
		"https://jsonplaceholder.typicode.com/users"
	);
	// use memo_hook states
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
	}, [firstNum]);
	const secondIsEven = () => {
		return secondNum % 2 == 0;
	};
	// use ref_hook
	const refInput = useRef();
	useEffect(() => {
		refInput.current.focus();
	}, []);
	const addNewValue = () => {
		refInput.current.value = "New Value";
	};
	const delNewValue = () => {
		refInput.current.value = "";
	};
	const addClass = () => {
		refInput.current.classList.add("bg_blue");
	};
	const delClass = () => {
		refInput.current.classList.remove("bg_blue");
	};

	const [inputTitle, setInputTitle] = useState("");
	// const [renderCount, setRenderCount] = useState(1);
	const renderCount = useRef(0);

	useEffect(() => {
		// setRenderCount(pre => pre + 1)
		renderCount.current = renderCount.current + 1; 
	}, [inputTitle]);

	return (
		<div>
			<div className="usecounter_hook">
				<Button variant="contained" disabled className="hook_button">
					use Counter hook :
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
					use Fetch hook :
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
					use LocalStorage hook :
				</Button>
				<input
					className="input"
					value={value}
					onChange={(event) => setValue(event.target.value)}
					maxLength={20}
				/>
				<br />
			</div>
			<hr />
			<div className="usememo_hook">
				<Button disabled variant="contained" className="hook_button">
					use Memo hook :
				</Button>
				<Button variant="outlined" onClick={dec} disabled>
					save value
				</Button>
				<br />

				<Button
					style={{ marginLeft: "5px" }}
					onClick={firstNumHandler}
					variant="outlined"
				>
					First Number = {firstNum}
				</Button>
				<Button disabled variant="outlined">
					is {firstIsEven ? "even" : "odd"}, with delay
				</Button>

				<br />

				<Button
					style={{ marginLeft: "5px" }}
					onClick={secondNumHandler}
					variant="outlined"
				>
					Second Number = {secondNum}
				</Button>
				<Button disabled variant="outlined">
					is {secondIsEven() ? "even" : "odd"}, without delay
				</Button>
			</div>
			<hr />
			<div className="usecallback_hook">
				<Button disabled variant="contained" className="hook_button">
					use CallBack hook :
				</Button>
				<Button variant="outlined" onClick={dec} disabled>
					save function
				</Button>
			</div>
			<hr />

			<div className="useref_hook">
				<div className="useref-wrapper">
					<Button disabled variant="contained" className="hook_button">
						use Ref hook :
					</Button>
					<input
						ref={refInput}
						className="input ref_input"
						maxLength={20}
						placeholder="TYPE HERE ..."
					/>
				</div>
				<Button
					variant="outlined"
					className="hook_button"
					onClick={addNewValue}
				>
					add 'new value'
				</Button>
				<Button
					variant="outlined"
					className="hook_button"
					onClick={delNewValue}
				>
					del 'new value'
				</Button>
				<br />
				<Button variant="outlined" className="hook_button" onClick={addClass}>
					add 'bg_blue' class
				</Button>
				<Button variant="outlined" className="hook_button" onClick={delClass}>
					del 'bg_blue' class
				</Button>
				<br />

				<input
					className="input ref_input"
					maxLength={20}
					placeholder="TYPE HERE ..."
					onChange={(event) => setInputTitle(event.target.value)}
				/>
				<Button variant="outlined" className="hook_button" disabled>
					input render : {renderCount.current}
				</Button>
				<Button variant="outlined" className="hook_button" disabled>
					input title : {inputTitle}
				</Button>
			</div>
		</div>
	);
}
