import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
	Card,
	Typography,
	Button,
	CardActions,
	CardContent,
} from "@mui/material";
import Data from "./Data";

export default function Posts() {
	const [posts, setPost] = useState(Data);

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
