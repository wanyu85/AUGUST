import { Dialog } from "@mui/material";
import { styled, createTheme } from "@mui/material/styles";

export const loginBtn = {
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 5,
    color: "#606060",
    "&:hover": {
        backgroundColor: "#8d7f70",
        color: "#e5e0d8",
    },
};

export const UserDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
        width: 450,
        height: "auto",
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
    "& .MuiDialog-paper": {
        borderRadius: 15,
    },
}));

export const title = {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    m: "auto",
    top: 30,
};

export const theme = createTheme({
    palette: {
        primary: {
            main: "#8d7f70",
        },
    },
});

export const InputIcon = styled("div")({
    svg: {
        width: "80%",
        height: "100%",
    },
    path: {
        fill: "#4F4D4D",
    },
    width: 35,
    height: 20,
});

export const registerBtn = {
    fontSize: 15,
    color: "#979797",
};

export const inputBtn = {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
};

export const errorText = {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
};

export const loadingBtn = {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-12px",
    marginLeft: "-12px",
};
