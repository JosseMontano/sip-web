import styled from "@emotion/styled";
import Logo from "../../assets/buerguerkin.png";
import SearchIcon from "../../../../assets/icons/search";
import BagIcon from "../../../../assets/icons/bag";
import ButtonJSX from "../../../../common/components/button/button";
import {
  firstMandatoryColor,
  primaryColor,
  secondaryColor,
  secondMandatoryColor,
} from "../../../../common/constants/colors";
import TelephoneOutbound from "../../../../assets/icons/telephoneOutbound";
import { icons } from "../../../../common/constants/icons";


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${secondaryColor};
  @media (width <= 630px) {
    justify-content: space-evenly;
  }
`;

const ContentImg = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
`;

const ContentUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
  height: 20px;
  font-size: 18px;
  @media (width <= 630px) {
    display: none;
  }

`;

const Url = styled.li<{active?:boolean}>`
cursor: pointer;
color: ${((params)=>params.active ? primaryColor : secondMandatoryColor)};
font-weight: 700;
    &:hover {
      border-bottom: 1px solid ${primaryColor};
    }
`

const ContentIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const DynamicIcon = styled.div`
  position: relative;
  span {
    position: absolute;
    top: -7px;
    right: -7px;
    background-color: ${primaryColor};
    border-radius: 50%;
    padding: 1px 5px;
    font-size: 12px;
    color: ${firstMandatoryColor};
  }
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

type ParamsType = {};

const Navbar = ({}: ParamsType) => {
    const active=true;
  return (
    <Container>
      <ContentImg>
        <img src={Logo} alt="logo" />
      </ContentImg>

      <ContentUl>
        <Url active={active}>Inicio</Url>
        <Url>Menu</Url>
        <Url>Servicios</Url>
        <Url>Ofertas</Url>
      </ContentUl>

      <ContentIcons>
        <SearchIcon size={icons.size} />
        <DynamicIcon>
          <span>8</span>
          <BagIcon size={icons.size} />
        </DynamicIcon>
        <ButtonJSX
          msg={
            <ContainerBtn>
              <TelephoneOutbound size={icons.size} />
              <p>Contactanos</p>
            </ContainerBtn>
          }
          onClick={() => {
            alert("contactados");
          }}
        />
      </ContentIcons>
    </Container>
  );
};

export default Navbar;
