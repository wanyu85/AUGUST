import "./index.css";
import { Box, Container } from "@mui/material";

import PageCardSlider from "./components/PageCard/PageCardSlider";
import CarouselSlider from "./components/Carousel/CarouselSlider";
import ImageCardSlider from "./components/ImageCard/ImageCardSlider";
import Activity from "./components/Activity/Activity";

import Topics from "../Header/Topics";

export default function Home() {
    return (
        <>
            <Box pt={20} />
            <CarouselSlider />
            <Container maxWidth='lg'>
                <Activity />
            </Container>
            <Container maxWidth='lg' sx={{ pt: 5 }}>
                <ImageCardSlider />
            </Container>
            <Container maxWidth='lg' sx={{ pt: 10 }}>
                <PageCardSlider />
            </Container>
        </>
    );
}
