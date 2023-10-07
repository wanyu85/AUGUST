import { cloneElement, useEffect, useState } from "react";
import { AppBar, Toolbar, useScrollTrigger, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import firebase from "../../utils/firebase";
import "firebase/compat/auth";

import { appBar } from "./HeaderStyle";
import UserDemo from "./user/UserDemo/UserDemo";
import Search from "./Search";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Notify from "./Notify/Notify";
import Login from "./user/Login/Login";
import Topics from "./Topics";

import Icons from "../../Icons/Icons";
import styled from "@emotion/styled";

const LogoStyle = styled("div")({
    svg: {
        width: "100%",
        height: "100%",
    },
    width: 90,
    height: 90,
});

// 監聽滾動事件
function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return cloneElement(children, {
        elevation: trigger ? 4 : 1,
    });
}

// 確保組件接收到預期的屬性（props）數據類型
HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired, //確保是 React 元素
    window: PropTypes.func, // 函數類型
};

export default function Header(props) {
    // 間聽使用者狀態
    const [user, setUser] = useState(null);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
    });

    return (
        <>
            <HideOnScroll {...props}>
                <AppBar position='fixed' sx={appBar}>
                    <Toolbar sx={{ mt: 1 }}>
                        <Grid
                            container
                            direction='row'
                            justifyContent='space-around'
                            alignItems='center'
                        >
                            <Grid
                                item
                                container
                                direction='row'
                                justifyContent='center'
                                alignItems='center'
                                lg={4}
                                spacing={4}
                                xs={6}
                            >
                                <Grid item as={Link} to='/'>
                                    <LogoStyle>
                                        <Icons.Logo />
                                    </LogoStyle>
                                </Grid>
                                <Grid item mt={1}>
                                    <Topics />
                                </Grid>
                            </Grid>

                            <Grid
                                item
                                container
                                direction='row'
                                justifyContent='center'
                                alignItems='center'
                                xs={6}
                                lg={5}
                                spacing={2}
                            >
                                <Grid
                                    item
                                    container
                                    direction='row'
                                    alignItems='center'
                                    justifyContent='flex-end'
                                    xs={1}
                                    lg={2}
                                >
                                    <Grid item>
                                        <Search />
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <ShoppingCart />
                                </Grid>
                                <Grid item>
                                    <Notify />
                                </Grid>
                                <Grid item>
                                    {user ? <UserDemo /> : <Login />}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </>
    );
}
