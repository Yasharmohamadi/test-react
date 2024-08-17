import React, { useContext } from "react";
import { TitleContext } from "../../Contexts/TitleContext";

export default function SecondFile() {
	const title = useContext(TitleContext);
	return (
		<div>
			<h2>SecondFile : {title}</h2>
		</div>
	);
}
