import { createContext } from "react";

export const TitleContext = createContext();

export const TitleProvider = ({ children }) => {
	return (
		<TitleContext.Provider value="react">{children}</TitleContext.Provider>
	);
};
