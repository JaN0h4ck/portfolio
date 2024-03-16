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
		<Row>
			<h3 className="fw-bold">{title}</h3>
			{imgSrc === "" ? "" : <Image src={imgSrc} fluid></Image>}
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
