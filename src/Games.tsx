import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { ListItem } from "./partials/ListItem";
import { Link } from "react-router-dom";

export function Games() {
	return (
		<>
			<h1 className="text-center fw-bold">Games</h1>
			<Container>
				<Col>
					<ListItem
						title="Robots vs. Wrestlers (without Wrestlers)"
						imgSrc="/img/robots_env.png"
						bulletPoints={[
							"Game Jam project during ManaSoup Game Jam 3 in Spring of 2024",
							"3D Jump and Run Game",
							"Engine: Godot",
							"My Role: Programmer (.NET), Movement, Animation State Machine",
						]}
						lastChild={
							<a className="btn btn-primary mt-3" href="https://jan0h4ck.itch.io/robotsvswrestlers" target="blank">
								Try it on itch.io
							</a>
						}
					/>
				</Col>
			</Container>
			<Container>
				{/* className="d-flex flex-column justify-content-center align-items-center"> */}
				<Col>
					<ListItem
						title="WickedTD"
						imgSrc="/img/wickedtd_cropped.png"
						bulletPoints={[
							"Game Jam project during Brackeys Game Jam 2023.1",
							"Tower Defense Game",
							"Engine: Unity",
							"My Role: Programmer, QA and Integration Management",
						]}
						lastChild={
							<a className="btn btn-primary mt-3" href="https://jan0h4ck.itch.io/wickedtd" target="blank">
								Try it on itch.io
							</a>
						}
					/>
					<ListItem
						title="Republic Bread"
						bulletPoints={[
							"Graded group project as part of my studies",
							"Point & Click Adventure",
							"Engine: Unity",
							"My Role: Project Lead, Integration Management, QA",
						]}
						imgSrc="/img/Villa_Final.jpg"
						lastChild={
							<Link className="btn btn-primary mt-3" to="/rb">
								Learn More
							</Link>
						}
					/>
				</Col>
			</Container>
		</>
	);
}
