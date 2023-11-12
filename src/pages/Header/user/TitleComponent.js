import { React } from "react";
import { IconButton, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { title, theme } from "./userStyle";
import Icons from "../../../Icons/Icons";
import styled from "@emotion/styled";

const Logo = styled("div")({
    svg: {
        width: "100%",
        height: "100%",
    },
    width: 130,
    height: 130,
});

export default function TitleComponent({ handleClose }) {
    return (
        <>
            <DialogTitle id='dialog-title' sx={title}>
                <Logo>
                    <Icons.Logo />
                </Logo>
            </DialogTitle>

            <IconButton
                aria-label='close'
                onClick={handleClose}
                sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
        </>
    );
}
