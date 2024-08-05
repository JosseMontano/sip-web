import styled from "@emotion/styled";
import {Card} from "./card";


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

const Categories = () => {
    const img= "https://img.freepik.com/vector-gratis/ilustracion-arte-dibujos-animados-aislado-queso_56104-624.jpg"
  return (
    <Container>
      <span>Elección de los Clientes</span>
      <h2>Categorías Populares</h2>
      <SubContainer>
        <Card
          imageUrl={img}
          categoryTitle="Platillo Principal"
          categoryQuantityPlaces="(10 lugares)"
        />
        <Card
          imageUrl={img}
          categoryTitle="Desayunos"
          categoryQuantityPlaces="(8 lugares)"
        />
        <Card
          imageUrl={img}
          categoryTitle="Postres"
          categoryQuantityPlaces="(5 lugares)"
        />
        <Card
          imageUrl={img}
          categoryTitle="Cualquier Platillo"
          categoryQuantityPlaces="(23 lugares)"
        />
      </SubContainer>
    </Container>
  );
};

export default Categories;
