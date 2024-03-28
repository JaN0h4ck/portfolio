import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Outlet } from "react-router-dom";
import { useTheme } from "./providers/ThemeModeProvider";
import { useI18n } from "./providers/I18nProvider";

export function Layout() {
	const { theme, setTheme } = useTheme();
	const { lang, setLang } = useI18n();
	return (
		<>
			<Navbar className="bg-info mb-5">
				<Container fluid="md">
					<Navbar.Brand href="/">Jans Portfolio</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Navbar.Text className="me-3">
								<Link to="/">Games</Link>
							</Navbar.Text>
							<Navbar.Text>
								<Link to="web">Web</Link>
							</Navbar.Text>
						</Nav>
						<NavDropdown title="Theme" id="basic-navbar-theme-select" className="me-3">
							<NavDropdown.Item onClick={() => setTheme("light")} active={theme === "light"}>
								{lang == "en" ? "Light" : "Hell"}
							</NavDropdown.Item>
							<NavDropdown.Item onClick={() => setTheme("dark")} active={theme === "dark"}>
								{lang == "en" ? "Dark" : "Dunkel"}
							</NavDropdown.Item>
							<NavDropdown.Item onClick={() => setTheme("system")} active={theme === "system"}>
								System
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title={lang == "en" ? "Language" : "Sprache"} id="basic-navbar-lang-select">
							<NavDropdown.Item onClick={() => setLang("en")} active={lang === "en"}>
								English
							</NavDropdown.Item>
							<NavDropdown.Item onClick={() => setLang("de")} active={lang === "de"}>
								Deutsch
							</NavDropdown.Item>
						</NavDropdown>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
}
