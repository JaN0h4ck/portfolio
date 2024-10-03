import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import * as en from "../assets/texts/games/en.json";
import * as de from "../assets/texts/games/de.json";
import { useState } from "react";
import { useI18n } from "../providers/I18nProvider.tsx";
import startImgUrl from "/src/assets/img/ColdBlooded/TitleScreen.webp";
import freezeImgUrl from "/src/assets/img/ColdBlooded/freeze.webp";
import batteryImgUrl from "/src/assets/img/ColdBlooded/battery.webp";
import floatImgUrl from "/src/assets/img/ColdBlooded/float.webp";

export function ColdBloodedCarousel() {
	const [index, setIndex] = useState<number>(0);
	const { lang } = useI18n();

	const handleSelect = (selectedindex: number) => {
		setIndex(selectedindex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} className="mb-3" data-bs-theme="light">
			<Carousel.Item>
				<Image
					src={startImgUrl}
					fluid
					alt={lang == "en" ? en.coldBlooded.images[0].alt : de.coldBlooded.images[0].alt}
				/>
				<Carousel.Caption>
					<p className="text-white">
						{lang == "en" ? en.coldBlooded.images[0].Caption : de.coldBlooded.images[0].Caption}
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Image
					src={freezeImgUrl}
					fluid
					alt={lang == "en" ? en.coldBlooded.images[1].alt : de.coldBlooded.images[1].alt}
				/>
				<Carousel.Caption>
					<p className="text-white">
						{lang == "en" ? en.coldBlooded.images[1].Caption : de.coldBlooded.images[1].Caption}
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Image
					src={floatImgUrl}
					fluid
					alt={lang == "en" ? en.coldBlooded.images[2].alt : de.coldBlooded.images[2].alt}
				/>
				<Carousel.Caption>
					<p className="text-white">
						{lang == "en" ? en.coldBlooded.images[2].Caption : de.coldBlooded.images[2].Caption}
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Image
					src={batteryImgUrl}
					fluid
					alt={lang == "en" ? en.coldBlooded.images[3].alt : de.coldBlooded.images[3].alt}
				/>
				<Carousel.Caption>
					<p className="text-white">
						{lang == "en" ? en.coldBlooded.images[3].Caption : de.coldBlooded.images[3].Caption}
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
