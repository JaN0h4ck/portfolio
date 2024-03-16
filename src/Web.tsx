import Container from "react-bootstrap/Container";
import { ListItem } from "./partials/ListItem";

export function Web() {
	return (
		<>
			<h1 className="text-center">Web</h1>
			<Container>
				<ListItem
					title="This Website!"
					imgSrc="/assets/react.svg"
					bulletPoints={["Private Project", "Simple React 🤝 Vite SPA with Bootstrap 5"]}
					lastChild={
						<li>
							Check out the Source Code on <a href="https://github.com/jan0h4ck/portfolio">GitHub</a>
						</li>
					}
				/>
				<ListItem
					title="Link List"
					imgSrc=""
					bulletPoints={["Private Project", "HTML, SCSS and some JS", "CD with GitHub Actions"]}
				>
					<span>
						<a className="btn btn-secondary me-2" href="https://linklist.jan-nothacker.de/">
							Check it out!
						</a>
						<a className="btn btn-secondary" href="https://github.com/jan0h4ck/linklist">
							Source Code
						</a>
					</span>
				</ListItem>
				<ListItem
					title="Project at CloudWerkGmbH"
					imgSrc=""
					bulletPoints={[
						"Made during an internship as part of my studies",
						"Not released yet",
						"Large Scale React SPA for managing Users",
						"More Infos soon-ish",
					]}
				/>
			</Container>
		</>
	);
}
