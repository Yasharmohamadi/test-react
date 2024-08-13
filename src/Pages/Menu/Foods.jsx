import React from "react";

export default function Foods({ foodsDatas }) {
	return (
		<div>
			{foodsDatas.map((food) => (
				<div key={food.id} className="food_container">
					<div className="food_left">
						<img src={food.img} className="food_img" />
					</div>
					<div className="food_right">
						<div className="food_header">
							<h3 className="food_title">{food.title}</h3>
							<div className="food_details">
							<span className="food_price">${food.price}</span>
							<span className="food_category">{food.category}</span>

							</div>
						</div>

						<p className="food_desc">{food.desc}</p>
					</div>
				</div>
			))}
		</div>
	);
}
