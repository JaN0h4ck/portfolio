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
		switch (theme) {
			case "light":
				document.documentElement.dataset.bsTheme = "light";
				break;
			case "dark":
				document.documentElement.dataset.bsTheme = "dark";
				break;
			case "system":
				if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
					document.documentElement.dataset.bsTheme = "dark";
				else document.documentElement.dataset.bsTheme = "light";
				break;
		}
		document.documentElement.dataset.bsTheme = theme;
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

const useTheme = () => useContext(ThemeContext);

export { ThemeModeProvider, useTheme };
