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
			<div className="top-background">
				<div className="pipe-background"></div>
			</div>
			<Navbar className="bg-primary mb-5 text-white" expand="md">
				<Container fluid="md">
					<Navbar.Brand href="/" className="text-reset">
						Jans Portfolio
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Navbar.Text className="me-3 text-reset">
								<Link to="/" className="text-reset">
									Games
								</Link>
							</Navbar.Text>
							<Navbar.Text className="me-3 text-reset">
								<Link to="web" className="text-reset">
									Web
								</Link>
							</Navbar.Text>
							<Navbar.Text className="text-reset">
								<Link to="about" className="text-reset">
									{lang == "en" ? "About" : "Über"}
								</Link>
							</Navbar.Text>
						</Nav>
						<NavDropdown title="Theme" id="basic-navbar-theme-select" className="me-3 my-2">
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
						<NavDropdown title={lang == "en" ? "Language" : "Sprache"} id="basic-navbar-lang-select" className="my-2">
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
			<footer className="text-center my-3">&copy; 2024 Jan Nothacker</footer>
		</>
	);
}
