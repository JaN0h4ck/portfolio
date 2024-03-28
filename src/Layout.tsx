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
			<Navbar>
				<Container fluid="md">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center align-items-center">
						<Nav>
							<Navbar.Text className="me-3">
								<Link to="/">Games</Link>
							</Navbar.Text>
							<Navbar.Text>
								<Link to="web">Web</Link>
							</Navbar.Text>
							<NavDropdown title="Theme" id="basic-navbar-theme-select">
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
							<NavDropdown title="Language" id="basic-navbar-lang-select">
								<NavDropdown.Item onClick={() => setLang("en")} active={lang === "en"}>
									English
								</NavDropdown.Item>
								<NavDropdown.Item onClick={() => setLang("de")} active={lang === "de"}>
									Deutsch
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
}
