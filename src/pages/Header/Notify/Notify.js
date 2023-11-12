import { useState } from "react";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

import HomeIcon from "../icons/HeaderIcon";
import {
    appBar,
    StyledHeaderIcon,
    StyledBadge,
    HeaderIconBtn,
} from "../HeaderStyle";
import NewNotifyIcon from "./NewNotifyIcon";
import NoNotifyIcon from "./NoNotifyIcon";
import { dataN } from "./dataN";

export const StyledIcon = styled("div")({
    svg: {
        width: "100%",
        height: "100%",
    },

    path: {
        fill: " #4F4D4D",
    },

    display: "flex",
    width: 25,
    height: 25,
});

export default function Notify() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [data, setData] = useState(dataN);

    const handleClick = (index) => {
        setAnchorEl(index.currentTarget);

        const newRead = [...data];
        console.log(newRead.read);

        // newRead[index].read = 1;
        // setData(newRead);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "keyframes" }}
            >
                <IconButton
                    // sx={HeaderIconBtn}
                    id='shoppingCart-btn'
                    onClick={handleClick}
                    aria-controls={open ? "shoppingCart-menu" : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? "true" : undefined}
                >
                    <StyledIcon>
                        <HomeIcon.NotifyIcon />
                    </StyledIcon>
                </IconButton>
            </motion.div>
            <StyledHeaderIcon
                id='shoppingCart-menu'
                MenuListProps={{ "aria-labelledby": "shoppingCart-btn" }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {dataN.length > 0 ? (
                    <NewNotifyIcon handleClose={handleClose} />
                ) : (
                    <NoNotifyIcon handleClose={handleClose} />
                )}
            </StyledHeaderIcon>
        </>
    );
}
