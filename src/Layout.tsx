import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Outlet } from "react-router-dom";
import { useTheme } from "./providers/ThemeModeProvider";

export function Layout() {
	const { theme, setTheme } = useTheme();
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
									Light
								</NavDropdown.Item>
								<NavDropdown.Item onClick={() => setTheme("dark")} active={theme === "dark"}>
									Dark
								</NavDropdown.Item>
								<NavDropdown.Item onClick={() => setTheme("system")} active={theme === "system"}>
									System
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
