import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { ListItem } from "../partials/ListItem";
import { Link } from "react-router-dom";
import { useI18n } from "../providers/I18nProvider";
import * as en from "../texts/games/en.json";
import * as de from "../texts/games/de.json";

export function Games() {
	const { lang } = useI18n();
	return (
		<>
			<h1 className="text-center fw-bold mb-4">Games</h1>
			<Container>
				{/* className="d-flex flex-column justify-content-center align-items-center"> */}
				<Col>
					<ListItem
						title="Robots vs. Wrestlers (without Wrestlers)"
						imgSrc="/img/robots_env.png"
						bulletPoints={lang == "en" ? en.robots : de.robots}
						lastChild={
							<a className="btn btn-primary mt-3" href="https://jan0h4ck.itch.io/robotsvswrestlers" target="blank">
								Try it on itch.io
							</a>
						}
					/>
				</Col>
				<Col>
					<ListItem
						title="WickedTD"
						imgSrc="/img/wickedtd_cropped.png"
						bulletPoints={lang == "en" ? en.wickedtd : de.wickedtd}
						lastChild={
							<a className="btn btn-primary mt-3" href="https://jan0h4ck.itch.io/wickedtd" target="blank">
								Try it on itch.io
							</a>
						}
					/>
					<ListItem
						title="Republic Bread"
						bulletPoints={lang == "en" ? en.bread : de.bread}
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
