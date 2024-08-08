import styled from "@emotion/styled";
import React from "react";

const Btn = styled.button<{ active?: boolean }>`
  border: ${({ active }) => (active ? "2px solid #38c02ce0" : "none")};
  background-color: ${({ active }) => (active ? "#e0f5f0" : "white")};
  padding: 6px 12px; /* Reducir el padding */
  border-radius: 20px; /* Reducir el radio del borde */
  color: ${({ active }) => (active ? "#38c02ce0" : "gray")};
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Reducir la sombra del borde */
  font-size: 12px; /* Reducir el tamaño de fuente */
  font-weight: bold; /* Hacer el texto en negrita */
  white-space: nowrap; /* Evitar que el texto se divida en varias líneas */
`;

const IconWrapper = styled.div<{ active?: boolean }>`
  padding: 4px; /* Reducir el padding alrededor del icono */
  background-color: ${({ active }) => (active ? "#e0f5f0" : "#EDEDED")}; /* Fondo diferente para el icono */
  border-radius: 50%; /* Margen redondeado */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px; /* Reducir el espacio entre el icono y el texto */
`;

type ParamsType = {
    msg: string;
    Icon: React.FC<{ size: string }>;
    onClick?: () => void;
    active?: boolean; // Nueva prop para indicar si el botón está activo
};

const ButtonOption = ({ msg, Icon, onClick, active }: ParamsType) => {
    return (
        <Btn onClick={onClick} active={active}>
            <IconWrapper active={active}>
                <Icon size="16" /> {/* Ajusta el tamaño del icono según sea necesario */}
            </IconWrapper>
            {msg}
        </Btn>
    );
};

export default ButtonOption;
