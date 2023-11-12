import styled from "@emotion/styled";
import { theme, fontColor } from "../../../Header/HeaderStyle";

import Icons from "../../../../Icons/Icons";

// 按鍵
const PrevArrowR = styled("div")({
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
    bottom: "58%",
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

const PrevArrowL = styled("div")({
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
    bottom: "58%",
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

const ArrowR = (props) => {
    const { onClick } = props;
    return (
        <PrevArrowR onClick={onClick}>
            <Icons.ArrowR />
        </PrevArrowR>
    );
};

const ArrowL = (props) => {
    const { onClick } = props;
    return (
        <PrevArrowL onClick={onClick}>
            <Icons.ArrowL />
        </PrevArrowL>
    );
};

// PageCardSlider.js
export const cardTitle = {
    fontSize: 20,
    fontWeight: "bold",
};

// 輪播圖
export const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    prevArrow: <ArrowR />,
    nextArrow: <ArrowL />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};

// PageCardItem.js
export const StyledHeartIcon = styled("div")({
    width: "30px",
    height: "30px",
    position: "absolute",
    zIndex: 3,
    bottom: 10,
    right: 10,
    svg: {
        width: "100%",
        height: "100%",
    },
});

export const StyledHeartBorderIcon = styled("div")({
    width: "30px",
    height: "30px",
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 2,
    "&:hover": {
        zIndex: 5,
    },

    svg: {
        width: "100%",
        height: "100%",
    },
});

export const StyledStar = styled("div")({
    width: 15,
    height: 15,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    paddingTop: 1,

    svg: {
        width: "100%",
        height: "100%",
    },

    path: {
        fill: "#FDB800",
    },
});

export const ImgHover = styled("div")({
    position: "absolute",
    width: "auto",
    height: "auto",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(46, 46, 46,0.5)",
    opacity: 0,
    zIndex: 3,

    "&:hover": {
        opacity: 1,
    },
});

export const iconItem = {
    position: "relative",
    width: "100%",
    height: 190,
};

export const media = {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 2,
    "&:hover": {
        zIndex: 1,
    },
};

export const tittle = {
    fontSize: theme.typography.h5,
    color: theme.palette.text.primary,
    fontWeight: "bold",
    pb: 1,
    pt: 1,
};

export const saleStyle = {
    fontSize: theme.typography.h5,
    color: theme.palette.text.secondary,
    fontWeight: "bold",
};

export const priceStyle = {
    fontSize: theme.typography.h6,
    color: fontColor,
    textDecoration: "line-through",
};

export const textStyle = {
    fontSize: theme.typography.h6,
    color: theme.palette.text.primary,
};
