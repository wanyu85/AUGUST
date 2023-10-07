import Icons from "../../../../Icons/Icons";
import styled from "@emotion/styled";

// Carousel.js
export const ContainerCarousel = styled("div")({
    height: "10rem",
    backgroundColor: "#4e5156",
    margin: "0 2.5rem",
    padding: "0.3rem",
    cursor: "pointer", // 滑鼠樣式
    position: "relative",
    overflow: "hidden",
    width: "440px",
    height: "350px",
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 400ms ease-in-out",
        "&:hover": {
            transform: "scale(1.1)",
        },
    },
});

// CarouselSlider.js
// 按鍵
const PrevArrowR = styled("div")({
    svg: {
        width: "100%",
        height: "100%",
    },
    path: {
        fill: "#cbc9c9",
    },
    width: "40px",
    height: "40px",
    position: "absolute",
    bottom: "45%",
    right: "4%",
    zIndex: 2,
    transition: "transform 300ms ease-in-out",

    "&:hover": {
        cursor: "pointer", //滑鼠樣式
        transform: "scale(1.4)",
        path: {
            fill: "#6e6d6d",
        },
    },
});

const NextArrowL = styled("div")({
    svg: {
        width: "100%",
        height: "100%",
    },
    path: {
        fill: "#cbc9c9",
    },
    width: "40px",
    height: "40px",
    position: "absolute",
    bottom: "45%",
    left: "4.5%",
    zIndex: 1,
    transition: "transform 300ms ease-in-out",

    "&:hover": {
        cursor: "pointer", //滑鼠樣式
        transform: "scale(1.4)",
        path: {
            fill: "#6e6d6d",
        },
    },
});

export const ArrowR = (props) => {
    const { onClick } = props;
    return (
        <PrevArrowR onClick={onClick}>
            <Icons.ArrowR />
        </PrevArrowR>
    );
};

export const ArrowL = (props) => {
    const { onClick } = props;
    return (
        <NextArrowL onClick={onClick}>
            <Icons.ArrowL />
        </NextArrowL>
    );
};

// 輪播圖
export const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: <ArrowR />,
    nextArrow: <ArrowL />,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: true,
            },
        },
        {
            breakpoint: 950,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export const CarouselContainer = styled("div")({
    position: "relative",
});
