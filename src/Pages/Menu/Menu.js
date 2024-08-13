import React, { useState } from "react";
import "./Menu.css";
import { menuDatas } from "../../Data";
import { Alert, Button } from "@mui/material";
import { useRoutes, NavLink } from "react-router-dom";
import Categories from "./Categories";

const categories = ["all", ...new Set(menuDatas.map((item) => item.category))];
 

export default function Menu() {
	const [menuItems, setMenuItem] = useState(menuDatas);

	return (
		<div>
      <h1>Menu</h1>
			<div className="menu_nav">
          <Categories categories={categories}/>
			</div>
		</div>
	);
}
