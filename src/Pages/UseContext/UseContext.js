import React from "react";
import { TitleProvider } from "../../Contexts/TitleContext";
import FirstFile from './FirstFile'


export default function UseContext() {
	return (
		<TitleProvider>
			<div>
			<FirstFile />
			</div>
		</TitleProvider>
	);
}
