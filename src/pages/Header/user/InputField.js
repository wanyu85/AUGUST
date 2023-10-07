import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { InputIcon } from "./userStyle";
import HeaderIcon from "../icons/HeaderIcon";

// ! 驗證
import { useField } from "formik";
import * as yup from "yup";

export const InputField = ({ type, label, startAdornment, ...props }) => {
    const [field, meta] = useField(props);
    // console.log("props", props);
    // console.log("field", field); // 傳入控制的屬性
    // console.log("meta", meta); // 傳入表單的狀態和驗證的相關訊息

    // 密碼
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    // 提示文本
    const helperTextPwd =
        label === "密碼" ? "密碼須至少6個字數且含英文大小寫" : "";

    const helperText = meta.touched && meta.error ? meta.error : helperTextPwd;

    return (
        <>
            <TextField
                sx={{ width: "260px" }}
                {...props}
                {...field}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <InputIcon>{startAdornment}</InputIcon>
                        </InputAdornment>
                    ),
                    endAdornment:
                        type === "password" ? (
                            <InputAdornment position='end'>
                                <IconButton onClick={handleClickShowPassword}>
                                    {showPassword ? (
                                        <HeaderIcon.EyeIcon />
                                    ) : (
                                        <HeaderIcon.CloseEyeIcon />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ) : null,
                }}
                label={label}
                type={
                    type === "password"
                        ? showPassword
                            ? "text"
                            : "password"
                        : ""
                }
                size='small'
                error={meta.error && meta.touched}
                helperText={helperText}
            />
        </>
    );
};
