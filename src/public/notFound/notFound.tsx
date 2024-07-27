import styled from "@emotion/styled";
import ButtonJSX from "../../common/components/button/button";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFound = () => {
  return (
    <Container>
      <span>No se encontro la pagina</span>
      <h2>Ha ocurrido un error</h2>
      <ButtonJSX
        msg={"redireccionar"}
        onClick={() => {
          alert("redireccioanndo");
        }}
      />
    </Container>
  );
};

export default NotFound;
