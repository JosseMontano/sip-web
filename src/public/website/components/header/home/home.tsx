import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import HomeImg from "../../../assets/home.png";
import {
  firstMandatoryColor,
  primaryColor,
  starColor,
} from "../../../../../common/constants/colors";
import ButtonJSX from "../../../../../common/components/button/button";
import TriangleRight from "../../../../../assets/icons/triangleRight";
import PizzaImg from "../../../assets/pizza.jpg";
import EnsaladaImg from "../../../assets/ensalada.jpg";
import StarFillIcon from "../../../../../assets/icons/starFill";
import {
  borderImg,
  borderRadiusCard,
} from "../../../../../common/constants/borders";
import StarIcon from "../../../../../assets/icons/star";

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: 1;
  @media (width <= 1040px) {
    grid-template-columns: 1fr;
    gap: 40px;
    height: auto;
    margin-top: 100px;
  }
`;

const Col1 = styled.div`
  display: flex;
  justify-content: center;

  .content_col1 {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    h1 {
      font-size: 38px;
      span {
        color: ${primaryColor};
      }
    }
    .container_btn {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      gap: 20px;
      .player {
        display: flex;
        align-items: center;
        p {
          margin-right: 10px;
        }
        .container_player {
          background-color: ${firstMandatoryColor};
          border-radius: 50%;
          padding: 10px;
          box-shadow: 0px 5px 100px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  @media (width<=460px) {
    .content_col1 {
      width: 330px;
      h1 {
        font-size: 32px;
      }
      .description {
        font-size: 15px;
      }
    }
  }
`;

const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .container_img {
    background-color: ${primaryColor};
    border-radius: 50%;
    img {
      width: 500px;
      height: 500px;
      animation: ${moveUpDown} 5s infinite;
      @media (width <= 1040px) {
        width: 400px;
        height: 400px;
      }
      @media (width <= 680px) {
        width: 300px;
        height: 300px;
      }
    }
  }

  .container_card {
    display: flex;
    flex-direction: row;
    gap: 20px;
    position: absolute;
    bottom: 10px;
    @media (width <= 460px) {
      width: 350px;
      gap: 10px;
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: ${firstMandatoryColor};
  padding: 10px;
  border-radius: ${borderRadiusCard};
  width: 250px;

  img {
    width: 80px;
    height: 80px;
    border-radius: ${borderImg};
    object-fit: cover;
    @media (width <= 680px) {
      width: 65px;
      height: 65px;
    }
  }
  @media (width <= 680px) {
    width: 200px;
  }
`;

type ParamsType = {
  sizeIcons: () => string
};
const Home = ({sizeIcons}: ParamsType) => {
  return (
    <Container>
      <Col1>
        <div className="content_col1">
          <h1>
            Dive into Delights of delectable <span>food</span>
          </h1>
          <span className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </span>
          <div className="container_btn">
            <ButtonJSX msg={"Ordenar ahora"} />
            <div className="player">
              <p>Ver video</p>
              <div className="container_player">
                <TriangleRight size={"25"} />
              </div>
            </div>
          </div>
        </div>
      </Col1>
      <Col2>
        <div className="container_img">
          <img src={HomeImg} alt="home" />
        </div>
        <div className="container_card">
          <Card>
            <img src={PizzaImg} alt="producot1" />
            <div>
              <h3>Pizza</h3>
              <p>
                <StarFillIcon size={sizeIcons()} color={starColor} />
                <StarFillIcon size={sizeIcons()} color={starColor} />
                <StarFillIcon size={sizeIcons()} color={starColor} />
                <StarIcon size={sizeIcons()} />
                <StarIcon size={sizeIcons()} />
              </p>
              <span>Bs 18</span>
            </div>
          </Card>
          <Card>
            <img src={EnsaladaImg} alt="producot1" />
            <div>
              <h3>Pizza</h3>
              <p>
                <StarFillIcon size={sizeIcons()} color={starColor} />
                <StarFillIcon size={sizeIcons()} color={starColor} />
                <StarFillIcon size={sizeIcons()} color={starColor} />
                <StarFillIcon size={sizeIcons()} color={starColor} />
                <StarIcon size={sizeIcons()} />
              </p>
              <span>Bs 18</span>
            </div>
          </Card>
        </div>
      </Col2>
    </Container>
  );
};

export default Home;
