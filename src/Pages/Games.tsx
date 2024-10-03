import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ListItem } from "../partials/ListItem";
import { useI18n } from "../providers/I18nProvider";
import * as en from "../assets/texts/games/en.json";
import * as de from "../assets/texts/games/de.json";
import robotsImgUrl from "/src/assets/img/robots_env.png";
import wickedtdImgUrl from "/src/assets/img/wickedtd_cropped.png";
import breadImgUrl from "/src/assets/img/Villa_Final.jpg";
import { PipeCarousel } from "../partials/PipeCarousel.tsx";
import { BulletPoints } from "../partials/BulletPoints.tsx";
import { ColdBloodedCarousel } from "../partials/ColdBloodedCarousel.tsx";

export function Games() {
	const { lang } = useI18n();
	return (
		<>
			<h1 className="text-center fw-bold mb-4">Games</h1>
			<Container>
				<div className="custom-container mb-5">
					<Col>
						<Row>
							<h3 className="fw-bold mb-3">Cold Blooded 2077</h3>
							<ColdBloodedCarousel />
							<BulletPoints
								bulletPoints={lang == "en" ? en.coldBlooded.texts : de.coldBlooded.texts}
								lastChild={
									<span>
										<a
											target="_blank"
											href="https://jekdersnek.itch.io/cold-blooded-2077"
											className="btn btn-primary mt-3"
										>
											{lang == "en" ? en.coldBlooded.buttonText : de.coldBlooded.buttonText}
										</a>
									</span>
								}
							></BulletPoints>
						</Row>
					</Col>
				</div>
				<div className="custom-container mb-5">
					<Col>
						<Row>
							<h3 className="fw-bold mb-3">Rostige Pipe</h3>
							<PipeCarousel />
							<BulletPoints
								bulletPoints={lang == "en" ? en.pipe.texts : de.pipe.texts}
								lastChild={
									<span>
										<a target="_blank" href="https://jan0h4ck.itch.io/rostige-pipe" className="btn btn-primary mt-3">
											{lang == "en" ? en.pipe.buttonText : de.pipe.buttonText}
										</a>
									</span>
								}
							/>
						</Row>
					</Col>
				</div>
				<div className="custom-container mb-5">
					<Col>
						<ListItem
							title="Robots vs. Wrestlers (without Wrestlers)"
							imgSrc={robotsImgUrl}
							bulletPoints={lang == "en" ? en.robots.texts : de.robots.texts}
							lastChild={
								<span>
									<a target="_blank" href="https://jan0h4ck.itch.io/robotsvswrestlers" className="btn btn-primary mt-3">
										{lang == "en" ? en.robots.buttonTexts[0] : de.robots.buttonTexts[0]}
									</a>
								</span>
							}
						/>
					</Col>
				</div>
				<div className="custom-container mb-5">
					<Col>
						<ListItem
							title="WickedTD"
							imgSrc={wickedtdImgUrl}
							bulletPoints={lang == "en" ? en.wickedtd.texts : de.wickedtd.texts}
							lastChild={
								<span>
									<a target="_blank" href="https://jan0h4ck.itch.io/wickedtd" className="btn btn-primary mt-3">
										{lang == "en" ? en.wickedtd.buttonTexts[0] : de.wickedtd.buttonTexts[0]}
									</a>
								</span>
							}
						/>
					</Col>
				</div>
				<div className="custom-container mb-5">
					<Col>
						<ListItem
							title="Republic Bread"
							bulletPoints={lang == "en" ? en.bread.texts : de.bread.texts}
							imgSrc={breadImgUrl}
							lastChild={
								<span>
									<a
										target="_blank"
										href="https://www.hs-kempten.de/fakultaet-informatik/zentrale-einrichtungen/computerspiel-zentrum-games/projekt/republic-bread-2049"
										className="btn btn-primary mt-3"
									>
										{lang == "en" ? en.bread.buttonTexts[0] : de.bread.buttonTexts[0]}
									</a>
								</span>
							}
						/>
					</Col>
				</div>
			</Container>
		</>
	);
}
