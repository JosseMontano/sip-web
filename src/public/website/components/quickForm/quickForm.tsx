import styled from "@emotion/styled";
import InputTextInfo from "../../../../common/components/inputTextInfo/inputTextInfo";
import InputIconText from "../../../../common/components/inputIconText/inputIconText";
import InputSelectInfo from "../../../../common/components/inputSelectInfo/inputSelectInfo";
import ButtonJSX from "../../../../common/components/button/button";
import BagIcon from "../../../../assets/icons/bag";
import StarIcon from "../../../../assets/icons/star";
import SearchIcon from "../../../../assets/icons/search";
import React, { useState } from 'react';

/* Example of a Simple Form Based on images of Trello*/

const Container = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
`;

const UpperSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

const LowerSection = styled.div`
  background-color: black;
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  border-top: 2px solid black;
  border-radius: 0 0 10px 10px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
`;

const InputRow = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  position: relative;
`;

const TextInputWrapper = styled.div`
  flex: 1;
  position: relative;
`;

const PercentWrapper = styled.div`
  flex: 1;
  max-width: 30%;
  position: relative;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px; /* Margen superior para separar del componente anterior */
`;

const QuickForm = () => {
    const [user, setUser] = useState({
        VarName: "",
        VarAddress: "",
        VarCode: "",
        VarFood: "",
        Color1: "",
        Color2: "",
        Color3: "",
    });

    const [errors, setErrors] = useState({
        VarName: "",
        VarAddress: "",
        VarCode: "",
        VarFood: "",
        Color1: "",
        Color2: "",
        Color3: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.currentTarget;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const newErrors = {
            VarName: "",
            VarAddress: "",
            VarCode: "",
            VarFood: "",
            Color1: "",
            Color2: "",
            Color3: "",
        };

        let hasError = false;

        Object.keys(user).forEach((key) => {
            if (!user[key as keyof typeof user]) {
                newErrors[key as keyof typeof newErrors] = "Error, ingrese un dato.";
                hasError = true;
            }
        });

        if (hasError) {
            setErrors(newErrors);
        }

        return !hasError;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log(user);
        }
    };

    return (
        <Container>
            <UpperSection>
                <h2>Form Title</h2>
                <InputGroup>
                    <InputRow>
                        <TextInputWrapper>
                            <InputIconText
                                inputPlaceholder="Name"
                                fullWidth
                                Icon={BagIcon}
                                name="VarName"
                                value={user.VarName}
                                onChange={handleChange}
                            />
                            {errors.VarName && <ErrorText>{errors.VarName}</ErrorText>}
                        </TextInputWrapper>
                    </InputRow>
                    <InputRow>
                        <TextInputWrapper>
                            <InputIconText
                                inputPlaceholder="Address"
                                fullWidth
                                Icon={StarIcon}
                                name="VarAddress"
                                value={user.VarAddress}
                                onChange={handleChange}
                            />
                            {errors.VarAddress && <ErrorText>{errors.VarAddress}</ErrorText>}
                        </TextInputWrapper>
                        <PercentWrapper>
                            <InputSelectInfo
                                inputPlaceholder="Color"
                                options={["Red", "Yellow", "Green"]}
                                fullWidth
                                name="Color1"
                                value={user.Color1}
                                onChange={handleChange}
                            />
                            {errors.Color1 && <ErrorText>{errors.Color1}</ErrorText>}
                        </PercentWrapper>
                    </InputRow>
                    <InputRow>
                        <TextInputWrapper>
                            <InputIconText
                                inputPlaceholder="Favorite Food"
                                fullWidth
                                Icon={SearchIcon}
                                name="VarFood"
                                value={user.VarFood}
                                onChange={handleChange}
                            />
                            {errors.VarFood && <ErrorText>{errors.VarFood}</ErrorText>}
                        </TextInputWrapper>
                    </InputRow>
                    <InputRow>
                        <PercentWrapper>
                            <InputTextInfo
                                inputPlaceholder="Code"
                                fullWidth
                                name="VarCode"
                                value={user.VarCode}
                                onChange={handleChange}
                            />
                            {errors.VarCode && <ErrorText>{errors.VarCode}</ErrorText>}
                        </PercentWrapper>
                        <PercentWrapper>
                            <InputSelectInfo
                                inputPlaceholder="Color 2"
                                options={["Purple", "Brown", "Orange"]}
                                fullWidth
                                name="Color2"
                                value={user.Color2}
                                onChange={handleChange}
                            />
                            {errors.Color2 && <ErrorText>{errors.Color2}</ErrorText>}
                        </PercentWrapper>
                        <PercentWrapper>
                            <InputSelectInfo
                                inputPlaceholder="Color 3"
                                options={["White", "Cyan", "Blue"]}
                                fullWidth
                                name="Color3"
                                value={user.Color3}
                                onChange={handleChange}
                            />
                            {errors.Color3 && <ErrorText>{errors.Color3}</ErrorText>}
                        </PercentWrapper>
                    </InputRow>
                </InputGroup>
            </UpperSection>
            <LowerSection>
                <ButtonJSX msg="Enviar" onClick={handleSubmit} />
            </LowerSection>
        </Container>
    );
};

export default QuickForm;
