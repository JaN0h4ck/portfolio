import { useExternalLink } from "../providers/ExternalModalProvider";

type Props = {
	text: string;
	_href: string;
	_className: string;
	_style?: React.CSSProperties;
};

export function ExternalLink({ text, _href, _className, _style }: Props) {
	const { setHref: setLink } = useExternalLink();

	function OpenModal() {
		setLink(_href);
	}
	return (
		<span className={_className} onClick={() => OpenModal()} style={_style}>
			{text}
		</span>
	);
}
