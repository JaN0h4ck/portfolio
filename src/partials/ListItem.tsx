import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

type Props = {
	imgSrc: string;
	title: string;
	bulletPoints: Array<string>;
};

export function ListItem({ imgSrc, title, bulletPoints }: Props) {
	return (
		<Row>
			<h3>{title}</h3>
			{imgSrc === "" ? <div className="placeholder placeholder-lg col-6"></div> : <Image src={imgSrc} fluid></Image>}
			<ul>
				{bulletPoints.map((point, index) => {
					return <li key={`${title}-${index}`}>{point}</li>;
				})}
			</ul>
		</Row>
	);
}
