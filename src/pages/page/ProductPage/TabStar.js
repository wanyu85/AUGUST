import { Box } from "@mui/system";
import {
    Avatar,
    Button,
    Chip,
    Divider,
    Grid,
    LinearProgress,
    Rating,
    Typography,
} from "@mui/material";
import {
    rowFlexStartCenter,
    columnCenterFlexStart,
    rowSpaceBetweenCenter,
    feedback,
    Tag,
} from "./ProductPageStyle";
import styled from "@emotion/styled";

const chipData = [
    {
        key: 0,
        label: "服務貼心",
    },
    {
        key: 1,
        label: "運送迅速",
    },
    {
        key: 2,
        label: "質感優良",
    },
];

export default function TabStar({ post }) {
    return (
        <>
            <Grid
                item
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={1}
            >
                <Box sx={Tag} />
                <Grid item mt={4} xs={10}>
                    <Typography fontSize={18} fontWeight='bold'>
                        150 個評價
                    </Typography>

                    <Grid item container style={rowFlexStartCenter}>
                        <Rating
                            defaultValue={3.5}
                            precision={0.5}
                            readOnly
                            size='small'
                        />
                        <Typography fontSize={16} ml={2}>
                            3.5星
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container mt={5} spacing={1} xs={10} sx={feedback}>
                    <Grid item xs={1} mt={1}>
                        <Avatar />
                    </Grid>
                    <Grid
                        item
                        container
                        xs={11}
                        style={rowFlexStartCenter}
                        pr={5}
                    >
                        <Grid item container style={rowSpaceBetweenCenter}>
                            <Grid item>
                                <Typography fontSize={15}>
                                    e********456
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ fontSize: 13 }}>
                                    2023-01-01
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item>
                                <Rating
                                    defaultValue={5.0}
                                    precision={0.5}
                                    readOnly
                                    size='small'
                                />
                            </Grid>
                            <Grid item>
                                <Typography sx={{ fontSize: 13, ml: 1 }}>
                                    | 規格: AAAA - 黑
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item>
                            {chipData.map((data) => {
                                return (
                                    <Chip
                                        key={data.key}
                                        label={data.label}
                                        sx={{ mr: 2, fontSize: 13 }}
                                        size='small'
                                    />
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
