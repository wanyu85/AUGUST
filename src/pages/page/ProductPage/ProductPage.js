import ProductPageContent from "./ProductPageContent";
import ProductPageTitle from "./ProductPageTitle";
import { container } from "./ProductPageStyle";
import { Grid, ThemeProvider } from "@mui/material";

import { theme, loadingBtn } from "../../Header/user/userStyle";
import { useState, useEffect } from "react";
import firebase from "../../../utils/firebase";
import "firebase/compat/auth";
import { useParams } from "react-router-dom";
import ProductPageImage from "./ProductPageImage";

export default function ProductPage() {
    const [post, setPost] = useState("");
    const { postId } = useParams();
    // 取得商品頁資料
    useEffect(() => {
        firebase
            .firestore()
            .collection("posts")
            .doc(postId)
            .onSnapshot((docId) => {
                const data = docId.data();
                setPost(data);
            });
    }, []);

    // console.log("post", post);
    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container item sx={container} spacing={6}>
                    <ProductPageImage post={post} />
                    <ProductPageTitle post={post} />
                    <ProductPageContent post={post} />
                </Grid>
            </ThemeProvider>
        </>
    );
}
