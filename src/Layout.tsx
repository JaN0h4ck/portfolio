import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

export function Layout() {
	return (
		<>
			<Navbar className="bg-light">
				<Container fluid="md">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center align-items-center">
						<Nav>
							<Navbar.Text className="me-3">
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
