import { center, inputField } from "../pages/page/NewPosts/NewPostsStyle";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

import { Grid, TextField, Autocomplete, Checkbox } from "@mui/material";

export const InputComplete = ({
    label,
    options,
    getOptionLabel,
    isOptionEqualToValue,
    onChange,
    ...props
}) => {
    const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;

    return (
        <Grid item xs={12} container sx={center}>
            <Autocomplete
                {...props}
                multiple
                disableCloseOnSelect // 保持打開狀態
                sx={inputField}
                options={options}
                getOptionLabel={getOptionLabel}
                isOptionEqualToValue={isOptionEqualToValue}
                // { selected } 判斷是否被選中
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox icon={icon} checked={selected} />
                        {getOptionLabel(option)}
                    </li>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={label}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )}
                onChange={onChange}
            />
        </Grid>
    );
};
