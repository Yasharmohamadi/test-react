import React, { useState } from "react";
import "./Menu.css";
import { menuDatas } from "../../Data";
import Categories from "./Categories";
import Foods from "./Foods";

const categories = ["all", ...new Set(menuDatas.map((item) => item.category))];

export default function Menu() {
	const [menuItems, setMenuItem] = useState(menuDatas);

	return (
		<div>
			<h1>Menu</h1>
			<div className="menu_nav">
				<Categories categories={categories} />
			</div>
			<div className="menu_foods">
				<Foods foodsDatas={menuItems} />
			</div>
		</div>
	);
}
