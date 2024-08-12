import Container from "react-bootstrap/Container";
import { ListItem } from "../partials/ListItem";
import { useI18n } from "../providers/I18nProvider";
import * as en from "../assets/texts/web/en.json";
import * as de from "../assets/texts/web/de.json";
import linktreeImgUrl from "../assets/img/linktree.png";

export default function Web() {
	const { lang } = useI18n();
	return (
		<>
			<h1 className="text-center fw-bold mb-4">Web</h1>
			<Container>
				<ListItem
					title={lang == "en" ? en.portfolio.title : de.portfolio.title}
					imgSrc=""
					bulletPoints={lang == "en" ? en.portfolio.text : de.portfolio.text}
					lastChild={
						<li>
							{lang == "en" ? en.portfolio.lastChild : de.portfolio.lastChild}
							<a target="_blank" href="https://github.com/jan0h4ck/portfolio">Github</a>
						</li>
					}
				/>
				<ListItem
					title={lang == "en" ? en.linktree.title : de.linktree.title}
					imgSrc={linktreeImgUrl}
					bulletPoints={lang == "en" ? en.linktree.text : de.linktree.text}
					href="https://linklist.jan-nothacker.de/"
				>
					<span>
						<a className="btn btn-primary me-2" href="https://linklist.jan-nothacker.de/">
							{lang == "en" ? "Check it out!" : "Hier anschauen!"}
						</a>
						<a className="btn btn-secondary" target="_blank" href="https://github.com/jan0h4ck/linklist">Source Code (Github)</a>
					</span>
				</ListItem>
				<ListItem
					title={lang == "en" ? en.cloudwerk.title : de.cloudwerk.title}
					imgSrc=""
					bulletPoints={lang == "en" ? en.cloudwerk.text : de.cloudwerk.text}
				/>
			</Container>
		</>
	);
}
