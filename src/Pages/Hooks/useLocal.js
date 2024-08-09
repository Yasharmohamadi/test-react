import React, { useEffect, useState } from "react";

export default function useLocal(title) {
	const [value, setValue] = useState(() => {
		let localValue = localStorage.getItem(title);

		if (localValue) {
			return localValue;
		}
		return "";
	});

	useEffect(() => {
		localStorage.setItem(title, value);
	}, [value]);


	return [value, setValue];
}
