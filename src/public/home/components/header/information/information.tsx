import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 11%; /* Margen horizontal */
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 2rem; /* Reduce el padding en pantallas pequeñas */
    margin-bottom: 1rem;
  }
`;

const MainImage = styled.img`
  width: 250px;
  height: 250px;
  margin-right: 1.5rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%; /* Ocupa todo el ancho en pantallas pequeñas */
    text-align: center; /* Centra el texto */
    margin-bottom: 1rem;
  }
`;

const Title = styled.h3`
  margin: 0;
`;

const Description = styled.p`
  margin: 0.5rem 0;
`;

const Schedule = styled.p`
  margin: 0;
  strong {
    font-weight: bold;
  }
`;

type InformationProps = {
    imageSrc: string;
    title: string;
    description: string;
    schedule: string;
};

const Information = ({ imageSrc, title, description, schedule }: InformationProps) => {
    return (
        <Container>
            <MainImage src={imageSrc} alt={title} />
            <TextContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Schedule><strong>Horario:</strong> {schedule}</Schedule>
            </TextContainer>
        </Container>
    );
};

export default Information;
