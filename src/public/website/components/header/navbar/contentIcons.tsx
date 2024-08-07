import styled from "@emotion/styled";
import {
  firstMandatoryColor,
  primaryColor,
} from "../../../../../common/constants/colors";
import SearchIcon from "../../../../../assets/icons/search";
import TelephoneOutbound from "../../../../../assets/icons/telephoneOutbound";
import BagIcon from "../../../../../assets/icons/bag";
import ButtonJSX from "../../../../../common/components/button/button";

const Container = styled.div`
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

type ParamsType = {
  sizeIcons: () => string
};
const ContentIcons = ({sizeIcons}: ParamsType) => {


  return (
    <Container>
      <SearchIcon size={sizeIcons()} />
      <DynamicIcon>
        <span>8</span>
        <BagIcon size={sizeIcons()} />
      </DynamicIcon>
      <ButtonJSX
        msg={
          <ContainerBtn>
            <TelephoneOutbound
              size={sizeIcons()}
            />
            <p>Contactanos</p>
          </ContainerBtn>
        }
        onClick={() => {
          alert("contactados");
        }}
      />
    </Container>
  );
};

export default ContentIcons;
