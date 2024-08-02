import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Typography, CardContent } from "@mui/material";
import { PostsData } from "../../Data";
import { Button } from "react-bootstrap";

export default function Posts() {
	const [posts, setPost] = useState(PostsData);

	return (
		<div>
			<h1>Posts</h1>

			{posts.length > 0 &&
				posts.map((post) => (
					<div key={post.id}>
						<Card>
							<CardContent>
								<Typography sx={{ fontSize: 30 }} color="text.secondary">
									{post.id}
								</Typography>
								<Link to={"/posts/" + post.id}>
									<Button variant="secondary">See Post</Button>
								</Link>
							</CardContent>
						</Card>
						<br />
					</div>
				))}
		</div>
	);
}
