// src/common/components/inputSelectInfo/inputSelectInfo.tsx
import React from 'react';
import styled from "@emotion/styled";

const Select = styled.select<{ fullWidth?: boolean }>`
  padding: 12px;
  border: 2px solid black; /* Aquí puedes aplicar primary color si lo deseas */
  border-radius: 10px;
  font-size: 16px;
  color: black;
  background-color: white;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")}; /* Ajustar el ancho según la prop */
  height: auto;
  &:focus {
    outline: none;
    border-color: darken(black, 10%); /* Ajustar color en enfoque si es necesario */
  }

  option {
    background-color: white;
    color: black;
  }
`;

type Props = {
    inputPlaceholder: string;
    options: string[];
    fullWidth?: boolean; /* Nueva prop para ajustar el ancho */
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const InputSelectInfo: React.FC<Props> = ({ inputPlaceholder, options, fullWidth, name, value, onChange }) => {
    return (
        <div>
            <Select name={name} value={value} onChange={onChange} fullWidth={fullWidth}>
                <option value="" disabled>
                    {inputPlaceholder}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </Select>
        </div>
    );
};

export default InputSelectInfo;
