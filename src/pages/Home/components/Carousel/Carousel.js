import { Skeleton } from "@mui/material";
import { ContainerCarousel } from "./CarouselStyle";

const Carousel = (props) => {
    const { imgUrl } = props.item;
    const { loading } = props;
    return (
        <ContainerCarousel className='carousel'>
            {loading ? (
                <Skeleton variant='rectangular' width={440} height={350} />
            ) : (
                <img src={require(`../../../../image/${imgUrl}`)} alt='' />
            )}
        </ContainerCarousel>
    );
};

export default Carousel;
