import Home from "./Pages/Home/Home";
import Users from "./Pages/Users/Users";
import TableGrid from "./Pages/TableGrid/TableGrid";
import Posts from "./Pages/Postss/Posts";
import MainPost from "./Pages/Postss/MainPost";
import Panel from "./Pages/Panel/Panel";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Login from "./Pages/Panel/Login";
import Signin from "./Pages/Panel/Signin";
import Charts from "./Pages/Charts/Charts";
import Hooks from "./Pages/Hooks/Hooks";
import Hocs from "./Pages/Hocs/Hocs";
import Questions from "./Pages/Questions/Questions";
import Menu from "./Pages/Menu/Menu";
import UseContext from "./Pages/UseContext/UseContext";

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
	{ path: "/hooks", element: <Hooks /> },
	{ path: "/hocs", element: <Hocs /> },
	{ path: "/questions", element: <Questions /> },
	{ path: "/menu", element: <Menu />},
	{ path: "/context", element: <UseContext />},
	{ path: "*", element: <NotFound /> },
];

export default routes;
