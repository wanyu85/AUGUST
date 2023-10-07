import { inputField, center } from "../pages/page/NewPosts/NewPostsStyle";
import {
    Grid,
    TextField,
    InputAdornment,
    Autocomplete,
    Checkbox,
} from "@mui/material";

import { InputIcon } from "../pages/Header/user/userStyle";

export const InputField = ({ label, value, onChange, ...props }) => {
    return (
        <Grid item xs={12} container sx={center}>
            <TextField
                {...props}
                sx={inputField}
                variant='outlined'
                label={label}
                value={value}
                onChange={onChange}
                InputProps={{
                    startAdornment:
                        label === "價格" || label === "特價" ? (
                            <InputAdornment position='start'>
                                <InputIcon>$</InputIcon>
                            </InputAdornment>
                        ) : null,
                }}
                InputLabelProps={{
                    shrink: true, //將 label固定
                }}
            />
        </Grid>
    );
};
