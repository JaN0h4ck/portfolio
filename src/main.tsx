import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeModeProvider } from "./providers/ThemeModeProvider.tsx";
import { I18nProvider } from "./providers/I18nProvider.tsx";
import { ExternalModalProvider } from "./providers/ExternalModalProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<I18nProvider>
			<ThemeModeProvider>
				<ExternalModalProvider>
					<App />
				</ExternalModalProvider>
			</ThemeModeProvider>
		</I18nProvider>
	</React.StrictMode>
);
