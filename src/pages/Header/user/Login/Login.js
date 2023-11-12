import { useState, React } from "react";

import firebase from "../../../../utils/firebase";
import "firebase/compat/auth";

import {
    Button,
    ThemeProvider,
    DialogContent,
    useMediaQuery,
} from "@mui/material";

import { SubmitProvider } from "../SubmitProvider";
import { loginBtn, UserDialog, theme } from "../userStyle";

import TitleComponent from "../TitleComponent";
import FormikLogin from "./FormikLogin";
import FormikRegister from "../Register/FormikRegister";

export default function Login() {
    // 頁面
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // 螢幕大小調整
    // ! useMediaQuery : 在 React 組件中訪問當前視口（viewport）的媒體查詢狀態（media queries）
    const isScreenWidth = useMediaQuery("(max-width:1000px)");

    // 註冊登入切換
    const [active, setActive] = useState("login");
    const activeFrom = () => {
        setActive(active === "login" ? "register" : "login");
    };

    return (
        <ThemeProvider theme={theme}>
            <Button
                variant='outlined'
                color='inherit'
                sx={loginBtn}
                onClick={handleClick}
            >
                {isScreenWidth ? "登入" : "註冊/登入"}
            </Button>
            <SubmitProvider>
                <UserDialog
                    onClose={handleClose}
                    aria-labelledby='dialog-title'
                    open={open}
                >
                    <TitleComponent handleClose={handleClose} />
                    <DialogContent>
                        {active === "login" ? (
                            <FormikLogin activeFrom={activeFrom} />
                        ) : (
                            <FormikRegister activeFrom={activeFrom} />
                        )}
                    </DialogContent>
                </UserDialog>
            </SubmitProvider>
        </ThemeProvider>
    );
}
