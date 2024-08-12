type Props = {
    bulletPoints: Array<string>;
    className?: string;
    lastChild?: React.ReactNode;
}

export function BulletPoints({bulletPoints, lastChild, className = "mx-3"}: Props) {
    return (
        <ul className={className}>
            {bulletPoints.map((point, index) => {
				return <li key={`point-${index}`}>{point}</li>;
			})}
            {lastChild}
        </ul>
    )
}