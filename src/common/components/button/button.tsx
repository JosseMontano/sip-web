import styled from "@emotion/styled";
import { primaryColor } from "../../constants/colors";

const Btn = styled.button`
  border: none;
  background-color: ${primaryColor};
  padding: 15px;
  border-radius: 10px;
  color: white;
`;

type ParamsType={
    msg: string | JSX.Element;
    onClick?: () => void;
}

const ButtonJSX = ({msg, onClick}:ParamsType) => {
  return <Btn onClick={onClick}>{msg}</Btn>;
};

export default ButtonJSX;
