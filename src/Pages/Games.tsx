import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { ListItem } from "../partials/ListItem";
import { Link } from "react-router-dom";
import { useI18n } from "../providers/I18nProvider";
import * as en from "../assets/texts/games/en.json";
import * as de from "../assets/texts/games/de.json";
import robotsImgUrl from "/src/assets/img/robots_env.png";
import wickedtdImgUrl from "/src/assets/img/wickedtd_cropped.png";
import breadImgUrl from "/src/assets/img/Villa_Final.jpg";
import { ExternalLink } from "../partials/ExternalLink";

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
						imgSrc={robotsImgUrl}
						bulletPoints={lang == "en" ? en.robots : de.robots}
						lastChild={
							<ExternalLink
								text="Try it on itch.io"
								_href="https://jan0h4ck.itch.io/robotsvswrestlers"
								_className="btn btn-primary mt-3"
							/>
						}
					/>
				</Col>
				<Col>
					<ListItem
						title="WickedTD"
						imgSrc={wickedtdImgUrl}
						bulletPoints={lang == "en" ? en.wickedtd : de.wickedtd}
						lastChild={
							<ExternalLink
								text="Try it on itch.io"
								_href="https://jan0h4ck.itch.io/wickedtd"
								_className="btn btn-primary mt-3"
							/>
						}
					/>
					<ListItem
						title="Republic Bread"
						bulletPoints={lang == "en" ? en.bread : de.bread}
						imgSrc={breadImgUrl}
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
