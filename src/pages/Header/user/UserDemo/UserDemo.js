import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, Button, IconButton } from "@mui/material";
// icon
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

import { HeaderIconBtn } from "../../HeaderStyle";
import { StyledUserDemo, Icon, loginBtn } from "./UserDemoStyle";
import UserDemoItem from "./UserDemoItem";
import { Box } from "@mui/system";

export default function UserDemo() {
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
                    sx={HeaderIconBtn}
                    id='user-btn'
                    onClick={handleClick}
                    aria-controls={open ? "user-menu" : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? "true" : undefined}
                >
                    {/* <Box width={50} height={50}>
                        <img
                            style={{
                                borderRadius: "50%",
                                width: "100%",
                                height: "100%",
                                display: "flex",
                            }}
                            src={require("../../../../image/0.0.jpg")}
                        />
                    </Box> */}

                    <Icon>
                        <Avatar
                            src={require("../../../../image/0.0.jpg")}
                            sx={{ position: "absolute", top: 0, left: -1 }}
                        />
                        {/* <PersonRoundedIcon /> */}
                    </Icon>
                </IconButton>
            </motion.div>

            <StyledUserDemo
                id='user-menu'
                MenuListProps={{ "aria-labelledby": "user-btn" }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <UserDemoItem handleClose={handleClose} />
            </StyledUserDemo>
        </>
    );
}
