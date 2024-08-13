import React, { useState } from "react";

export default function Categories({ categories, filterMenu }) {

const [mainCategory, setMainCategory] = useState('all')

	return (
		<div>
			{categories.map((category, index) => (
				<button
					color="warning"
					variant="outlined"
					className={category === mainCategory ? `nav_btn highlight` : `nav_btn`}
					key={index}
                    onClick={() => {
                        setMainCategory(category)
						filterMenu(category)
                    }}
				>
					{category}
				</button>
			))}
		</div>
	);
}
