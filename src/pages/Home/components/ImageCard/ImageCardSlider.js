import { useEffect, useRef } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";

import firebase from "../../../../utils/firebase";
import "firebase/compat/auth";

import { usePost } from "../../../page/PostProvider";
import { settings, cardTitle } from "./ImageCardStyle";
import ImageCardItem from "./ImageCardItem";

export default function ImageCardSlider() {
    const ImageCardRef = useRef();
    const { setLoading, posts, setPosts } = usePost();

    useEffect(() => {
        const fetchData = async () => {
            // console.log("加載中", loading);
            const postsData = await firebase
                .firestore()
                .collection("posts")
                .get();

            const postList = postsData.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPosts(postList);
            setLoading(false);
        };
        // 組件加載時獲取數據
        fetchData();
    }, [setLoading, setPosts]);
    // console.log("加載完", loading);

    const ImageCardSliderProject = posts.map((post) => (
        <ImageCardItem key={post.id} post={post} />
    ));

    return (
        <>
            <Typography sx={cardTitle}>好評推薦</Typography>
            <Slider ref={ImageCardRef} {...settings}>
                {ImageCardSliderProject}
            </Slider>
        </>
    );
}
