import { Grid, Typography } from "@mui/material";

import HomeIcon from "../icons/HeaderIcon";
import styled from "@emotion/styled";

const StyledIcon = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
    pb: 10,

    svg: {
        width: "100%",
        height: "100%",
    },

    path: {
        fill: "rgba(158, 158, 158, 0.7)",
    },
});

export default function NoNotifyIcon() {
    const { NotifyIcon } = HomeIcon;

    return (
        <>
            <Grid container width={330} height={350} direction='column' justifyContent='center' alignItems='center'>
                <StyledIcon>
                    <NotifyIcon />
                </StyledIcon>
                <Typography fontSize={15} color='#9e9e9e'>
                    沒有新通知
                </Typography>
            </Grid>
        </>
    );
}
