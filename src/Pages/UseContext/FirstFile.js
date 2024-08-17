import React, { useContext } from "react";
import { TitleContext } from "../../Contexts/TitleContext";
import SecondFile from "./SecondFile";

export default function FirstFile() {
	const title = useContext(TitleContext);

	return (
		<div>
			<h2>FirstFile : {title}</h2>
      <SecondFile />
		</div>
	);
}
