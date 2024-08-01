import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Typography, Button, CardContent } from "@mui/material";
import { PostsData } from "../Data";

export default function Posts() {
	const [posts, setPost] = useState(PostsData);

	return (
		<div>
			<br />
			{posts.length > 0 &&
				posts.map((post) => (
					<div key={post.id}>
						<Card>
							<CardContent>
								<Typography sx={{ fontSize: 30 }} color="text.secondary">
									{post.id}
								</Typography>
								<Link to={"/posts/" + post.id}>
									<Button color="success" variant="contained">
										See Post
									</Button>
								</Link>
							</CardContent>
						</Card>
						<br />
					</div>
				))}
		</div>
	);
}
