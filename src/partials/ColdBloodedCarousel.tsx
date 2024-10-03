import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import * as en from "../assets/texts/games/en.json";
import * as de from "../assets/texts/games/de.json";
import { useState } from "react";
import { useI18n } from "../providers/I18nProvider.tsx";
import startImgUrl from "/src/assets/img/Pipe/start.webp";
import snakeImgUrl from "/src/assets/img/Pipe/snake.webp";
import outsideImgUrl from "/src/assets/img/Pipe/outside.webp";
import conveyorImgUrl from "/src/assets/img/Pipe/conveyor.webp";
import spidersImgUrl from "/src/assets/img/Pipe/spiders.webp";

export function ColdBloodedCarousel() {
	const [index, setIndex] = useState<number>(0);
	const { lang } = useI18n();

	const handleSelect = (selectedindex: number) => {
		setIndex(selectedindex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} className="mb-3" data-bs-theme="light">
			<Carousel.Item>
				<Image src={startImgUrl} fluid alt={lang == "en" ? en.pipe.images[0].alt : de.pipe.images[0].alt} />
				<Carousel.Caption>
					<p className="text-white">{lang == "en" ? en.pipe.images[0].Caption : de.pipe.images[0].Caption}</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Image src={snakeImgUrl} fluid alt={lang == "en" ? en.pipe.images[1].alt : de.pipe.images[1].alt} />
				<Carousel.Caption>
					<p className="text-white">{lang == "en" ? en.pipe.images[1].Caption : de.pipe.images[1].Caption}</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Image src={outsideImgUrl} fluid alt={lang == "en" ? en.pipe.images[2].alt : de.pipe.images[2].alt} />
				<Carousel.Caption>
					<p className="text-white">{lang == "en" ? en.pipe.images[2].Caption : de.pipe.images[2].Caption}</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Image src={conveyorImgUrl} fluid alt={lang == "en" ? en.pipe.images[3].alt : de.pipe.images[3].alt} />
				<Carousel.Caption>
					<p className="text-white">{lang == "en" ? en.pipe.images[3].Caption : de.pipe.images[3].Caption}</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Image src={spidersImgUrl} fluid alt={lang == "en" ? en.pipe.images[4].alt : de.pipe.images[4].alt} />
				<Carousel.Caption>
					<p className="text-white">{lang == "en" ? en.pipe.images[4].Caption : de.pipe.images[4].Caption}</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
