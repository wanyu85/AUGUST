import { MenuItem } from "@mui/material";
import { theme } from "../../HeaderStyle";
import { StyledIcon } from "./UserDemoStyle";
import HomeIcon from "../../icons/HeaderIcon";

import firebase from "../../../../utils/firebase";
import "firebase/compat/auth";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const dataU = [
    {
        navigate: "/",
        title: "帳號管理",
        icon: <HomeIcon.AccSetting />,
    },
    {
        navigate: "/newPosts",
        title: "上傳新品",
        icon: <HomeIcon.PageIcon />,
    },
    {
        navigate: "/",
        title: "設定",
        icon: <HomeIcon.SettingIcon />,
    },
    {
        navigate: "/",
        title: "幫助中心",
        icon: <HomeIcon.HelpIcon />,
    },
    {
        navigate: "/",
        title: "登出",
        icon: <HomeIcon.LeaveIcon />,
    },
];

export default function UserDemoItem({ handleClose }) {
    const navigate = useNavigate();

    function handSignOut() {
        firebase.auth().signOut();
        handleClose();
    }

    return (
        <>
            {dataU.map((item, i) => (
                <MenuItem
                    key={i}
                    sx={theme.typography.h5}
                    onClick={() => {
                        item.title === "登出" ? handSignOut() : handleClose();
                        navigate(item.navigate);
                    }}
                >
                    <StyledIcon>{item.icon}</StyledIcon>
                    {item.title}
                </MenuItem>
            ))}
        </>
    );
}
