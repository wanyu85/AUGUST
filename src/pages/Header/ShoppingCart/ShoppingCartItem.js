import { MenuItem, Box, Grid, Typography, Divider, Container, Skeleton } from "@mui/material";
import styled from "@emotion/styled";

import { fontColor } from "../HeaderStyle";

const Image = styled("img")({
    width: 50,
    height: 50,
});

export default function ShoppingCartItem(props) {
    const { handleClose, item, loading } = props;
    const { productName, size, color, price, number, imgUrl } = item;

    return (
        <>
            <MenuItem onClick={handleClose} disableRipple>
                <Grid container>
                    {loading ? (
                        <Skeleton variant='rectangular' width={50} height={50} />
                    ) : (
                        <Grid item xs={2}>
                            <Image src={require(`../../../image/${imgUrl}`)} />
                        </Grid>
                    )}

                    <Grid item xs={7} pl={2}>
                        {loading ? <Skeleton height={20} /> : <Typography fontSize={13}>{productName}</Typography>}
                        {loading ? (
                            <Skeleton height={20} width={80} />
                        ) : (
                            <Typography fontSize={12} color={fontColor}>
                                {size} - {color}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={2} sx={{ textAlign: "right" }}>
                        {loading ? (
                            <Skeleton height={20} width={40} sx={{ ml: 2 }} />
                        ) : (
                            <Typography fontSize={14}>{price}</Typography>
                        )}
                        {loading ? (
                            <Skeleton height={20} width={25} sx={{ ml: 4 }} />
                        ) : (
                            <Typography fontSize={12} color={fontColor}>
                                x{number}
                            </Typography>
                        )}
                    </Grid>
                </Grid>
            </MenuItem>
            <Divider sx={{ width: "90%", margin: "0 auto" }} />
        </>
    );
}
