import styled from "@emotion/styled";

const Card = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1);
    background: white;
    padding: 15px;
    border-radius: 20px;
    margin: 25px;

    @media (max-width: 768px) {
        width: 45vw;
        height: 45vw;
        padding: 3vw;
        margin: 3vw;
    }

    @media (max-width: 480px) {
        width: 70vw;
        height: 70vw;
        padding: 4vw;
        margin: 4vw;
    }
`;

const Image = styled.img`
    height: 50%;
    width: 50%;
    margin: 10px;
    border-radius: 100%;
    object-fit: cover;
`;

const TextContainer = styled.div`
    padding: 0 2vw 2vw;
    text-align: center;
`;

type CardCCStyleProps = {
    imageUrl?: string;
    categoryTitle?: string;
    categoryQuantityPlaces?: string;
};

const CardCCStyle = ({
    imageUrl = "https://img.freepik.com/vector-gratis/ilustracion-arte-dibujos-animados-aislado-queso_56104-624.jpg",
    categoryTitle = "title",
    categoryQuantityPlaces = "places",
}: CardCCStyleProps) => {
    return (
        <Card>
            <Image src={imageUrl} alt="AlternativeSourceImage" />
            <TextContainer>
                <h2>{categoryTitle}</h2>
                <span>{categoryQuantityPlaces}</span>
            </TextContainer>
        </Card>
    );
};

export default CardCCStyle;
