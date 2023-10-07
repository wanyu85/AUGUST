import { useRef } from "react";
import { Typography } from "@mui/material";
import Slider from "react-slick";

import { data } from "../../data";
import { cardTitle, settings } from "./PageCardStyle";
import PageCardItem from "./PageCardItem";

import { useEffect, useState } from "react";

import firebase from "../../../../utils/firebase";
import "firebase/compat/auth";

import { usePost } from "../../../page/PostProvider";

export default function PageCardSlider() {
    const PageCardRef = useRef();

    const { loading, setLoading, posts, setPosts } = usePost();

    useEffect(() => {
        const fetchData = async () => {
            setTimeout(async () => {
                const postsData = await firebase
                    .firestore()
                    .collection("posts")
                    .get();

                const postList = postsData.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPosts(postList);
            });
        };
        // 組件加載時獲取數據
        fetchData().then(() => {
            setLoading(false);
        });
    }, []);

    const PageCardSliderProject = posts.map((post) => (
        <PageCardItem key={post.id} post={post} />
    ));

    return (
        <>
            <Typography sx={cardTitle}>新品上架</Typography>
            <Slider ref={PageCardRef} {...settings}>
                {PageCardSliderProject}
            </Slider>
        </>
    );
}
