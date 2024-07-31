import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Data from "./Data";
import {
	Card,
	Typography,
	Button,
	CardActions,
	CardContent,
} from "@mui/material";

export default function MainPost() {
	const [posts, setPost] = useState(Data);
	let params = useParams();

	let mainPost = posts.find((post) => {
		return post.id == params.postID;
	});

	return (
		<div>
			<br />
			<Card sx={{ width: 500 }}>
				<CardContent>
					<Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
						{mainPost.id}
					</Typography>
					<Typography sx={{ mb: 1.5 }} color="text.secondary">
						{mainPost.body}
					</Typography>
				</CardContent>
				<CardActions>

					<Link to="/posts">
						<Button
                        size="small"
							color="success"
							variant="contained"
						>
							Back to Posts
						</Button>
					</Link>
				</CardActions>
			</Card>
		</div>
	);
}
