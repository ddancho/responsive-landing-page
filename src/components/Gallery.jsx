import {
  ContainerOverlay,
  Container,
  Card,
  Img,
  Slider,
  ArrowLeft,
  ArrowRight,
} from "./styled/Gallery.styled";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import images from "../assets/images";

function Gallery() {
  const scroll = (direction) => {
    const element = document.getElementById("container");

    if (direction === "left") {
      element.scrollLeft += 600;
    } else {
      element.scrollLeft -= 600;
    }
  };

  return (
    <ContainerOverlay>
      <Container id='container'>
        <Slider>
          {images.galery.map((image, index) => (
            <Card key={index}>
              <Img src={image} alt='cake' />
            </Card>
          ))}
        </Slider>
      </Container>
      <ArrowLeft>
        <div>
          <BsArrowLeftShort fontSize={42} onClick={() => scroll("left")} />
        </div>
      </ArrowLeft>
      <ArrowRight>
        <div>
          <BsArrowRightShort fontSize={42} onClick={() => scroll("right")} />
        </div>
      </ArrowRight>
    </ContainerOverlay>
  );
}

export default Gallery;
