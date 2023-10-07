import firebase from "../../../utils/firebase";
import "firebase/compat/auth";
import styled from "@emotion/styled";
import { TextField, Autocomplete, Grid } from "@mui/material";

import {
    inputField,
    size,
    color,
    center,
    TitleBorder,
    TitleText,
} from "./NewPostsStyle";

import { InputField } from "../../../components/InputField";
import { InputComplete } from "../../../components/InputComplete";
import UploadImageTitle from "../../../components/UploadImageTitle";

import { usePost } from "../PostProvider";

// ! 驗證
import { Formik, Form } from "formik";
import * as yup from "yup";

const IconBtn = styled("div")({
    svg: {
        width: "100%",
        height: "100%",
    },
    color: "#747474",
    width: 23,
    height: 23,
});

const variant = yup.object({
    title: yup.string().required("欄位不得為空"),
});

export default function NewPostsBasic({ options }) {
    // 獲取上下值
    const {
        title,
        setTitle,
        price,
        setPrice,
        sale,
        setSale,
        demo,
        setDemo,
        sizeInput,
        setSizeInput,
        colorInput,
        setColorInput,
    } = usePost();

    return (
        <>
            <Grid
                item
                container
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                spacing={1}
                mt={5}
            >
                <Grid item>
                    <TitleBorder />
                </Grid>
                <Grid item>
                    <TitleText>基本資料</TitleText>
                </Grid>
            </Grid>

            <Grid item>
                <UploadImageTitle />
            </Grid>

            <Grid item container sx={center}>
                <InputField
                    label='商品名稱'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} //多檔案上傳
                />
                <Autocomplete
                    sx={inputField}
                    options={options}
                    value={demo}
                    // 自定義比較邏輯
                    isOptionEqualToValue={(options, value) =>
                        options.label === value.label
                    }
                    onChange={(event, newValue) => {
                        setDemo(newValue);
                    }}
                    renderInput={(data) => (
                        <TextField
                            {...data}
                            label='分類'
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />
                <InputComplete
                    label='尺寸'
                    options={size}
                    getOptionLabel={(option) => option.size}
                    // { selected } 判斷是否被選中
                    isOptionEqualToValue={(option, value) =>
                        option.size === value.size
                    }
                    value={sizeInput}
                    onChange={(event, newValue) => {
                        setSizeInput(newValue);
                    }}
                />
                <InputComplete
                    label='顏色'
                    options={color}
                    getOptionLabel={(option) => option.color}
                    isOptionEqualToValue={(option, value) =>
                        option.color === value.color
                    }
                    value={colorInput}
                    onChange={(event, newValue) => {
                        setColorInput(newValue);
                    }}
                />
                <InputField
                    label='價格'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <InputField
                    label='特價'
                    value={sale}
                    onChange={(e) => setSale(e.target.value)}
                />
            </Grid>
        </>
    );
}
