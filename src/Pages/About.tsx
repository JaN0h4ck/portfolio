import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useI18n } from "../providers/I18nProvider";
import * as en from "../assets/texts/about/en.json";
import * as de from "../assets/texts/about/de.json";
import benniImgUrl from "../assets/img/benni.jpg";
import { ExternalLink } from "../partials/ExternalLink";

export default function About() {
	const { lang } = useI18n();
	return (
		<>
			<h1 className="text-center fw-bold mb-4">{lang == "en" ? en.title : de.title}</h1>
			<Container>
				<div className="d-flex flex-column align-items-center">
					<Image src={benniImgUrl} roundedCircle width={"250svw"}></Image>
					<h3 className="fw-bold my-3">Jan Nothacker</h3>
					<p>{lang == "en" ? en.subtitle : de.subtitle}</p>
					<p>{lang == "en" ? en.paragraph : de.paragraph}</p>
					<ExternalLink
						text={lang == "en" ? en.btn : de.btn}
						_className="btn btn-primary"
						_href="https://www.linkedin.com/in/jan-robert-nothacker-0a7b43264/"
					/>
				</div>
			</Container>
		</>
	);
}
