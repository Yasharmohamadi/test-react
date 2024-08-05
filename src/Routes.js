import Home from "./components/Home";
import Users from "./components/Users";
import TableGrid from "./components/TableGrid";
import Posts from "./components/Postss/Posts";
import MainPost from "./components/Postss/MainPost";
import Panel from "./components/Panel/Panel";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Panel/Login";
import Signin from "./components/Panel/Signin";
import Charts from "./components/Charts/Charts";

let routes = [
	{ path: "/", element: <Home /> },
	{ path: "/home", element: <Home /> },
	{ path: "/users", element: <Users /> },
	{ path: "/table", element: <TableGrid /> },
	{ path: "/charts", element: <Charts /> },
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
		path: "/panel/*",
		element: <Panel />,
		children: [
			{ path: "login", element: <Login /> },
			{ path: "signin", element: <Signin /> },
		],
	},
	{ path: "*", element: <NotFound /> },
];

export default routes;
