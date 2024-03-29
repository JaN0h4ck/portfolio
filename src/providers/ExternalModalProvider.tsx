import { createContext, useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

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
					<Modal.Title>Warning</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>The Link you clicked leads to an external website: "{href}"</p>
					<p className="fw-bold">Continue?</p>
				</Modal.Body>
				<Modal.Footer>
					<button className="btn btn-danger" onClick={handleClose}>
						Cancel
					</button>
					<a className="btn btn-success" href={href}>
						Continue
					</a>
				</Modal.Footer>
			</Modal>
			{children}
		</LinkModalContext.Provider>
	);
}

const useExternalLink = () => useContext(LinkModalContext);

export { useExternalLink, ExternalModalProvider };
