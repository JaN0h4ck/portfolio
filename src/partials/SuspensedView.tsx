import { Suspense } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

type Props = {
	children: React.ReactNode;
};

export function SuspensedView({ children }: Props) {
	return <Suspense fallback={<Fallback />}>{children}</Suspense>;
}

function Fallback() {
	return (
		<div className="placeholder-glow" aria-hidden={true}>
			<div className="text-center fw-bold mb-4">
				<h1 className="placeholder">Loading...</h1>
			</div>
			<Container>
				<Col>
					<Row>
						<h3 className="placeholder mb-3 col-5">Loading...</h3>
						<div className="placeholder col-12">Loading...</div>
						<div className="placeholder col-12">Loading...</div>
						<div className="placeholder col-12">Loading...</div>
						<div className="placeholder col-12">Loading...</div>
						<div className="placeholder col-12">Loading...</div>
						<div className="placeholder col-12">Loading...</div>
						<div className="placeholder col-12">Loading...</div>
						<div className="placeholder col-12">Loading...</div>
						<div className="placeholder col-12">Loading...</div>
						<div className="placeholder col-12">Loading...</div>
						<div className="placeholder col-12">Loading...</div>
						<div className="placeholder col-12">Loading...</div>
						<div className="placeholder col-12">Loading...</div>
						<ul className="d-flex flex-column mt-2">
							<li className="placeholder col-2 my-1">Loading...</li>
							<li className="placeholder col-2 my-1">Loading...</li>
							<li className="placeholder col-2 my-1">Loading...</li>
							<li className="placeholder col-2 my-1">Loading...</li>
						</ul>
					</Row>
				</Col>
			</Container>
		</div>
	);
}
