import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import TableGrid from "./components/TableGrid/TableGrid";
import Posts from "./components/Postss/Posts";
import MainPost from "./components/Postss/MainPost";
import Panel from "./components/Panel/Panel";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Panel/Login";
import Signin from "./components/Panel/Signin";
import Charts from "./components/Charts/Charts";
import Hooks from './Hooks/Hooks'
import Hocs from './components/Hocs/Hocs' 
import Questions from './Pages/Questions/Questions'

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
	{ path: "*", element: <NotFound /> },
];

export default routes;
