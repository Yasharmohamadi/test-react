import React, { useState } from "react";

export default function useCounter(defaultValue) {
	const [count, setCount] = useState(defaultValue);

	const inc = () => {
		setCount((preCount) => preCount + 1);
	};
	const dec = () => {
		setCount((preCount) => preCount - 1);
	};
	const reset = () => {
		setCount(0);
	};

	return [count, inc, dec, reset];
}
