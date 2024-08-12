type Props = {
    bulletPoints: Array<string>;
    className?: string;
}

export function BulletPoints({bulletPoints, className = "mx-3"}: Props) {
    return (
        <ul className={className}>
            {bulletPoints.map((point, index) => {
				return <li key={`point-${index}`}>{point}</li>;
			})}
        </ul>
    )
}