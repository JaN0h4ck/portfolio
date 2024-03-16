import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

export function Layout() {
	return (
		<>
			<Navbar>
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Navbar.Text className="me-2">
								<Link to="/" className="btn btn-primary">
									Games
								</Link>
							</Navbar.Text>
							<Navbar.Text>
								<Link to="web" className="btn btn-primary">
									Web
								</Link>
							</Navbar.Text>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
}
