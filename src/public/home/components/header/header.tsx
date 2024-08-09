import React, { useState } from "react";
import styled from "@emotion/styled";
import InputSearch from "./inputSearch/inputSearch";
import SearchIcon from "../../../../assets/icons/search";
import StarIcon from "../../../../assets/icons/star";
import ButtonOption from "./buttonOption/buttonOption";
import Navbar from "./navbar/navbar";
import Information from "./information/information";
import HeaderImg from "../../assets/header.png"

const ContainerHead = styled.div`
  background-color: #EDEDED; /* Color de fondo */
`;

const ContainerPreBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-left: 1rem;
  z-index: 999;
  flex-wrap: wrap;
  padding: 0 10%; /* Margen horizontal */
`;

const InputWrapper = styled.div`
  flex: 0 1 30%;
  max-width: 30%; /* Asegura que el input no se expanda más allá del 30% */
  min-width: 200px; /* Añadido para mantener un tamaño mínimo en pantallas pequeñas */
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly; /* Espacia los botones uniformemente */
  flex-wrap: wrap;
  gap: 0.5rem; /* Ajusta el espacio entre botones */
`;

type HeaderProps = {
    onButtonClick: (buttonId: string) => void;
};

const Header: React.FC<HeaderProps> = ({ onButtonClick }) => {
    const [activeButton, setActiveButton] = useState<string | null>("Todos");

    const handleClick = (buttonId: string) => {
        setActiveButton(buttonId);
        onButtonClick(buttonId); // Cambia el componente activo en Home
    };

    return (
        <ContainerHead>
            <Navbar title="SIVI" />
            
            <Information
                    imageSrc={HeaderImg}
                    title="Mejore su experiencia en el restaurante"
                    description="La solución todo en uno para que los restaurantes optimicen las operaciones, mejoren la experiencia del cliente y aumenten las ganancias."
                    schedule="tienes alguna duda? Contactanos"
                />
            
            <ContainerPreBody>
                
                <InputWrapper>
                    <InputSearch
                        inputPlaceholder="Buscar..."
                        Icon={SearchIcon}
                        name="VarSearch"
                        fullWidth={true}
                    />
                </InputWrapper>
                <ButtonContainer>
                    <ButtonOption
                        msg="Todos"
                        Icon={StarIcon}
                        onClick={() => handleClick("Todos")}
                        active={activeButton === "Todos"}
                    />
                    <ButtonOption
                        msg="Empresas Afiliadas"
                        Icon={StarIcon}
                        onClick={() => handleClick("Empresas Afiliadas")}
                        active={activeButton === "Empresas Afiliadas"}
                    />
                    <ButtonOption
                        msg="Ejemplo"
                        Icon={StarIcon}
                        onClick={() => handleClick("Ejemplo")}
                        active={activeButton === "Ejemplo"}
                    />
                    <ButtonOption
                        msg="Quispipilin"
                        Icon={StarIcon}
                        onClick={() => handleClick("Quispipilin")}
                        active={activeButton === "Quispipilin"}
                    />
                    <ButtonOption
                        msg="Quispipilin1"
                        Icon={StarIcon}
                        onClick={() => handleClick("Quispipilin1")}
                        active={activeButton === "Quispipilin1"}
                    />
                    <ButtonOption
                        msg="Quispipilin2"
                        Icon={StarIcon}
                        onClick={() => handleClick("Quispipilin2")}
                        active={activeButton === "Quispipilin2"}
                    />
                </ButtonContainer>
            </ContainerPreBody>
        </ContainerHead>
    );
};

export default Header;
