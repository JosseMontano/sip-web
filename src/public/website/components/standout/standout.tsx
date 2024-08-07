import styled from "@emotion/styled";
import {Card} from "./card";
import StarFillIcon from "../../../../assets/icons/starFill";
import { icons } from "../../../../common/constants/icons";
import {
  firstMandatoryColor,
  primaryColor,
  starColor,
} from "../../../../common/constants/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 2vw;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  width: 100%;
  margin-top: 20px;
`;
const CardWrapper = styled.div`
  position: relative;
  width: fit-content;
`;
const Heart = styled.span`
 background-color: ${(props) => (props.isWhite ? "#39db4a" : "#39db4a")}; /* Conditionally sets the background color */
  color: ${(props) => (props.isWhite ? "white" : "green")}; /* Conditionally sets the text color */
  
  padding: 10px;
  width: 35px;
  height: 50px;
  
  clip-path: polygon(50% 0%, 205% 100%, 1000% 0%, 75% 880%, 50% 100%, 20% 290%, 0% 50%, 0% 0%);

  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  border-radius: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StarWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;
`;

const DolarWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 30px;
`;
const RedDollarSign = styled.span`
  color: red;
`;

const CategoryQuantityPlaces = ({ price }) => {
  const [currency, amount] = price.split("$");
  return (
    <span>
      <RedDollarSign>$</RedDollarSign>
      {amount}
    </span>
  );
};


const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10%;
`;

const ArrowButton = styled.button`
  background-color: ${(props) => (props.isGreen ? "#39db4a" : "#c8c8c8")};
  border: none;
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isGreen ? "#34c041" : "#a8a8a8")};
  }
`;
const Standout = () => {
    const img= "https://img.freepik.com/vector-gratis/ilustracion-arte-dibujos-animados-aislado-queso_56104-624.jpg"
  return (
    <Container>
    <span>Platos especiales</span>
    <h2>Platos destacados de nuestro menú</h2>
    <ButtonContainer>
        <ArrowButton>&#8592;</ArrowButton>
        <ArrowButton isGreen>&#8594;</ArrowButton>
      </ButtonContainer>
    <SubContainer>
      <CardWrapper>
        <Card
          imageUrl={img}
          categoryTitle="Plato 1"
          categoryQuantityPlaces="Description"
        />
        <DolarWrapper>
           <CategoryQuantityPlaces price="$24.00" />
        </DolarWrapper>
        <Heart isWhite>&hearts;</Heart>
        <StarWrapper>
          <StarFillIcon size={icons.size} color={starColor} />
          4.9
        </StarWrapper>
      </CardWrapper>
      <CardWrapper>
        <Card
          imageUrl={img}
          categoryTitle="Plato 2"
          categoryQuantityPlaces="Description"          
        />
        <DolarWrapper>
           <CategoryQuantityPlaces price="$26.00" />
        </DolarWrapper>
          <Heart>&hearts;</Heart>
        <StarWrapper>
          <StarFillIcon size={icons.size} color={starColor} />
            4.6
        </StarWrapper>
      </CardWrapper>
      <CardWrapper>
        <Card
          imageUrl={img}
          categoryTitle="Plato 3" categoryQuantityPlaces="Description"/>
          <DolarWrapper>
           <CategoryQuantityPlaces price="$20.00" />
          </DolarWrapper>
          <Heart>&hearts;</Heart>
          <StarWrapper>
            <StarFillIcon size={icons.size} color={starColor} />
            4.5
          </StarWrapper>
        </CardWrapper>
      </SubContainer>
    </Container>
  );
};

export default Standout;
