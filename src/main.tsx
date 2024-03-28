import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeModeProvider } from "./providers/ThemeModeProvider.tsx";
import { I18nProvider } from "./providers/I18nProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<I18nProvider>
			<ThemeModeProvider>
				<App />
			</ThemeModeProvider>
		</I18nProvider>
	</React.StrictMode>
);
