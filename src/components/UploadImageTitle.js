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

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const IconBtn = styled("div")({
    svg: {
        width: "100%",
        height: "100%",
    },
    color: "#747474",
    width: 23,
    height: 23,
});

export default function UploadImageTitle() {
    const [imagesTitle, setImagesTitle] = useState([]);
    const [previewUrlsTitle, setPreviewUrlsTitle] = useState([]);
    const [errorMsgTitle, setErrorMsgTitle] = useState("");
    const [lengthTitle, setLengthTitle] = useState(0);
    const { filesTitle, setFilesTitle } = usePost();

    // useEffect(() => {
    //     console.log("filesTitle", filesTitle);
    // }, [filesTitle]);

    // 預覽圖片
    function uploadUrlTitle(e) {
        const targetFilesTitle = e.target.files;

        const newImagesTitle = Array.from(targetFilesTitle);
        setImagesTitle([...imagesTitle, ...newImagesTitle]);
        setFilesTitle([...filesTitle, ...newImagesTitle]);

        const imgLengthTitle = imagesTitle.length + targetFilesTitle.length;
        setLengthTitle(imgLengthTitle);

        // 已在image的圖轉為預覽
        const newPreviewUrlsTitle = imagesTitle.map((image) =>
            URL.createObjectURL(image)
        );

        setPreviewUrlsTitle([
            ...newPreviewUrlsTitle,
            ...newImagesTitle.map(URL.createObjectURL), //將新上傳的轉為預覽
        ]);

        if (imgLengthTitle > 9) {
            setErrorMsgTitle("最多只能放9張照片");
            console.log("errorMsgTitle", errorMsgTitle);
            return;
        } else {
            setErrorMsgTitle("");
        }
    }

    // useEffect(() => {
    //     console.log("filesTitle", filesTitle);
    // }, [filesTitle]);

    // # .splice() -> 數组中添加或删除元素
    // array.splice(start, deleteCount, item1, item2, ...)

    // 刪除圖片
    const removeImage = (index) => {
        const uploadImagesTitle = [...imagesTitle];
        uploadImagesTitle.splice(index, 1);
        setImagesTitle(uploadImagesTitle);

        // 刪除預覽
        const uploadPreviewUrlsTitle = [...previewUrlsTitle];
        uploadPreviewUrlsTitle.splice(index, 1);
        setPreviewUrlsTitle(uploadPreviewUrlsTitle);

        const uploadLengthTitle = lengthTitle - 1;
        setLengthTitle(uploadLengthTitle);
    };

    return (
        <>
            {errorMsgTitle ? (
                <Grid
                    item
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    mb={5}
                >
                    <Alert severity='warning' sx={{ width: "20%" }}>
                        {errorMsgTitle}
                    </Alert>
                </Grid>
            ) : null}
            <Grid item container sx={center} spacing={2}>
                {Array.isArray(previewUrlsTitle) && previewUrlsTitle.length > 0
                    ? previewUrlsTitle.map((imageUrl, index) => (
                          <Grid
                              item
                              container
                              width={120}
                              height={120}
                              key={index}
                          >
                              <Grid item sx={imgGrid} position='relative'>
                                  <img src={imageUrl} style={img} />
                                  <IconButton
                                      sx={{
                                          position: "absolute",
                                          bottom: 85,
                                          left: 80,
                                          cursor: "pointer",
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

                <Grid item>
                    <InputLabel htmlFor='post-imageTitle' sx={inputLabel}>
                        <UpImg>
                            <AddPhotoAlternateIcon />
                            <Typography fontSize={15}>上傳照片</Typography>
                            <Typography fontSize={13}>
                                ( {lengthTitle}/ 9 )
                            </Typography>
                        </UpImg>
                    </InputLabel>
                </Grid>
                <input
                    type='file'
                    id='post-imageTitle'
                    style={{ display: "none" }}
                    onChange={uploadUrlTitle}
                    multiple //支援上傳多個檔案
                />
            </Grid>
        </>
    );
}
