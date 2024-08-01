import Users from "./Users";
import TableGrid from "./TableGrid";
import Posts from "./Posts";
import MainPost from "./MainPost";
import NotFound from "./NotFound";
import About from "./About";

let routes = [
	{ path: "/" },
	{ path: "/users", element: <Users /> },
	{ path: "/table", element: <TableGrid /> },
	{ path: "/posts", element: <Posts /> },
	{ path: "/posts/:postID", element: <MainPost /> },
	{ path: "/about/*", element: <About /> , Children: [
	    { path: "/setting", element: <Setting /> },
	    { path: "/dashboard", element: <Dashboard /> },

    ]},
	{ path: "*", element: <NotFound /> },
];

export default routes