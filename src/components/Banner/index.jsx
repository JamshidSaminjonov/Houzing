import { Blur, Container, Content, Img, Title } from "./style";
import Button from "../Genenric/Button";
import img1 from "../../assets/img/house1.png";

export const GenCarousel = () => {
  return (
    <Container>
      <Img src={img1} />
      <Blur />
      <Content>
        <Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home,
          the Week's Most Popular Home
        </Title>

        <Button>Read More</Button>
      </Content>
    </Container>
  );
};

export default GenCarousel;
