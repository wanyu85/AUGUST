import { Typography, Stack, Button } from "@mui/material";

import { theme } from "../HeaderStyle";
import { dataS } from "./dataS";
import ShoppingCartItem from "./ShoppingCartItem";

const checkShoppingCart = {
    fontSize: theme.typography.h5,
    color: theme.palette.text.primary,
    backgroundColor: "#e5e0d8",
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
        // color: "#606060",
        color: theme.palette.background.paper,
    },
};

export default function NewShoppingCart({ handleClose }) {
    return (
        <>
            <Typography
                fontSize={theme.typography.h5}
                pl={2}
                pr={2}
                pt={1}
                pb={1}
                fontWeight='bold'
            >
                新加入的商品
            </Typography>
            {/* .slice(-3) 擷取渲染最後3個 */}
            {dataS.slice(-3).map((item, i) => (
                <ShoppingCartItem
                    key={i}
                    item={item}
                    loading={false}
                    handleClose={handleClose}
                />
            ))}
            <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                pt={4}
                pl={2}
                pr={2}
                pb={2}
            >
                <Typography fontSize={theme.typography.h5} fontWeight='bold'>
                    還有 {dataS.length > 3 ? dataS.length - 3 : 0} 件商品
                </Typography>
                <Button href='#' sx={checkShoppingCart}>
                    查看購物車
                </Button>
            </Stack>
        </>
    );
}
