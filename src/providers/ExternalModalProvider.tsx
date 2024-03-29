import { createContext, useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useI18n } from "./I18nProvider";

type Props = {
	children: React.ReactNode;
};

type LinkModalContextProps = {
	href: string;
	setHref: React.Dispatch<React.SetStateAction<string>>;
};

const LinkModalContext = createContext<LinkModalContextProps>({ href: "", setHref: () => {} });

function ExternalModalProvider({ children }: Props) {
	const [href, setHref] = useState<string>("");
	const { lang } = useI18n();
	useEffect(() => {
		console.log("href: " + href);
	}, [href]);

	function handleClose() {
		setHref("");
	}
	return (
		<LinkModalContext.Provider value={{ href, setHref }}>
			<Modal show={href != ""} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{lang == "en" ? "Warning" : "Achtung"}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						{lang == "en"
							? " The Link you clicked leads to an external website:"
							: "Der Link, den Sie aufgerufen haben, führt zu einer externen Webseite:"}
					</p>
					<p className="fw-bold">{href}</p>
					<p className="fw-bold">{lang == "en" ? "Continue?" : "Fortfahren?"}</p>
				</Modal.Body>
				<Modal.Footer>
					<button className="btn btn-danger" onClick={handleClose}>
						{lang == "en" ? "Cancel" : "Abbrechen"}
					</button>
					<a className="btn btn-success" href={href}>
						{lang == "en" ? "Continue" : "Fortfahren"}
					</a>
				</Modal.Footer>
			</Modal>
			{children}
		</LinkModalContext.Provider>
	);
}

const useExternalLink = () => useContext(LinkModalContext);

export { useExternalLink, ExternalModalProvider };
