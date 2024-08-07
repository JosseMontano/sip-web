import React from 'react';
import styled from "@emotion/styled";

const InputContainer = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 45px; /* Reducir el radio del borde */
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Reducir la sombra del borde */
`;

const IconWrapper = styled.div`
  padding: 8px; /* Reducir el padding alrededor del icono */
  display: flex;
  align-items: center;
`;

const InputWithIcon = styled.input<{ fullWidth?: boolean }>`
  padding: 8px; /* Reducir el padding */
  border: none;
  border-radius: 45px;
  font-size: 14px; /* Reducir el tamaño de fuente */
  color: black;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  height: auto;
  &:focus {
    outline: none;
  }
`;

type Props = {
    inputPlaceholder: string;
    fullWidth?: boolean;
    Icon: React.FC<{ size: string }>;
    name: string;
};

const InputSearch: React.FC<Props> = ({ inputPlaceholder, fullWidth, Icon, name }) => {
    return (
        <InputContainer fullWidth={fullWidth}>
            <IconWrapper>
                <Icon size="20" /> {/* Ajustar el tamaño del icono según sea necesario */}
            </IconWrapper>
            <InputWithIcon
                placeholder={inputPlaceholder}
                fullWidth={fullWidth}
                name={name}
            />
        </InputContainer>
    );
};

export default InputSearch;
