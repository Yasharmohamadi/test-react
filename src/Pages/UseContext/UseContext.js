import React from "react";
import { TitleContext } from "../../Contexts/TitleContext";
import FirstFile from './FirstFile'


export default function UseContext() {
	return (
		<TitleContext.Provider value="react">
			<div>
			<FirstFile />
			</div>
		</TitleContext.Provider>
	);
}
