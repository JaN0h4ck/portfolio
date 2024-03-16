import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { ListItem } from "./partials/ListItem";

export function Games() {
	return (
		<>
			<h1 className="text-center">Games</h1>
			<Container>
				{/* className="d-flex flex-column justify-content-center align-items-center"> */}
				<Row>
					<Col>
						<h3>WickedTD</h3>
						<Image src="/img/wickedtd_cropped.png" fluid></Image>
						<ul>
							<li>Child 1</li>
							<li>Child 2</li>
							<li>Child 3</li>
						</ul>
					</Col>
					<ListItem title="Republic Bread" bulletPoints={["Project", "Project Lead", "etc."]} imgSrc="" />
					<div>item 2</div>
					<div>item 3</div>
				</Row>
			</Container>
		</>
	);
}
