import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

type Props = {
	imgSrc: string;
	title: string;
	bulletPoints: Array<string>;
	lastChild?: React.ReactNode;
	children?: React.ReactNode;
};

export function ListItem({ imgSrc, title, bulletPoints, lastChild, children }: Props) {
	return (
		<Row className="mb-5">
			<h3 className="fw-bold mb-3">{title}</h3>
			{imgSrc === "" ? "" : <Image src={imgSrc} className="mb-3" fluid></Image>}
			<ul>
				{bulletPoints.map((point, index) => {
					return <li key={`${title}-${index}`}>{point}</li>;
				})}
				{lastChild}
			</ul>
			{children}
		</Row>
	);
}
