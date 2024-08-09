import React, { useState } from "react";
import "./style.css";
import routes from "./Routes";
import { Route, Routes, Link, useRoutes, NavLink } from "react-router-dom";

import { Container } from "react-bootstrap";
import { Alert, Button } from "@mui/material";
import {
	TableChart,
	People,
	Home,
	DynamicFeed,
	AccountCircle,
	TrendingUp,
	Webhook,
	QuestionMark,
	Functions,
} from "@mui/icons-material";

export default function Main() {
	let router = useRoutes(routes);

	return (
		<Container className="mt-5">
			<div className="buttons">
				<div className="button">
					<NavLink
						className={`${(link) => (link.isActive ? "active" : "")}`}
						to="/home"
					>
						<Button color="primary" variant="contained" startIcon={<Home />}>
							Home
						</Button>
					</NavLink>
				</div>
				<div className="button">
					<NavLink to="/users">
						<Button color="primary" variant="contained" startIcon={<People />}>
							Users
						</Button>
					</NavLink>
				</div>
				<div className="button">
					<NavLink to="/table">
						<Button
							color="primary"
							variant="contained"
							startIcon={<TableChart />}
						>
							Table
						</Button>
					</NavLink>
				</div>
				<div className="button">
					<NavLink to="/posts">
						<Button
							color="primary"
							variant="contained"
							startIcon={<DynamicFeed />}
						>
							Posts
						</Button>
					</NavLink>
				</div>
				<div className="button">
					<NavLink to="/panel">
						<Button
							color="primary"
							variant="contained"
							startIcon={<AccountCircle />}
						>
							Panel
						</Button>
					</NavLink>
				</div>
				<div className="button">
					<NavLink to="/charts">
						<Button
							color="primary"
							variant="contained"
							startIcon={<TrendingUp />}
						>
							Charts
						</Button>
					</NavLink>
				</div>
				<div className="button">
					<NavLink to="/hooks">
						<Button color="primary" variant="contained" startIcon={<Webhook />}>
							Hooks
						</Button>
					</NavLink>
				</div>
				<div className="button">
					<NavLink to="/hocs">
						<Button
							color="primary"
							variant="contained"
							startIcon={<Functions />}
						>
							HOCs
						</Button>
					</NavLink>
				</div>
				<div className="button">
					<NavLink to="/questions">
						<Button
							color="primary"
							variant="contained"
							startIcon={<QuestionMark />}
						>
							Questions
						</Button>
					</NavLink>
				</div>
			</div>

			{/* <Routes>
				<Route path="/" />
				<Route path="/users" element={<Users />} />
				<Route path="/table" element={<TableGrid />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/posts/:postID" element={<MainPost />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/about" element={<About />}>
					<Route path="setting" element={<h3>Setting</h3>} />
					<Route path="dashboard" element={<h3>Dashboard</h3>} />
				</Route>
			</Routes> */}
			<hr />

			{router}

			<hr />
			<Alert severity="info">Test Project by REACT</Alert>
		</Container>
	);
}
