import { Box } from "@mui/system";
import { Grid, Typography, Skeleton } from "@mui/material";

import { dataA } from "./dataA";
import { BoxBorder, ImageButton, Image, text } from "./ActivityStyle";

export default function Activity(props) {
    const { loading = false } = props;
    return (
        <>
            <Grid container direction='row' pt={5}>
                {dataA.map((item, i) => (
                    <Grid key={i} item xs={4}>
                        <BoxBorder>
                            {loading ? (
                                <Skeleton variant='rectangular' height={200} />
                            ) : (
                                <ImageButton focusRipple>
                                    <Image src={require(`../../../../image/${item.imgUrl}`)} />
                                    <Typography sx={text}>{item.title}</Typography>
                                    <Box className='imageMarked' />
                                </ImageButton>
                            )}
                        </BoxBorder>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
