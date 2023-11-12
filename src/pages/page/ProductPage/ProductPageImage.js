import { useState } from "react";
import Slider from "react-slick";
import { Box } from "@mui/system";
import { Grid, Skeleton } from "@mui/material";

import { gridImg, settings, firstImage, SliderBox } from "./ProductPageStyle";

export default function ProductPageImage({ post }) {
    const { titleImageUrl } = post;
    // console.log("imageUrls", imageUrls);
    const [clickImage, setClickImage] = useState(0);
    const handleClick = (index) => {
        setClickImage(index);
    };

    if (!titleImageUrl || titleImageUrl.length === 0) {
        return <Skeleton variant='rounded' width={500} height={550} />;
    }

    return (
        <>
            <Grid
                item
                container
                xs={8}
                lg={3}
                direction='row'
                justifyContent='center'
                alignItems='center'
            >
                <Grid item>
                    <img src={titleImageUrl[clickImage]} style={firstImage} />
                </Grid>
                <SliderBox>
                    <Slider {...settings}>
                        {titleImageUrl &&
                            titleImageUrl.map((imgUrl, i) => {
                                // console.log("imgUrl", imgUrl);
                                return (
                                    <Box key={i} sx={{ margin: "0 4px" }}>
                                        <Grid
                                            item
                                            sx={gridImg}
                                            onClick={() => handleClick(i)}
                                        >
                                            <img
                                                src={imgUrl}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                            />
                                        </Grid>
                                    </Box>
                                );
                            })}
                    </Slider>
                </SliderBox>
            </Grid>
        </>
    );
}
