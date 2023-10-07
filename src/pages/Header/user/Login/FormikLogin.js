import { React, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Button, Alert, Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import firebase from "../../../../utils/firebase";
import "firebase/compat/auth";

// ! 驗證
import { Formik, Form } from "formik";
import * as yup from "yup";

// icon
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";

import { useSubmitStatus } from "../SubmitProvider";
import { InputField } from "../InputField";
import { inputBtn, registerBtn, errorText, loadingBtn } from "../userStyle";

export default function FormikLogin({ activeFrom }) {
    const {
        errorMessage,
        setErrorMessage,
        submitError,
        setSubmitError,
        loading,
        setLoading,
    } = useSubmitStatus();

    const validate = yup.object().shape({
        email: yup
            .string()
            .email("電子郵件的格式不正確")
            .required("欄位不得為空"),
        password: yup.string().required("欄位不得為空"),
    });

    // 導入頁面
    const navigate = useNavigate();

    useEffect(() => {
        console.log(submitError);
        console.log(errorMessage);
    }, [submitError, errorMessage]);

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
                console.log(values);
                setSubmitError(true);
                setLoading(true);

                firebase
                    .auth()
                    .signInWithEmailAndPassword(values.email, values.password)
                    .then(() => {
                        console.log("登入成功");
                        setLoading(false);
                        navigate("/");
                    })

                    .catch((error) => {
                        // console.error("Firebase Error Code:", error.code);
                        // console.error("Firebase Error Message:", error.message);
                        let newErrorMessages = [];
                        switch (error.code) {
                            case "auth/user-not-found":
                                newErrorMessages.push("信箱不存在");
                                break;
                            case "auth/wrong-password":
                                newErrorMessages.push("密碼錯誤");
                                break;
                            case "auth/too-many-requests":
                                newErrorMessages.push(
                                    "多次登入失敗，稍後再嘗試登入"
                                );
                                break;
                            default:
                        }
                        setErrorMessage(newErrorMessages);
                        // console.log("newErrorMessages", newErrorMessages);
                        setLoading(false);
                    });
            }}
        >
            <Form>
                <Stack spacing={5} pt={5} pb={2} sx={inputBtn}>
                    <InputField
                        label='信箱'
                        name='email'
                        type='text'
                        startAdornment={<PersonRoundedIcon />}
                    />
                    <Stack>
                        <InputField
                            label='密碼 '
                            name='password'
                            type='password'
                            startAdornment={<VpnKeyRoundedIcon />}
                        />
                        <Stack
                            direction='row'
                            justifyContent='flex-end'
                            alignItems='center'
                        >
                            <Button sx={{ color: "#979797", fontSize: 13 }}>
                                忘記密碼 ?
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>

                {submitError && errorMessage && (
                    <Stack spacing={1} pt={1} sx={errorText}>
                        {errorMessage.map((message, index) => (
                            <Alert severity='error' key={index}>
                                <Typography fontSize={15}>{message}</Typography>
                            </Alert>
                        ))}
                    </Stack>
                )}

                <Stack spacing={1} pt={10} pb={2} sx={inputBtn}>
                    <Box sx={{ m: 1, position: "relative" }}>
                        <Button
                            type='submit'
                            variant='contained'
                            disableElevation
                            sx={{ pl: 8, pr: 8 }}
                            disabled={loading}
                        >
                            登入
                        </Button>
                        {loading && (
                            <CircularProgress size={24} sx={loadingBtn} />
                        )}
                    </Box>
                    <Button
                        variant='text'
                        disableElevation
                        sx={registerBtn}
                        onClick={() => {
                            activeFrom();
                            setErrorMessage("");
                        }}
                    >
                        註冊帳號
                    </Button>
                </Stack>
            </Form>
        </Formik>
    );
}
