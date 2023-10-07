import { useState } from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Divider,
    Skeleton,
} from "@mui/material";
import { Stack } from "@mui/system";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { usePost } from "../../../page/PostProvider";
import Icons from "../../../../Icons/Icons";
import {
    StyledHeartIcon,
    StyledHeartBorderIcon,
    StyledStar,
    iconItem,
    media,
    tittle,
    saleStyle,
    priceStyle,
    textStyle,
    ImgHover,
} from "./PageCardStyle";

export default function PageCardItem({ post }) {
    const { HeartIcon, HeartBorder, StarIcon } = Icons;
    const [isFavoriteIcon, setIsFavoriteIcon] = useState(false);
    const { loading } = usePost();

    return (
        <>
            <Card elevation={0} sx={{ mr: 5, borderRadius: 0, p: 1 }}>
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 130, damping: 19 }}
                >
                    <Box
                        sx={iconItem}
                        onClick={() => setIsFavoriteIcon(!isFavoriteIcon)}
                    >
                        {loading ? null : (
                            <Box>
                                {isFavoriteIcon ? (
                                    <StyledHeartIcon>
                                        <HeartIcon />
                                    </StyledHeartIcon>
                                ) : (
                                    <StyledHeartBorderIcon>
                                        <HeartBorder />
                                    </StyledHeartBorderIcon>
                                )}
                            </Box>
                        )}

                        <Box sx={media}>
                            {loading ? (
                                <Skeleton variant='rectangular' height={190} />
                            ) : (
                                <CardMedia
                                    component='img'
                                    height={190}
                                    image={post.titleImageUrl[0]}
                                    alt={post.title}
                                />
                            )}
                            {loading ? null : <ImgHover />}
                        </Box>
                    </Box>
                </motion.div>

                <CardContent
                    sx={{ p: 0 }}
                    as={Link}
                    to={`pageCardItem/${post.id}`}
                >
                    {loading ? (
                        <Skeleton sx={{ mt: 1 }} />
                    ) : (
                        <>
                            <Typography noWrap sx={tittle}>
                                {post.title}
                            </Typography>

                            <Stack direction='row' pb={1} spacing={1}>
                                <Typography sx={saleStyle}>
                                    {post.sale}
                                </Typography>
                                <Typography sx={priceStyle}>
                                    {post.price}
                                </Typography>
                            </Stack>
                        </>
                    )}
                    {loading ? (
                        <Skeleton width={160} />
                    ) : (
                        <Stack direction='row' spacing={1}>
                            <StyledStar>
                                <StarIcon />
                            </StyledStar>
                            <Typography sx={textStyle}>5.0</Typography>
                            <Divider orientation='vertical' flexItem />
                            <Typography sx={textStyle}>已售出1000+</Typography>
                        </Stack>
                    )}
                </CardContent>
            </Card>
        </>
    );
}
