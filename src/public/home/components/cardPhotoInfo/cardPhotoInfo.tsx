import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  width: 100%; /* Ajusta el ancho del card al contenedor */
  max-width: 450px; /* Ancho máximo del card */
  height: 400px; /* Alto del card */
  border: 1px solid #ddd; /* Borde del card */
  border-radius: 8px; /* Bordes redondeados */
  overflow: hidden; /* Ocultar contenido que se desborde del card */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra del card */
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Image = styled.img`
  width: 100%; /* Ajusta la imagen al ancho del card */
  height: 250px; /* Altura fija para la imagen */
  object-fit: cover; /* Ajusta la imagen para que cubra el área sin distorsión */
  padding: 1rem 1rem 0.5rem 1rem; /* Padding alrededor de la imagen */
`;

const Content = styled.div`
  padding: 0 1rem; /* Padding alrededor del contenido */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Alinea el contenido en la parte superior */
  flex: 1; /* Hace que el contenido ocupe el espacio restante del card */
`;

const Title = styled.h6`
  margin: 0; /* Elimina el margen por defecto del h6 */
  font-size: 1.1rem; /* Tamaño de fuente del título */
  font-weight: bold; /* Fuente en negrita */
  color: #333; /* Color del texto */
`;

const Description = styled.p`
  margin: 0.5rem 0 0 0; /* Margen superior del párrafo */
  font-size: 0.9rem; /* Tamaño de fuente de la descripción */
  color: #666; /* Color del texto */
`;

type CardPhotoInfoProps = {
    imageSrc: string;
    title: string;
    description: string;
};

const CardPhotoInfo: React.FC<CardPhotoInfoProps> = ({ imageSrc, title, description }) => {
    return (
        <Card>
            <Image src={imageSrc} alt="Image description" />
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Content>
        </Card>
    );
};

export default CardPhotoInfo;
