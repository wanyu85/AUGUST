import { useEffect } from "react";

import firebase from "../../../utils/firebase";
import "firebase/compat/auth";

import { v4 as uuid } from "uuid";

import { usePost } from "../PostProvider";

import StepperComponents from "../../../components/StepperComponents";
import NewPostsSales from "./NewPostsSales";
import NewPostsContent from "./NewPostsContent";
import "../../../index.css";
import NewPostsBasic from "./NewPostsBasic";

export default function NewPosts() {
    // 獲取上下值
    const {
        topics,
        setTopics,
        files,
        setFiles,
        title,
        setTitle,
        price,
        setPrice,
        sale,
        setSale,
        demo,
        setDemo,
        open,
        setOpen,
        content,
        setContent,
        sizeInput,
        setSizeInput,
        colorInput,
        setColorInput,
        tableData,
        setTableData,
        activeStep,
        setActiveStep,
        loadingSendOut,
        setLoadingSendOut,
        clothes,
        setClothes,
        filesTitle,
        setFilesTitle,
        filesContent,
        setFilesContent,
        submitSuccess,
        setSubmitSuccess,
    } = usePost();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    // console.log("filesTitle", filesTitle);

    // 存取資料庫的使用者資料
    useEffect(() => {
        firebase
            .firestore()
            .collection("topics")
            .get()
            .then((collectionSnapshot) => {
                const dataC = collectionSnapshot.docs.map((doc) => {
                    return doc.data();
                });
                setTopics(dataC);
            });
    }, []);

    // 取資料
    const options = topics.map((topicsData) => {
        return {
            label: topicsData.name,
        };
    });
    // console.log("options", options);

    // 送出後傳回資料庫
    function onSubmit(event) {
        event.preventDefault();
        setLoadingSendOut(true);
        console.log("表單已提交");
        setSubmitSuccess(false);
        handleNext();

        // 基本資料
        const docRef = firebase.firestore().collection("posts").doc();

        // console.log("filesTitle", filesTitle);
        // console.log("filesContent", filesContent);
        // 圖片
        const uploadTitleImage = filesTitle.map((filesTitleData) => {
            const fileRefTitle = firebase
                .storage()
                .ref("posts-titleImage/" + uuid());
            const metaData = {
                contentType: filesTitleData ? filesTitleData.type : "",
            };

            return fileRefTitle.put(filesTitleData, metaData).then(() => {
                return fileRefTitle.getDownloadURL();
            });
        });

        const uploadContentImage = filesContent.map((filesContentData) => {
            const fileRefContent = firebase
                .storage()
                .ref("posts-contentImage/" + uuid());
            const metaData = {
                contentType: filesContentData ? filesContentData.type : "",
            };

            return fileRefContent.put(filesContentData, metaData).then(() => {
                return fileRefContent.getDownloadURL();
            });
        });

        // 上傳資料庫
        Promise.all([uploadTitleImage, uploadContentImage]).then(
            ([titleImageUrls, contentImageUrls]) => {
                Promise.all(titleImageUrls).then((titleImageUrl) => {
                    // console.log("titleImageUrl", titleImageUrl);

                    Promise.all(contentImageUrls).then((contentImageUrl) => {
                        // console.log("contentImageUrl", contentImageUrl);

                        docRef
                            .set({
                                title,
                                price,
                                sale,
                                topics: demo,
                                createdAt: firebase.firestore.Timestamp.now(),
                                content,
                                sizeInput,
                                colorInput,
                                clothes,
                                titleImageUrl,
                                contentImageUrl,
                            })
                            .then(() => {
                                console.log("送出成功");
                                setLoadingSendOut(false);
                                setOpen(true);
                                setSubmitSuccess(true);

                                // 清空表單
                                setTitle("");
                                setPrice("");
                                setSale("");
                                setDemo(null);
                                setFiles([]);
                                setContent("");
                                setSizeInput([]);
                                setColorInput([]);
                                setClothes([]);
                                setFilesTitle([]);
                                setFilesContent([]);
                            });
                    });
                });
            }
        );
    }

    return (
        <form onSubmit={onSubmit} className='bgc'>
            <StepperComponents onSubmit={onSubmit}>
                {activeStep === 0 && <NewPostsBasic options={options} />}
                {activeStep === 1 && <NewPostsSales />}
                {activeStep === 2 && <NewPostsContent />}
            </StepperComponents>
        </form>
    );
}
