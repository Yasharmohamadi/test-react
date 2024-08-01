import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {PostsData} from "../Data";
import {
	Card,
	Typography,
	Button,
	CardContent,
} from "@mui/material";

export default function MainPost() {
	const [posts, setPost] = useState(PostsData);
	let params = useParams();

	let mainPost = posts.find((post) => {
		return post.id == params.postID;
	});

	let hasPost = posts.some((post) => post.id == params.postID);

	return (
		<div>
			<br />
			{hasPost ? (
				<Card>
					<CardContent>
						<Typography sx={{ fontSize: 30 }} color="text.secondary">
							{mainPost.id}
						</Typography>
						<Link to="/posts">
							<Button color="success" variant="contained">
								Back to Posts
							</Button>
						</Link>
					</CardContent>
				</Card>
			) : (
				<Navigate to="/" />
			)}
		</div>
	);
}
