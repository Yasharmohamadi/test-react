import React, { useState } from "react";

export default function Categories({ categories }) {

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
                    }}
				>
					{category}
				</button>
			))}
		</div>
	);
}
