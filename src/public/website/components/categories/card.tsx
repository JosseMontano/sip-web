import styled from "@emotion/styled";
import { firstMandatoryColor } from "../../../../common/constants/colors";

const Container = styled.div`
  width: 240px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1);
  background: ${firstMandatoryColor};
  padding: 15px;
  border-radius: 20px;

  @media (width <= 620px) {
    width: 200px;
    height: 200px;
  }
`;

const Image = styled.img`
  height: 50%;
  width: 50%;
  margin: 10px;
  border-radius: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  padding: 0 2vw 2vw;
  text-align: center;
  @media (width <= 660px) {
    h2 {
      font-size: 16px;
    }
    span {
      font-size: 14px;
    }
  }
`;

type Props = {
  imageUrl: string;
  categoryTitle: string;
  categoryQuantityPlaces: string;
};

export const Card = (props: Props) => {
  const { categoryQuantityPlaces, categoryTitle, imageUrl } = props;
  return (
    <Container>
      <Image src={imageUrl} alt="AlternativeSourceImage" title="img" />
      <TextContainer>
        <h2>{categoryTitle}</h2>
        <span>{categoryQuantityPlaces}</span>
      </TextContainer>
    </Container>
  );
};


