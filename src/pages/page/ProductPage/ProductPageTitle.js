import {
    Autocomplete,
    Box,
    Button,
    Divider,
    Grid,
    IconButton,
    Rating,
    TextField,
    ThemeProvider,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { usePost } from "../PostProvider";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import firebase from "../../../utils/firebase";
import "firebase/compat/auth";

import Icons from "../../../Icons/Icons";
import { StyledStar } from "../../Home/components/ImageCard/ImageCardStyle";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

import { theme, loadingBtn } from "../../Header/user/userStyle";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import NumberInput from "../../../components/NumberInput";

import {
    rowCenterCenter,
    rowFlexStartCenter,
    rowSpaceBetweenCenter,
    rowSpaceBetweenFlexStart,
    sellText,
    divider,
    numberContainer,
    collect,
    shoppingCar,
    rowFlexEndFlexStart,
    rowFlexEndCenter,
    columnFlexEndCenter,
    columnCenterFlexStart,
    priceRed,
    priceGray,
    rowSpaceAroundCenter,
} from "./ProductPageStyle";

const optionLabelText = {
    fontSize: 15,
    color: "#7C7C80",
};

export default function ProductPageTitle({ post }) {
    const [optionLabel, setOptionLabel] = useState("");

    // 轉換資料庫衣服顏色、尺寸、數量
    const options = [];
    const postClothes = post.clothes;

    // ! .trim() -> 去除字符串两端的空白字符（空格、制表符、换行符等），并返回新的字符串。
    if (typeof postClothes === "string" && postClothes.trim() !== "") {
        const clothesJson = JSON.parse(postClothes);
        // console.log("clothesJson", clothesJson);

        for (const color in clothesJson) {
            for (const size in clothesJson[color]) {
                const quantity = clothesJson[color][size]["newPostsSalesValue"];

                const option = {
                    label: `${color} - ${size}`,
                    quantity: `${quantity}`,
                };
                options.push(option);
                // console.log("option", option);
            }
        }
    }
    // console.log("options", options);

    // useEffect(() => {
    //     console.log("optionLabel", optionLabel);
    // }, [optionLabel]);

    return (
        <>
            <Grid
                container
                item
                direction='column'
                justifyContent='center'
                alignItems='stretch'
                xs={10}
                lg={3}
                spacing={1}
            >
                <Grid item>{post.title}</Grid>
                <Grid container item spacing={1}>
                    <Grid item>
                        <Rating
                            defaultValue={3.5}
                            precision={0.5}
                            readOnly
                            size='small'
                        />
                    </Grid>
                    <Grid item>
                        <Typography sx={sellText}>3.5 (150)</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={sellText}>|</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={sellText}>已出售 500+</Typography>
                    </Grid>
                </Grid>
                <Grid container item spacing={2} style={rowFlexStartCenter}>
                    <Grid item>
                        <Typography fontSize={35} sx={priceRed}>
                            {post.sale
                                ? "$" + `${post.sale}`
                                : "$" + `${post.price}`}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography fontSize={18} sx={priceGray}>
                            {post.sale ? "$" + `${post.price}` : null}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Autocomplete
                        sx={{ mt: 3, mb: 3 }}
                        disablePortal
                        options={options}
                        getOptionLabel={(option) => option.label}
                        isOptionEqualToValue={(options, value) =>
                            options.label === value.label
                        }
                        onChange={(e, newValue) => {
                            if (newValue) {
                                setOptionLabel(newValue.quantity);
                            }
                        }}
                        renderInput={(data) => (
                            <TextField {...data} label='請選擇商品規格' />
                        )}
                    />

                    {optionLabel ? (
                        <Grid item container style={rowFlexEndCenter}>
                            <Typography sx={optionLabelText}>
                                {`還剩 ${optionLabel} 件`}
                            </Typography>
                        </Grid>
                    ) : null}
                    <Divider sx={divider} />
                </Grid>
                <Grid item container sx={rowSpaceBetweenCenter}>
                    <NumberInput post={post} />
                </Grid>

                <Grid item container style={rowSpaceAroundCenter}>
                    <Grid item container xs={5} sx={rowCenterCenter}>
                        <Button
                            variant='outlined'
                            startIcon={<FavoriteBorderIcon />}
                            sx={collect}
                        >
                            收藏商品
                        </Button>
                    </Grid>
                    <Grid item container xs={5} sx={rowCenterCenter}>
                        <Button
                            variant='contained'
                            disableElevation
                            sx={shoppingCar}
                            startIcon={<ShoppingBagOutlinedIcon />}
                        >
                            加入購物車
                        </Button>
                    </Grid>
                </Grid>
                <Divider sx={divider} />
                <Button>
                    <Grid item container style={columnCenterFlexStart}>
                        <Typography fontSize={15}>
                            消費滿NT$299，免運費
                        </Typography>
                    </Grid>
                </Button>
            </Grid>
        </>
    );
}
