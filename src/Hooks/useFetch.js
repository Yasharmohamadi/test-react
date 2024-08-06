import React, { useState, useEffect } from "react";

export default function useFetch(url) {
	const [posts, setPosts] = useState(null);
	const [isPending, setPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setInterval(() => {
			fetch(url)
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

	return [posts, isPending, error];
}
