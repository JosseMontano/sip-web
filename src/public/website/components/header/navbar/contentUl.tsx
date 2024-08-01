import styled from "@emotion/styled";
import {
  primaryColor,
  secondMandatoryColor,
} from "../../../../../common/constants/colors";

const Container = styled.ul`
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

const Url = styled.li<{ active?: boolean }>`
  cursor: pointer;
  color: ${(params) => (params.active ? primaryColor : secondMandatoryColor)};
  font-weight: 700;
  &:hover {
    border-bottom: 1px solid ${primaryColor};
  }
`;

type ParamsType = {};
const ContentUl = ({}: ParamsType) => {
  const active = true;
  return (
    <Container>
      <Url active={active}>Inicio</Url>
      <Url>Menu</Url>
      <Url>Servicios</Url>
      <Url>Ofertas</Url>
    </Container>
  );
};

export default ContentUl;
