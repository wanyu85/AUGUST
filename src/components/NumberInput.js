import { useState } from "react";
import { Grid, TextField, IconButton, Typography } from "@mui/material";
import {
    numberContainer,
    rowFlexEndFlexStart,
    columnFlexEndCenter,
    rowFlexEndCenter,
    priceRed,
    priceGray,
} from "../pages/page/ProductPage/ProductPageStyle";

import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import styled from "@emotion/styled";
import { Scale } from "@mui/icons-material";
import { theme } from "../pages/Header/HeaderStyle";

const Btn = styled("button")({
    backgroundColor: "#e5e0d8",
    borderRadius: 5,
    width: 30,
    height: 30,
    paddingTop: 5,
    border: 0,
    marginLeft: 20,
    transform: "scale(1)",
    transition: "transform 0.3s ease-in-out",
    color: theme.palette.text.primary,
    "&:hover": {
        transform: "scale(1.1)",
        backgroundColor: theme.palette.primary.main,
    },
});

const iconStyle = {
    fontSize: 20,
    "&:hover": {
        color: "white",
    },
};

export default function NumberInput({ post }) {
    const [count, setCount] = useState(1);

    // 數量
    const handleAdd = () => {
        setCount(count + 1);
    };
    const handleDec = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const totalPrice = post.sale ? post.sale * count : post.price * count;

    return (
        <>
            <Grid item>
                <Typography>數量</Typography>
            </Grid>
            <Grid item container xs={6} lg={10} sx={numberContainer}>
                <Btn type='button' onClick={handleDec}>
                    <HorizontalRuleIcon sx={iconStyle} />
                </Btn>

                <Grid item pl={2} lg={6} xs={8}>
                    <TextField
                        type='text'
                        size='small'
                        value={count}
                        onChange={handleDec}
                    />
                </Grid>

                <Btn type='button' onClick={handleAdd}>
                    <AddIcon sx={iconStyle} />
                </Btn>
            </Grid>

            <Grid item mt={3} mb={3} xs={8}>
                小計
            </Grid>
            <Grid item container style={columnFlexEndCenter} xs={2}>
                <Grid item>
                    <Typography fontSize={20} sx={priceRed}>
                        {isNaN(totalPrice) ? "N/A" : "$" + totalPrice}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography ml={1} fontSize={15} sx={priceGray}>
                        {post.sale ? "$" + post.price * count : null}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}
