import styled from "@emotion/styled";
import Logo from "../../../assets/buerguerkin.png";

const Container = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
`;

type ParamsType = {
}
const ContentImg = ({}:ParamsType) => {
    return (
        <Container>
        <img src={Logo} alt="logo" />
      </Container>
    );
}

export default ContentImg;