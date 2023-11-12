import { useState } from "react";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";

import { StyledHeaderIcon } from "../HeaderStyle";
import NewShoppingCart from "./NewShoppingCart";
import NoShoppingCart from "./NoShoppingCart";
import { dataS } from "./dataS";
import HomeIcon from "../icons/HeaderIcon";
import { StyledIcon } from "../Notify/Notify";

export default function ShoppingCart() {
    const { ShoppingIcon } = HomeIcon;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
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
                        <ShoppingIcon />
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
                {dataS.length > 0 ? (
                    <NewShoppingCart handleClose={handleClose} />
                ) : (
                    <NoShoppingCart handleClose={handleClose} />
                )}
            </StyledHeaderIcon>
        </>
    );
}
