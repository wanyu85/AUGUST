import { Button, Grid, SvgIcon, Typography } from "@mui/material";
import { fontColor } from "../HeaderStyle";
import styled from "@emotion/styled";
import HomeIcon from "../icons/HeaderIcon";

const StyledIcon = styled("div")({
    svg: {
        width: "100%",
        height: "100%",
    },

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 95,
    height: 95,
    paddingBottom: 10,

    path: {
        fill: " rgba(158, 158, 158, 0.7)",
    },
});

const NoShoppingCartStyleBtn = {
    color: fontColor,
    fontSize: 10,
};

export default function NoShoppingCart() {
    return (
        <>
            <Grid container height={360} direction='column' justifyContent='center' alignItems='center'>
                <StyledIcon>
                    <HomeIcon.ShoppingIcon />
                </StyledIcon>
                <Typography fontSize={15} pb={1} color='#9e9e9e'>
                    您的購物車中沒有商品
                </Typography>
                <Button href='#' variant='outlined' sx={NoShoppingCartStyleBtn}>
                    去購物
                </Button>
            </Grid>
        </>
    );
}
