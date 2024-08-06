import React, { useState, useEffect } from "react";

export default function useFetch() {
	const [posts, setPosts] = useState(null);
	const [pending, setPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setInterval(() => {
			fetch("https://jsonplaceholder.typicode.com/users")
				.then((response) => response.json())
				.then((datas) => {
					console.log(datas);
					setPosts(datas);
					setPending(false);
					setError(null);
				})
				.catch((error) => console.log(error));
		}, 1500);
	}, []);

	return [posts, pending, error];
}
