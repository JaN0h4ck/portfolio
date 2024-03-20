import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeContextProps = {
	theme: Theme;
	setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

type Props = {
	children: React.ReactNode;
};

const initialProps: ThemeContextProps = {
	theme: "light",
	setTheme: () => {},
};

const ThemeContext = createContext<ThemeContextProps>(initialProps);

function ThemeModeProvider({ children }: Props) {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		}
	}, []);
	useEffect(() => {
		document.documentElement.dataset.bsTheme = theme;
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

const useTheme = () => useContext(ThemeContext);

export { ThemeModeProvider, useTheme };
