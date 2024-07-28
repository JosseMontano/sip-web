import styled from "@emotion/styled";
import CardCCStyle from "./cardCCStyle/cardCC";

const Container = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2vw;

    @media (max-width: 768px) {
        height: auto;
        padding: 5vw;
    }

    @media (max-width: 480px) {
        height: auto;
        padding: 10vw;
    }
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`;

const BaseCC = () => {
    return (
        <Container>
            <span>Elección de los Clientes</span>
            <h2>Categorías Populares</h2>
            <SubContainer>
                <CardCCStyle
                    // imageUrl="https://example.com/image1.jpg"
                    categoryTitle="Platillo Principal"
                    categoryQuantityPlaces="(10 lugares)"
                />
                <CardCCStyle
                    // imageUrl="https://example.com/image2.jpg"
                    categoryTitle="Desayunos"
                    categoryQuantityPlaces="(8 lugares)"
                />
                <CardCCStyle
                    // imageUrl="https://example.com/image3.jpg"
                    categoryTitle="Postres"
                    categoryQuantityPlaces="(5 lugares)"
                />
                <CardCCStyle
                    // imageUrl="https://example.com/image4.jpg"
                    categoryTitle="Cualquier Platillo"
                    categoryQuantityPlaces="(23 lugares)"
                />
            </SubContainer>
        </Container>
    );
};

export default BaseCC;
