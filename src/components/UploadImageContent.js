import {
    Typography,
    Button,
    InputLabel,
    TextField,
    Autocomplete,
    InputAdornment,
    Alert,
    Snackbar,
    Grid,
    Checkbox,
    IconButton,
} from "@mui/material";

import {
    inputField,
    img,
    inputLabel,
    Btn,
    UpImg,
    InputField,
    InputComplete,
    size,
    color,
    center,
    imgGrid,
} from "../pages/page/NewPosts/NewPostsStyle";

import { usePost } from "../pages/page/PostProvider";

import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { Box, ThemeProvider, useTheme } from "@mui/system";

const IconBtn = styled("div")({
    svg: {
        width: "100%",
        height: "100%",
    },
    color: "#747474",
    width: 23,
    height: 23,
});

const inputLabelBtn = {
    border: "1px solid #979797",
    borderRadius: 1,
    p: 1,
    ml: 5,
};

export const imgBorder = {
    border: "1px solid #979797",
    borderRadius: 1,
    width: "70ch",
    m: 2,
    minHeight: 20,
    pr: 2,
    pb: 3,
    pt: 2,
    "&:hover": {
        border: "2px solid #7358AE",
    },
};

export default function UploadImageContent() {
    const [imagesContent, setImagesContent] = useState([]);
    const [previewUrlsContent, setPreviewUrlsContent] = useState([]);
    const [errorMsgContent, setErrorMsgContent] = useState("");
    const [lengthContent, setLengthContent] = useState(0);
    // const [filesContent, setFilesContent] = useState([]);
    const { filesContent, setFilesContent } = usePost();

    // 預覽圖片
    function uploadUrlContent(e) {
        const targetFilesContent = e.target.files;

        const newImagesContent = Array.from(targetFilesContent);
        setImagesContent([...imagesContent, ...newImagesContent]);
        setFilesContent([...filesContent, ...newImagesContent]);

        const imgLengthContent =
            imagesContent.length + targetFilesContent.length;
        setLengthContent(imgLengthContent);

        // 已在image的圖轉為預覽
        const newPreviewUrlsContent = imagesContent.map((image) =>
            URL.createObjectURL(image)
        );

        setPreviewUrlsContent([
            ...newPreviewUrlsContent,
            ...newImagesContent.map(URL.createObjectURL), //將新上傳的轉為預覽
        ]);

        if (imgLengthContent > 12) {
            setErrorMsgContent("最多只能放12張照片");
            return;
        } else {
            setErrorMsgContent("");
        }
    }

    // # .splice() -> 數组中添加或删除元素
    // array.splice(start, deleteCount, item1, item2, ...)

    // 刪除圖片
    const removeImage = (index) => {
        const uploadImagesContent = [...imagesContent];
        uploadImagesContent.splice(index, 1);
        setImagesContent(uploadImagesContent);

        // 刪除預覽
        const uploadPreviewUrlsContent = [...previewUrlsContent];
        uploadPreviewUrlsContent.splice(index, 1);
        setPreviewUrlsContent(uploadPreviewUrlsContent);

        const uploadLengthContent = lengthContent - 1;
        setLengthContent(uploadLengthContent);
    };

    // useEffect(() => {
    //     console.log("filesContent", filesContent);
    // }, [filesContent]);

    return (
        <>
            {errorMsgContent ? (
                <Grid
                    item
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Alert severity='warning' sx={{ width: "20%" }}>
                        {errorMsgContent}
                    </Alert>
                </Grid>
            ) : null}
            <Grid
                item
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
                sx={{
                    mt: 2,
                    mb: 2,
                }}
                lg={6}
                md={11}
            >
                <InputLabel htmlFor='post-imageContent' sx={inputLabelBtn}>
                    <Grid
                        item
                        container
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <IconBtn>
                            <CloudUploadOutlinedIcon />
                        </IconBtn>
                        <Typography fontSize={14} pl={1}>
                            上傳照片 ( {lengthContent}/ 12 )
                        </Typography>
                    </Grid>
                </InputLabel>
                <input
                    type='file'
                    id='post-imageContent'
                    style={{ display: "none" }}
                    onChange={uploadUrlContent}
                    multiple //支援上傳多個檔案
                />
            </Grid>

            {previewUrlsContent.length > 0 ? (
                <Grid
                    item
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={2}
                    sx={imgBorder}
                >
                    <Grid item container sx={center} spacing={2}>
                        {Array.isArray(previewUrlsContent) &&
                        previewUrlsContent.length > 0
                            ? previewUrlsContent.map((imageUrl, index) => (
                                  <Grid
                                      item
                                      container
                                      width={120}
                                      height={120}
                                      key={index}
                                  >
                                      <Grid
                                          item
                                          sx={imgGrid}
                                          position='relative'
                                      >
                                          <img src={imageUrl} style={img} />
                                          <IconButton
                                              sx={{
                                                  position: "absolute",
                                                  bottom: 85,
                                                  left: 80,
                                              }}
                                              onClick={() => removeImage(index)}
                                          >
                                              <IconBtn>
                                                  <CancelRoundedIcon />
                                              </IconBtn>
                                          </IconButton>
                                      </Grid>
                                  </Grid>
                              ))
                            : null}
                    </Grid>
                </Grid>
            ) : null}
        </>
    );
}
