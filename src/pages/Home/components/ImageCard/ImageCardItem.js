import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Typography, Skeleton, Grid } from "@mui/material";
import TouchAppIcon from "@mui/icons-material/TouchApp";

import { ImgContainer, Image, ImgHover } from "./ImageCardStyle";

const Icon = styled("div")({
    width: 25,
    svg: {
        width: "100%",
        height: "100%",
    },
});

const hoverGrid = {
    opacity: 1,
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 13,
    pt: 3,
    width: "80%",
};

export default function ImageCardItem({ post }) {
    const { titleImageUrl, title } = post;

    return (
        <>
            <ImgContainer>
                {!titleImageUrl || titleImageUrl.length < 0 ? (
                    <Skeleton variant='rounded' width='100%' height='100%' />
                ) : (
                    <Image src={titleImageUrl[0]} />
                )}

                {!titleImageUrl || titleImageUrl.length < 0 ? null : (
                    <ImgHover
                        className='imgHover'
                        as={Link}
                        to={`/imgcard/${post.id}`}
                    >
                        <Grid
                            container
                            direction='row'
                            justifyContent='center'
                            alignItems='center'
                            sx={hoverGrid}
                        >
                            <Grid item>
                                <Typography sx={{ fontSize: 13 }}>
                                    {title}
                                </Typography>
                            </Grid>
                            <Icon>
                                <TouchAppIcon />
                            </Icon>
                        </Grid>
                    </ImgHover>
                )}
            </ImgContainer>
        </>
    );
}
