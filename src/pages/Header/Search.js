import React from "react";
import { InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const IconStyle = styled("div")({
    width: 25,
    height: 25,
    mt: 1,

    svg: {
        width: "100%",
        height: "100%",
    },

    path: {
        fill: "#606060",
    },
});

// styled 樣式化
const Search = styled("div")(({ theme }) => ({
    position: "relative",

    "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
    borderRadius: 100,

    // 斷點
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "20%",
    left: 0,
    "&:honer": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    fontSize: 15,
    color: "#979797",

    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(3)})`,
        transition: theme.transitions.create("width"),
        [theme.breakpoints.up("xs")]: {
            width: "0ch",
            "&:focus": {
                width: "10ch",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
        },
        [theme.breakpoints.up("sm")]: {
            width: "0ch",
            "&:focus": {
                width: "10ch",
                borderBottom: "1px solid #979797",
                borderRadius: 100,
            },
        },
        [theme.breakpoints.up("md")]: {
            width: "0ch",
            "&:focus": {
                width: "10ch",
                borderBottom: "1px solid #979797",
                borderRadius: 100,
            },
        },
        [theme.breakpoints.up("lg")]: {
            width: "0ch",
            "&:focus": {
                width: "30ch",
                borderBottom: "1px solid #979797",
                borderRadius: 100,
            },
        },
    },
}));

export default function SearchBox() {
    return (
        <Search>
            <SearchIconWrapper>
                <IconStyle>
                    <SearchIcon
                        fontSize='inherit'
                        sx={{
                            ml: 1,
                        }}
                    />
                </IconStyle>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder='Search…'
                inputProps={{ "aria-label": "search" }}
            />
        </Search>
    );
}
