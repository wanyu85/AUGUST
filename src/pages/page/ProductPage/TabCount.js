import { Typography, Grid, Divider, Skeleton } from "@mui/material";
import { rowCenterCenter } from "./ProductPageStyle";
import styled from "@emotion/styled";
import { theme } from "../../Header/HeaderStyle";

const Text = styled("div")({
    fontWeight: "bold",
    fontSize: 22,
});

const divider = {
    width: 22,
    height: 3,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 25,
    mt: 0.8,
};

export default function TabCount({ post }) {
    const { contentImageUrl, content } = post;
    // console.log("contentImageUrl", contentImageUrl);

    if (!contentImageUrl || contentImageUrl.length === 0) {
        return (
            <Grid container sx={rowCenterCenter}>
                <Skeleton variant='rounded' width='60%' height={750} />
            </Grid>
        );
    }

    return (
        <>
            <Grid
                item
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
                spacing={2}
            >
                {content ? (
                    <Grid
                        item
                        container
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                        mt={5}
                        spacing={2}
                    >
                        <Text>文字描述</Text>
                        <Divider sx={divider} />
                    </Grid>
                ) : null}
                <Grid item>
                    <Typography>{content}</Typography>
                </Grid>

                {contentImageUrl ? (
                    <Grid
                        item
                        container
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                        mt={5}
                        spacing={2}
                    >
                        <Text>圖片描述</Text>
                        <Divider sx={divider} />
                    </Grid>
                ) : null}

                {contentImageUrl &&
                    contentImageUrl.map((imgUrl, i) => {
                        return (
                            <Grid item key={i}>
                                <img src={imgUrl} />
                            </Grid>
                        );
                    })}
            </Grid>
        </>
    );
}
