import React from 'react';
import styled from "@emotion/styled";

const TextInput = styled.input<{ fullWidth?: boolean }>`
  padding: 12px; /* Aumentar el padding para hacerlo más grande */
  border: 2px solid black; /* Aquí puedes aplicar primary color si lo deseas */
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
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputTextInfo: React.FC<Props> = ({ inputPlaceholder, fullWidth, name, value, onChange }) => {
  return (
    <div>
      <TextInput 
        placeholder={inputPlaceholder} 
        fullWidth={fullWidth} 
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputTextInfo;
