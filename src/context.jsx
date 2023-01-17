import { createContext, useContext, useState } from "react";

const Theme = createContext();
const ToggleTheme = createContext();
export const ThemeProvider = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(true);

	const toggleTheme = () => {
		setDarkTheme((prev) => !prev);
	};

	return (
		<Theme.Provider value={darkTheme}>
			<ToggleTheme.Provider value={toggleTheme}>
				{children}
			</ToggleTheme.Provider>
		</Theme.Provider>
	);
};

export const useTheme = () => {
	return useContext(Theme);
};

export const useToggle = () => {
	return useContext(ToggleTheme);
};
