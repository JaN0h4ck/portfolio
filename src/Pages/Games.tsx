import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row  from "react-bootstrap/Row";
import { ListItem } from "../partials/ListItem";
import { useI18n } from "../providers/I18nProvider";
import * as en from "../assets/texts/games/en.json";
import * as de from "../assets/texts/games/de.json";
import robotsImgUrl from "/src/assets/img/robots_env.png";
import wickedtdImgUrl from "/src/assets/img/wickedtd_cropped.png";
import breadImgUrl from "/src/assets/img/Villa_Final.jpg";
import { ExternalLink } from "../partials/ExternalLink.tsx";
import { PipeCarousel } from "../partials/PipeCarousel.tsx";

export function Games() {
	const { lang } = useI18n();
	return (
		<>
			<h1 className="text-center fw-bold mb-4">Games</h1>
			<Container>
				<Col>
					<Row className="mb-5">
						<h3 className="fw-bold mb-3">Rostige Pipe</h3>
						<PipeCarousel/>
					</Row>
				</Col>
				<Col>
					<ListItem
						title="Robots vs. Wrestlers (without Wrestlers)"
						imgSrc={robotsImgUrl}
						bulletPoints={lang == "en" ? en.robots.texts : de.robots.texts}
						lastChild={
							<ExternalLink
								text={lang == "en" ? en.robots.buttonTexts[0] : de.robots.buttonTexts[0]}
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
						bulletPoints={lang == "en" ? en.wickedtd.texts : de.wickedtd.texts}
						lastChild={
							<ExternalLink
								text={lang == "en" ? en.wickedtd.buttonTexts[0] : de.wickedtd.buttonTexts[0]}
								_href="https://jan0h4ck.itch.io/wickedtd"
								_className="btn btn-primary mt-3"
							/>
						}
					/>
					<ListItem
						title="Republic Bread"
						bulletPoints={lang == "en" ? en.bread.texts : de.bread.texts}
						imgSrc={breadImgUrl}
						lastChild={
							<ExternalLink
								text={lang == "en" ? en.bread.buttonTexts[0] : de.bread.buttonTexts[0]}
								_href="https://www.hs-kempten.de/fakultaet-informatik/zentrale-einrichtungen/computerspiel-zentrum-games/projekt/republic-bread-2049"
								_className="btn btn-primary mt-3"
							/>
						}
					/>
				</Col>
			</Container>
		</>
	);
}
