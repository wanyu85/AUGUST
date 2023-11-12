import styled from "@emotion/styled";
import {
    PrevArrowR,
    PrevArrowL,
} from "../../Home/components/ImageCard/ImageCardStyle";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { theme } from "../../Header/HeaderStyle";

export const sellText = {
    fontSize: 15,
    fontWeight: "bold",
};

export const divider = {
    mt: 3,
    mb: 2,
};

export const numberContainer = {
    p: 1,
    direction: "row",
    justifyContent: "flex-end",
    alignItems: "center",
};

export const collect = {
    width: "100%",
    height: 40,
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "white",
    },
};

export const shoppingCar = {
    width: "100%",
    height: 40,
    "&:hover": {
        backgroundColor: "white",
        color: theme.palette.primary.main,
        border: 1,
        borderColor: "#bcb2a6",
    },
};

export const priceRed = {
    color: "#BA3939",
    fontWeight: "bold",
};

export const priceGray = {
    color: "#7C7C80",
    fontWeight: "bold",
    textDecoration: "line-through",
};

// ! ProductPageImage
export const ArrowR = (props) => {
    const { onClick } = props;
    return (
        <PrevArrowR onClick={onClick}>
            <ArrowRightIcon />
        </PrevArrowR>
    );
};

export const ArrowL = (props) => {
    const { onClick } = props;
    return (
        <PrevArrowL onClick={onClick}>
            <ArrowLeftIcon />
        </PrevArrowL>
    );
};

export const gridImg = {
    width: 80,
    height: 80,
    border: "1px solid #bdbdbe",
    cursor: "pointer",
    display: "inline-block",
};

export const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <ArrowL />,
    nextArrow: <ArrowR />,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            },
        },
    ],
};

export const firstImage = {
    width: "100%",
    height: "auto",
    border: "1px solid  #bdbdbe",
};

export const SliderBox = styled("div")({
    width: "100%",
    height: "auto",
    marginRight: 25,
});

// ! TabStar
export const feedback = {
    border: "1px solid #e0e0e1",
    pb: 2,
    borderRadius: 2,
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
};

export const Tag = {
    width: "4px",
    height: 55,
    bgcolor: theme.palette.primary.main,
    mt: 5,
    mr: 1,
    borderRadius: 5,
};

// - row
export const container = {
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    pt: 20,
};

export const rowCenterCenter = {
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
};

export const rowFlexStartCenter = {
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "center",
};

export const rowFlexEndCenter = {
    direction: "row",
    justifyContent: "flex-end",
    alignItems: "center",
};

export const rowSpaceBetweenCenter = {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
};

export const rowSpaceBetweenFlexStart = {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
};

export const rowSpaceAroundCenter = {
    direction: "row",
    justifyContent: "space-around",
    alignItems: "center",
};

export const rowFlexEndFlexStart = {
    direction: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
};

// - column
export const columnFlexEndCenter = {
    direction: "column",
    justifyContent: "flex-end",
    alignItems: "center",
};

export const columnCenterStretch = {
    direction: "column",
    justifyContent: "center",
    alignItems: "stretch",
};

export const columnCenterFlexStart = {
    direction: "column",
    justifyContent: "center",
    alignItems: "flex-start",
};
