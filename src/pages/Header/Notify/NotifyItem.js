import {
    Grid,
    MenuItem,
    Typography,
    Divider,
    Avatar,
    Skeleton,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { theme, fontColor, dateFont } from "../HeaderStyle";
import { StyledIcon } from "./Notify";
import styled from "@emotion/styled";

import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import RoofingRoundedIcon from "@mui/icons-material/RoofingRounded";
import MultipleStopRoundedIcon from "@mui/icons-material/MultipleStopRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";

const IconComponent = ({ type }) => {
    let iconRender = null;

    const IconStyle = styled("div")({
        svg: {
            width: "100%",
            height: "100%",
        },
        width: 21,
        height: 21,
        position: "absolute",
        top: "25%",
        left: "25%",
    });

    if (type === "ship") {
        iconRender = (
            <IconStyle>
                <MultipleStopRoundedIcon />
            </IconStyle>
        );
    } else if (type === "news") {
        iconRender = (
            <IconStyle>
                <SmsRoundedIcon />
            </IconStyle>
        );
    } else if (type === "arrive") {
        iconRender = (
            <IconStyle>
                <RoofingRoundedIcon />
            </IconStyle>
        );
    } else if (type === "get") {
        iconRender = (
            <IconStyle>
                <HowToRegRoundedIcon />
            </IconStyle>
        );
    }

    return <StyledIcon>{iconRender}</StyledIcon>;
};

const TitleComponent = ({ type, read }) => {
    let titleRender = "";

    if (type === "ship") {
        titleRender = "訂單已出貨";
    } else if (type === "news") {
        titleRender = "消息通知";
    } else if (type === "arrive") {
        titleRender = "訂單已送達";
    } else if (type === "get") {
        titleRender = "訂單已領取";
    }

    return (
        <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            spacing={1}
        >
            <Box fontSize={13} fontWeight='bold'>
                {titleRender}
            </Box>
        </Stack>
    );
};

const ContentComponent = ({ type, dateShip, dateArrive, dateGet }) => {
    let contentRender = "";

    if (type === "ship") {
        contentRender = `已於${dateShip}出貨，最晚於${dateShip}抵達。`;
    } else if (type === "news") {
        contentRender = "您有一個來自 AUGUST 發送的消息 !";
    } else if (type === "arrive") {
        contentRender = `已於${dateArrive}送達，請於${dateArrive}前取貨。`;
    } else if (type === "get") {
        contentRender = `已於${dateGet}領取，點擊立即寫下您的反饋 !`;
    }

    return (
        <Box fontSize={10} fontFamily={dateFont}>
            {contentRender}
        </Box>
    );
};

export default function NotifyItem(props) {
    const { handleClose, item, loading } = props;
    const { type, number, date, dateShip, dateArrive, dateGet } = item;

    return (
        <>
            <MenuItem onClick={handleClose} disableRipple sx={{ pl: 1, pr: 1 }}>
                <Grid container spacing={1}>
                    <Grid
                        item
                        xs={2}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {loading ? (
                            <Skeleton
                                variant='circular'
                                width={40}
                                height={40}
                            />
                        ) : (
                            <Avatar
                                sx={{
                                    backgroundColor:
                                        theme.palette.background.default,
                                }}
                            >
                                <IconComponent type={type} />
                            </Avatar>
                        )}
                    </Grid>
                    <Grid item xs={7}>
                        {loading ? (
                            <Skeleton />
                        ) : (
                            <TitleComponent type={type} />
                        )}
                        {loading ? (
                            <Skeleton height={10} />
                        ) : (
                            <Typography fontSize={13} fontFamily={dateFont}>
                                {type === "news" ? "" : `訂單編號 : ${number}`}
                            </Typography>
                        )}
                        {loading ? (
                            <Skeleton height={10} />
                        ) : (
                            <ContentComponent
                                type={type}
                                dateShip={dateShip}
                                dateArrive={dateArrive}
                                dateGet={dateGet}
                            />
                        )}
                    </Grid>
                    <Grid item xs={2}>
                        {loading ? (
                            <Skeleton />
                        ) : (
                            <Typography
                                fontSize={13}
                                color={fontColor}
                                fontFamily={dateFont}
                                sx={{ textAlign: "right" }}
                            >
                                {date}
                            </Typography>
                        )}
                    </Grid>
                </Grid>
            </MenuItem>
            <Divider sx={{ width: "82%", ml: "auto" }} />
        </>
    );
}
