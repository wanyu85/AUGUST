import styled from "@emotion/styled";
import Icons from "../../../../Icons/Icons";

// ImageCardSlider.js
export const ImgContainer = styled("div")({
    width: 130,
    height: 150,
    position: "relative",
    color: "white",
    border: "2px solid #e9e9e9",
});

export const Image = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 10,
});

export const Content = styled("div")({
    position: "absolute",
    width: "90%",
    bottom: 6,
    left: 10,
    backgroundColor: "rgba(60, 60, 60,0.5)",
    borderRadius: 5,
});

export const ImgHover = styled("div")({
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(46, 46, 46,0.5)",
    opacity: 0,

    "&:hover,&imgHover": {
        opacity: 1,
        "& .hoverButton": {
            opacity: 1,
            border: "1px solid white",
            color: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 13,
        },
    },
});

export const StyledStar = styled("div")({
    svg: {
        width: "100%",
        height: "100%",
    },
    path: {
        fill: "#FDB800",
    },

    width: 13,
    height: 13,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    paddingTop: 3,
    paddingLeft: 5,
});

export const titleText = {
    fontSize: 14,
    fontWeight: "bold",
    pl: 1,
    pt: 1,
    color: "white",
};

export const text = {
    fontSize: 12,
    fontWeight: "bold",
};

// ! ImageCardSlider.js
// 按鍵
export const PrevArrowR = styled("div")({
    svg: {
        width: "100%",
        height: "100%",
    },
    path: {
        fill: "#cbc9c9",
    },
    width: "30px",
    height: "30px",
    position: "absolute",
    bottom: "45%",
    right: -25,
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

export const PrevArrowL = styled("div")({
    svg: {
        width: "100%",
        height: "100%",
    },
    path: {
        fill: "#cbc9c9",
    },
    width: "30px",
    height: "30px",
    position: "absolute",
    bottom: "45%",
    left: 0,
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
        <PrevArrowL onClick={onClick}>
            <Icons.ArrowL />
        </PrevArrowL>
    );
};

// 輪播圖
export const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    prevArrow: <ArrowR />,
    nextArrow: <ArrowL />,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 610,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};

export const cardTitle = {
    fontSize: 20,
    fontWeight: "bold",
};
