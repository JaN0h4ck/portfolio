import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

type Props = {
	imgSrc: string;
	title: string;
	bulletPoints: Array<string>;
	lastChild?: React.ReactNode;
	children?: React.ReactNode;
	href?: string;
};

export function ListItem({ imgSrc, title, bulletPoints, lastChild, children, href }: Props) {
	return (
		<Row>
			<h3 className="fw-bold mb-3">{title}</h3>
			{imgSrc === "" ? (
				""
			) : href == undefined ? (
				<Image src={imgSrc} className="mb-3" fluid></Image>
			) : (
				<a href={href}>
					<Image src={imgSrc} className="mb-3" fluid></Image>
				</a>
			)}
			<ul className="mx-3">
				{bulletPoints.map((point, index) => {
					return <li key={`${title}-${index}`}>{point}</li>;
				})}
				{lastChild}
			</ul>
			{children}
		</Row>
	);
}
