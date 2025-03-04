import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://portfolio.jan-nothacker.de",
	i18n: {
		locales: ["en", "de"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: true,
		},
	},
});
