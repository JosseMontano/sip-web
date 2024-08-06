import React from 'react';
import styled from "@emotion/styled";

const InputContainer = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")}; /* Ajustar el ancho según la prop */
  background-color: white; /* Fondo blanco para el contenedor */
`;

const IconWrapper = styled.div`
  padding: 12px; /* Espaciado alrededor del icono */
  display: flex;
  align-items: center;
`;

const InputWithIcon = styled.input<{ fullWidth?: boolean }>`
  padding: 12px; /* Aumentar el padding para hacerlo más grande */
  border: none;
  border-radius: 10px;
  font-size: 16px; /* Aumentar el tamaño de fuente */
  color: black;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")}; /* Ajustar el ancho según la prop */
  height: auto;
  &:focus {
    outline: none;
    border-color: darken(black, 10%); /* Ajustar color en enfoque si es necesario */
  }
`;

type Props = {
  inputPlaceholder: string;
  fullWidth?: boolean; /* Nueva prop para ajustar el ancho */
  Icon: React.FC<{ size: string }>; /* Nueva prop para el icono */
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputIconText: React.FC<Props> = ({ inputPlaceholder, fullWidth, Icon, name, value, onChange }) => {
  return (
    <InputContainer fullWidth={fullWidth}>
      <IconWrapper>
        <Icon size="24" /> {/* Ajusta el tamaño del icono según sea necesario */}
      </IconWrapper>
      <InputWithIcon
        placeholder={inputPlaceholder}
        fullWidth={fullWidth}
        name={name}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default InputIconText;
