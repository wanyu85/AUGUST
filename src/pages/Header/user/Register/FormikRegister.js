import { React } from "react";
import { Stack, Button, Alert, Typography, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

import firebase from "../../../../utils/firebase";
import "firebase/compat/auth";

// ! 驗證
import { Formik, Form } from "formik";
import * as yup from "yup";

// icon
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import { useSubmitStatus } from "../SubmitProvider";
import { InputField } from "../InputField";
import { inputBtn, registerBtn, errorText, loadingBtn } from "../userStyle";

export default function FormikRegister({ activeFrom }) {
    const {
        errorMessage,
        setErrorMessage,
        submitError,
        setSubmitError,
        loading,
        setLoading,
    } = useSubmitStatus();

    const validate = yup.object({
        userName: yup
            .string()
            .max(6, "長度不得超過6個字數")
            .required("欄位不得為空"),
        email: yup
            .string()
            .email("電子郵件的格式有誤")
            .required("欄位不得為空"),
        phone: yup
            .string()
            .matches(/^09/, "手機號碼須為09開頭")
            .length(10, "輸入有誤")
            .required("欄位不得為空"),
        password: yup
            .string()
            .min(6, "密碼須至少6個字數")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                "密碼須包含至少一個大小寫字母"
            )
            .required("欄位不得為空"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "密碼不一致")
            .required("欄位不得為空"),
    });

    // 導入頁面
    const navigate = useNavigate();

    return (
        // 初始值
        <Formik
            initialValues={{
                userName: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
                console.log(values);
                setSubmitError(true);
                setLoading(true);

                firebase
                    .auth()
                    .createUserWithEmailAndPassword(
                        values.email,
                        values.password
                    )
                    .then(() => {
                        console.log("註冊成功");
                        navigate("/");
                        setLoading(false);
                    })
                    .catch((error) => {
                        // console.error("Firebase Error Code:", error.code);
                        // console.error("Firebase Error Message:", error.message);
                        let newErrorMessages = [];
                        switch (error.code) {
                            case "auth/email-already-in-use":
                                newErrorMessages.push("信箱已存在");
                                break;
                            case "auth/invalid-email":
                                newErrorMessages.push("信箱格式不正確");
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
                <Stack spacing={3} pt={3} sx={inputBtn}>
                    <InputField
                        label='使用者帳號'
                        name='userName'
                        type='text'
                        startAdornment={<PersonRoundedIcon />}
                    />
                    <InputField
                        label='信箱'
                        name='email'
                        type='text'
                        startAdornment={<EmailIcon />}
                    />
                    <InputField
                        label='手機'
                        name='phone'
                        type='text'
                        startAdornment={<PhoneIphoneIcon />}
                    />
                    <InputField
                        label='密碼'
                        name='password'
                        type='password'
                        startAdornment={<VpnKeyRoundedIcon />}
                    />
                    <InputField
                        label='確認密碼'
                        name='confirmPassword'
                        type='password'
                        startAdornment={<VpnKeyRoundedIcon />}
                    />
                </Stack>

                {submitError && errorMessage && (
                    <Stack spacing={1} pt={5} sx={errorText}>
                        {errorMessage.map((message, index) => (
                            <Alert severity='error' key={index}>
                                <Typography fontSize={15}>{message}</Typography>
                            </Alert>
                        ))}
                    </Stack>
                )}

                <Stack spacing={1} pt={5} pb={2} sx={inputBtn}>
                    <Box sx={{ m: 1, position: "relative" }}>
                        <Button
                            type='submit'
                            variant='contained'
                            disableElevation
                            sx={{ pl: 8, pr: 8 }}
                            disabled={loading}
                        >
                            註冊
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
                        回上頁
                    </Button>
                </Stack>
            </Form>
        </Formik>
    );
}
