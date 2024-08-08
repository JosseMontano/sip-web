import styled from "@emotion/styled";
import CardPhotoInfo from '../../cardPhotoInfo/cardPhotoInfo';

// Estilo para el contenedor de la cuadrícula
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Ajuste automático de columnas con tamaño mínimo */
  gap: 1.5rem; /* Espacio entre los cards */
  padding: 1rem; /* Padding alrededor de la cuadrícula */
  justify-content: center; /* Centra los cards en el contenedor */

  /* Ajustes para pantallas más grandes */
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columnas para pantallas grandes */
  }

  /* Ajustes para pantallas medianas */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columnas para pantallas medianas */
  }

  /* Ajustes para pantallas pequeñas */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 columna para pantallas pequeñas */
    justify-items: center; /* Centra cada card en su celda */
  }
`;

// Estilo para el contenedor del título y la línea divisora
const TitleContainer = styled.div`
  margin-bottom: 1rem; /* Espacio debajo del contenedor */
`;

// Estilo para el título
const Title = styled.h4`
  margin: 0;
  font-size: 1.5rem; /* Tamaño del título */
  font-weight: bold;
  color: #333;
  padding-bottom: 0.5rem; /* Espacio entre el título y la línea divisora */
  padding-left: 15px;
  padding-top: 2rem;
`;

// Estilo para la línea divisora
const Divider = styled.hr`
  margin: 0;
  width: 100%; /* La línea cubre todo el ancho del contenedor */
  border: none;
  border-top: 2px solid #ddd; /* Estilo de la línea divisora */
`;

const Example1 = () => {
    // Lista de datos para los cards
    const cardData = Array(9).fill({
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSju5Ui0LFR83ddq5S1hfADGAeQwbkg5vvwbA&s',
        title: 'Lenteja',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque, neque id pellentesque laoreet, orci nisl varius velit, id luctus mi turpis ut dui. Nullam feugiat eget eros non rutrum.'
    });

    return (
        <>
            <TitleContainer>
                <Title>Todos</Title>
                <Divider />
            </TitleContainer>
            <GridContainer>
                {cardData.map((data, index) => (
                    <CardPhotoInfo
                        key={index}
                        imageSrc={data.imageSrc}
                        title={data.title}
                        description={data.description}
                    />
                ))}
            </GridContainer>
        </>
    );
}

export default Example1;
