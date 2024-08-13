import React, { useState } from "react";
import "./Menu.css";
import { menuDatas } from "../../Data";
import Categories from "./Categories";
import Foods from "./Foods";

const allCategories = [
	"all",
	...new Set(menuDatas.map((item) => item.category)),
];

export default function Menu() {
	const [menuItems, setMenuItem] = useState(menuDatas);
	const [categories, setCategories] = useState(allCategories);

	const filterMenu = (category) => {
		if (category === "all") {
			setMenuItem(menuDatas);
			return;
		}
		let filteredItem = menuDatas.filter((Item) => Item.category === category);
		setMenuItem(filteredItem);
	};

	return (
		<div>
			<h1>Menu</h1>
			<div className="menu_nav">
				<Categories filterMenu={filterMenu} categories={categories} />
			</div>
			<div className="menu_foods">
				<Foods foodsDatas={menuItems} />
			</div>
		</div>
	);
}
