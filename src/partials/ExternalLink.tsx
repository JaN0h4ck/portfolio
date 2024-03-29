import { useExternalLink } from "../providers/ExternalModalProvider";

type Props = {
	text: string;
	_href: string;
	_className: string;
};

export function ExternalLink({ text, _href, _className }: Props) {
	const { setHref: setLink } = useExternalLink();

	function OpenModal() {
		setLink(_href);
		console.log("here");
	}
	return (
		<div className={_className} onClick={() => OpenModal()}>
			{text}
		</div>
	);
}
