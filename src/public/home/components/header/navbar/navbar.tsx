import { primaryColor } from "../../../../../common/constants/colors";
import styled from "@emotion/styled";
import StarIcon from "../../../../../assets/icons/star";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 11%;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 70px;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.div<{ bgColor?: string }>`
  background-color: ${({ bgColor }) => bgColor || "gray"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
`;

const Title = styled.h2`
  color: ${primaryColor};
  margin-left: 0.5rem;
`;

type ParamsType = {
    iconBgColor?: string;
    title: string;
};

const Navbar = ({ iconBgColor, title }: ParamsType) => {
    return (
        <Container>
            <IconWrapper bgColor={iconBgColor}>
                <StarIcon size="20px" />
            </IconWrapper>
            <Title>{title}</Title>
        </Container>
    );
};

export default Navbar;
