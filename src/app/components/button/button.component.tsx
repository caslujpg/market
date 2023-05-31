import React from "react";
import { ButtonStyled } from "./button.component.style";
import chevronIcon from "../../../assets/arrow-right.svg";

type ButtonProps = {
  onClick?: () => void;
};

export const ButtonComponent: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <ButtonStyled onClick={onClick}>
      <p>Quero ser premium</p>
      <img src={chevronIcon} alt="Chevron Icon" />
    </ButtonStyled>
  );
};
