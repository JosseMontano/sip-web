import React from 'react';
import styled from "@emotion/styled";
import { primaryColor, starColor } from "../../../../common/constants/colors";
import StarIcon from '../../../../assets/icons/starFill';

// Local Images
import cheffCommentImage from "../../assets/cheffComment.png";
import pizzaEmoji from "../../assets/pizzaEmoji.png";
import yummyEmoji from "../../assets/yummyEmoji.png";
import smileyEmote from "../../assets/smileyEmote.png";

// Componente text Globe
const SpeechBubble = styled.div`
  position: absolute;
  top: 13vw;
  left: 50%;
  transform: translateX(30%);
  width: 11vw;
  height: 3vw;
  background-color: #fff;
  border-radius: 1vw;
  box-shadow: 0px 0.4vw 0.8vw rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1vw;
  
  &::before {
    content: "";
    position: absolute;
    bottom: 2vw;
    left: 0;
    width: 0;
    height: 0;
    border-left: 1vw solid #fff;
    border-top: 1vw solid transparent;
    border-bottom: 1vw solid transparent;
    border-radius: 0.5vw;
    z-index: -1;
  }

  @media (max-width: 768px) {
    content: "";
    top: 25vw;
    left: 40%;
    transform: translateX(20%);
    width: 35vw;
    height: 15vw;
    background-color: #fff;
    border-radius: 1vw;
    box-shadow: 0px 0.4vw 0.8vw rgba(0, 0, 0, 0.1);

    &::before {
    content: "";
    position: absolute;
    bottom: 10vw;
    left: 0;
    width: 0;
    height: 0;
    border-left: 20px solid #fff; /* Base del triángulo */
    border-top: 30px solid transparent; /* Lado derecho del triángulo */
    z-index: -1;
    }
  }
`;

//Left and right emojis
const Emoji1 = styled.img`
  position: absolute;
  width: 2vw;
  height: 2vw;
  top: 3vw;
  right: 13vw;
  transform: rotate(90deg);
  z-index: 2;

  @media (max-width: 768px) {
    width: 5vw;
    height: 5vw;
    right: 21vw;
    top: 8vw;
  }
`;

const Emoji2 = styled.img`
  position: absolute;
  width: 1.8vw;
  height: 1.8vw;
  top: 3vw;
  left: 13vw;
  transform: rotate(-25deg);
  z-index: 2;

  @media (max-width: 768px) {
    width: 5vw;
    height: 5vw;
    left: 20vw;
    top: 12vw;
  }
`;

//MAIN CONTAINER

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0vw;
  margin: 0vw;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  padding-bottom: 15vw;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4vw;
    padding-top: 15vw;
    padding-bottom: 15vw;
  }
`;

//LEFT SIDE OF THE COMPONENT

const LeftSide = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Rectangle = styled.div`
  position: absolute;
  top: -3vw;
  left: 50%;
  transform: translateX(-50%);
  width: 23vw;
  height: 18vw;
  background-color: ${primaryColor};
  border-radius: 11vw 11vw 2.5vw 2.5vw;
  z-index: 1;

  @media (max-width: 768px) {
    width: 45vw;
    height: 33vw;
    border-radius: 10vw 10vw 4vw 4vw;
  }
`;

const LeftImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 30vw;
  width: 18vw;
  z-index: 1;

  @media (max-width: 768px) {
    height: 60vw;
    width: 36vw;
  }
`;


//RIGHT SIDE OF THE COMPONENT

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    padding-top: 200px;
  }
`;

const Title = styled.h5`
  margin: 0;
  color: ${primaryColor};
  letter-spacing: 0.2vw;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Announcement = styled.h1`
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  margin: 0;
  font-weight: bold;
  color: #888;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const BottomRightSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    justify-content: center; /* Centra horizontalmente las imágenes */
  }
`;

const CImage = styled.img`
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
  border: 0.2vw solid #fff;
  position: absolute;

  &:nth-of-type(1) {
    left: 0;
    z-index: 1;
  }

  &:nth-of-type(2) {
    left: 2vw;
    z-index: 2;
  }

  &:nth-of-type(3) {
    left: 4vw;
    z-index: 3;
  }

  @media (max-width: 768px) {
    width: 10vw;
    height: 10vw;
    border: 0.8vw solid #fff;

    &:nth-of-type(1) {
      left: -10vw; /* Ajusta la posición para centrar */
    }

    &:nth-of-type(2) {
      left: -4vw; /* Ajusta la posición para centrar */
    }

    &:nth-of-type(3) {
      left: 2vw; /* Ajusta la posición para centrar */
    }
  }
`;


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10vw;
  gap: 0.50rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SpeechText = styled.p`
  margin: 0;
  font-size: 16px;  // Ajusta el tamaño del texto si es necesario
  font-weight: bold;
  display: flex;
  align-items: center;
  height: auto;  // Asegúrate de que el texto ocupe toda la altura del globo
  width: auto;
`;

const SpeechImage = styled.img`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  vertical-align: middle;  // Asegura que la imagen se alinee verticalmente con el texto
`;


const StyledStarIcon = styled(StarIcon)`
  color: ${starColor};
  margin-right: 1vw;
`;

const Rating = styled.span`
  margin-right: 1rem;
  font-weight: bold;
`;

const Quantity = styled.span`
  margin: 0;
  font-weight: bold;
  color: gray;
`;

const ScoreTitle = styled.h4`
  margin: 0;
`;


type ProductsProps = {
  title: string;
  announcement: string;
  description: string;
  scoreTitle: string;
  rating: string;
  quantity: string;
  CImage1: string;
  CImage2: string;
  CImage3: string;
  speechText: string;
  speechImage: string;
};

const Comments = ({ title, announcement, description, scoreTitle, rating, quantity, CImage1, CImage2, CImage3, speechText }: ProductsProps) => {
  return (
    <Container>
      <LeftSide>
        <SpeechBubble>
          <SpeechText>{speechText}</SpeechText>
          <SpeechImage src={smileyEmote} alt="altimage" />
        </SpeechBubble>
        <Rectangle />
        <LeftImage src={cheffCommentImage} alt="Left Image" />
        <Emoji1 src={pizzaEmoji} alt="Emoji 1" />
        <Emoji2 src={yummyEmoji} alt="Emoji 2" />
      </LeftSide>
      <RightSide>
        <Title>{title}</Title>
        <Announcement>{announcement}</Announcement>
        <Description>{description}</Description>
        <BottomRightSection>
          <ImageContainer>
            <CImage src={CImage1} alt="CImage 1" />
            <CImage src={CImage2} alt="CImage 2" />
            <CImage src={CImage3} alt="CImage 3" />
          </ImageContainer>
          <TextContainer>
            <ScoreTitle>{scoreTitle}</ScoreTitle>
            <RatingContainer>
              <StyledStarIcon size="18px" color={starColor} />
              <Rating>{rating}</Rating>
              <Quantity>{quantity}</Quantity>
            </RatingContainer>
          </TextContainer>
        </BottomRightSection>
      </RightSide>
    </Container>
  );
};

export default Comments;


