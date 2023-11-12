import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel from "./Carousel";
import { settings, CarouselContainer } from "./CarouselStyle";
import { dataC } from "./dataC";

export default function CarouselSlider() {
    const arrowRef = useRef(null);
    const sliderProject = dataC.map((item, i) => (
        <Carousel item={item} key={i} loading={false} />
    ));

    return (
        <CarouselContainer>
            <Slider ref={arrowRef} {...settings} className='carouselDots'>
                {sliderProject}
            </Slider>
        </CarouselContainer>
    );
}
