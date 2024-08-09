import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { PostsData } from "../../Data";
import { Card, Typography, CardContent } from "@mui/material";
import { Button } from "react-bootstrap";


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
							<Button variant="secondary">
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
