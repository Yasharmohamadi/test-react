import Home from "./components/Home";
import Users from "./components/Users";
import TableGrid from "./components/TableGrid";
import Posts from "./components/Posts";
import MainPost from "./components/MainPost";
import About from "./components/About";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";

let routes = [
	{ path: "/", element: <Home /> },
	{ path: "/home", element: <Home /> },
	{ path: "/users", element: <Users /> },
	{ path: "/table", element: <TableGrid /> },
	{
		path: "/posts",
		element: (
			<PrivateRoute>
				<Posts />
			</PrivateRoute>
		),
	},
	{ path: "/posts/:postID", element: <MainPost /> },
	{
		path: "/about/*",
		element: <About />,
		children: [
			{ path: "setting", element: <h3>Setting</h3> },
			{ path: "dashboard", element: <h3>Dashboard</h3> },
		],
	},
	{ path: "*", element: <NotFound /> },
];

export default routes;
