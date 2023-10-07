import styled from "@emotion/styled";
import { theme } from "../../Header/HeaderStyle";

export const TitleBorder = styled("div")({
    width: 5,
    height: 40,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
});

export const TitleText = styled("div")({
    fontWeight: "bold",
    fontSize: 25,
});

export const inputField = {
    m: 2,
    width: "70ch",
};

export const stackOut = {
    p: 5,
    m: 5,
    borderRadius: 2,
    border: "2px solid #979797",
};

export const stackBox = {
    p: "10px 100px",
};

export const imgGrid = {
    width: "100%",
    height: "100%",
    border: "1px solid #c2c2c2",
};

export const img = {
    objectFit: "contain",
    width: "100%",
    height: "100%",
};

export const UpImg = styled("div")({
    color: "#818181",
    fontWeight: "bold",
    position: "relative",
    top: "20%",
});

export const inputLabel = {
    border: "1px solid #979797",
    borderRadius: 1,
    color: "#818181",
    fontWeight: "bold",
    width: 100,
    height: 100,
    borderStyle: "dashed",
    textAlign: "center",
    m: 2,
};

export const Btn = styled("div")({
    m: 1,
    position: "relative",
});

export const size = [
    {
        size: "S",
    },
    {
        size: "M",
    },
    {
        size: "L",
    },
];

export const color = [
    {
        color: "黑色",
    },
    {
        color: "白色",
    },
    {
        color: "紅色",
    },
    {
        color: "粉色",
    },
    {
        color: "灰色",
    },
    {
        color: "藍色",
    },
];

export const center = {
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
};
