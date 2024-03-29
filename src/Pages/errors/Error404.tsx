import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export function Error404() {
	return (
		<>
			<h1 className="text-center fw-bold my-4 text-danger">Error 404</h1>
			<Container>
				<p>The Site you tried to access doesn't exist!</p>
				<Link className="btn btn-success" to={"/"}>
					Go Back Home
				</Link>
			</Container>
		</>
	);
}
