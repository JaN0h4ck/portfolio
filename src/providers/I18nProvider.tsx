import { createContext, useContext, useEffect, useState } from "react";

type Props = {
	children: React.ReactNode;
};

type I18nProps = {
	lang: "en" | "de";
};

const I18nContext = createContext<I18nProps>({ lang: "en" });
function I18nProvider({ children }: Props) {
	const [lang, setLang] = useState<"en" | "de">("en");
	useEffect(() => {
		const userLang = navigator.language;
		if (userLang.includes("en")) setLang("en");
		else if (userLang.includes("de")) setLang("de");
		else setLang("en");
	}, []);
	useEffect(() => {
		document.documentElement.lang = lang;
	}, [lang]);
	return <I18nContext.Provider value={{ lang }}>{children}</I18nContext.Provider>;
}

const useI18n = () => useContext(I18nContext);

export { useI18n, I18nProvider };
