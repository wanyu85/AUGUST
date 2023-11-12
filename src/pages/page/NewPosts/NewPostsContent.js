import { usePost } from "../PostProvider";
import { Grid, Paper, Typography } from "@mui/material";

import UploadImageContent from "../../../components/UploadImageContent";
import { TitleBorder, TitleText } from "./NewPostsStyle";

import { InputField } from "../../../components/InputField";

export default function NewPostsContent() {
    const { content, setContent } = usePost();
    return (
        <>
            <Grid
                item
                container
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                spacing={1}
                mt={5}
            >
                <Grid item>
                    <TitleBorder />
                </Grid>
                <Grid item>
                    <TitleText>商品描述</TitleText>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
                p={5}
            >
                <Grid
                    item
                    lg={10}
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                >
                    <UploadImageContent />
                </Grid>
                <InputField
                    label='文字'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    multiline
                    rows={10}
                />
            </Grid>
        </>
    );
}
