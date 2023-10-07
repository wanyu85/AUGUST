import { React, useState, ReactElement } from "react";
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Typography,
    Button,
    Paper,
    Grid,
} from "@mui/material";
// import NewPostsBasic from "../pages/page/NewPosts/NewPostsBasic";

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
    handleNext,
    handleBack,
    handleReset,
} from "../pages/page/NewPosts/NewPostsStyle";

import NewPosts from "../pages/page/NewPosts/NewPosts";
import { usePost } from "../pages/page/PostProvider";

import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";

import { StepIconProps } from "@mui/material/StepIcon";

import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import { ThemeProvider, styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

import { theme, loadingBtn, InputIcon } from "../pages/Header/user/userStyle";

import Icons from "../Icons/Icons";

const steps = ["商品資料", "銷貨件數", "商品描述"];

// const ColorlibStepIconRoot = styled('div')<{
//     ownerState: { completed?: boolean; active?: boolean };
//   }>(({ theme, ownerState }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
//     zIndex: 1,
//     color: '#fff',
//     width: 50,
//     height: 50,
//     display: 'flex',
//     borderRadius: '50%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     ...(ownerState.active && {
//       backgroundImage:
//         'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
//       boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
//     }),
//     ...(ownerState.completed && {
//       backgroundImage:
//         'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
//     }),
//   }));

const Icon = styled("div")({
    svg: { width: "100%", height: "100%" },
    width: "12%",
    height: "12%",
});

const SubmitText = styled("p")({
    mt: 5,
    mb: 1,
    fontSize: 25,
    fontWeight: "bold",
});

function aa() {}

export default function StepperComponents({ children }) {
    // 當前步驟
    const {
        activeStep,
        setActiveStep,
        loadingSendOut,
        setLoadingSendOut,
        submitSuccess,
        setSubmitSuccess,
    } = usePost();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid
                item
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
            >
                <Grid
                    item
                    xs={10}
                    component={Paper}
                    elevation={3}
                    sx={{ width: "100%", mt: 20, p: 5 }}
                >
                    <Stepper activeStep={activeStep} sx={{ mt: 5 }}>
                        {steps.map((label) => {
                            return (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <>
                            <Grid
                                container
                                direction='column'
                                justifyContent='center'
                                alignItems='center'
                                item
                                mt={15}
                                mb={10}
                            >
                                <Icon>
                                    <Icons.Check />
                                </Icon>

                                <SubmitText>送出成功 !</SubmitText>
                            </Grid>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    pt: 2,
                                }}
                            >
                                <Box sx={{ flex: "1 1 auto" }} />
                                <Button onClick={handleReset}>
                                    輸入新商品
                                </Button>
                            </Box>
                        </>
                    ) : (
                        <>
                            {children}

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    pt: 2,
                                }}
                            >
                                <Button
                                    color='inherit'
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    回上一頁
                                </Button>
                                <Box sx={{ flex: "1 1 auto" }} />

                                {activeStep === steps.length - 1 ? (
                                    <Btn>
                                        <Button
                                            type='submit'
                                            disabled={loadingSendOut}
                                            variant='contained'
                                            disableElevation
                                        >
                                            送出
                                        </Button>
                                        {loadingSendOut && (
                                            <CircularProgress
                                                size={24}
                                                sx={loadingBtn}
                                            />
                                        )}
                                    </Btn>
                                ) : (
                                    <Button onClick={handleNext} type='button'>
                                        下一頁
                                    </Button>
                                )}
                            </Box>
                        </>
                    )}
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

// ! Set -> 過濾掉「陣列」中重複的元素
// ! has() -> 快速判斷該 Set 中是否包含某個元素
