import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { ListItem } from "./partials/ListItem";

export function Games() {
	return (
		<>
			<h1 className="text-center">Games</h1>
			<Container>
				{/* className="d-flex flex-column justify-content-center align-items-center"> */}
				<Col>
					<ListItem
						title="WickedTD"
						imgSrc="/img/wickedtd_cropped.png"
						bulletPoints={["Game Jam Project during Brackey Game Jam 2023.1", "My Role: Programmer, "]}
					/>
					<ListItem title="Republic Bread" bulletPoints={["Project", "Project Lead", "etc."]} imgSrc="" />
					<div>item 2</div>
					<div>item 3</div>
				</Col>
			</Container>
		</>
	);
}
