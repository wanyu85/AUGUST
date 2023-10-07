import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";

export const BoxBorder = styled("div")({
    border: "1px solid #adadad",
    padding: 10,
    margin: 20,
});

export const ImageButton = styled(ButtonBase)({
    backgroundColor: "rgba(46, 46, 46)",
    width: "100%",
    height: 200,
    textAlign: "center",
    position: "relative",
    overflow: "hidden",

    "&:hover": {
        backgroundColor: "rgba(46, 46, 46,0.8)",
        "& .imageMarked": {
            height: 4,
            width: 25,
            backgroundColor: "white",
            position: "absolute",
            bottom: 70,
            left: "calc(50% - 9px)",
            borderRadius: 5,
        },
    },
});

export const Image = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.65,
    objectPosition: "center",
});

export const text = {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
};
