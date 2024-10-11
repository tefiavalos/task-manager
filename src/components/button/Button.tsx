import React from "react";
import { StyledButton } from "./Button.styled";

interface ButtonType {
    text: string,
    type: "submit" | "reset" | "button" | undefined
}

export const Button: React.FC<ButtonType> = ({text, type}) => {

  return (
      <StyledButton type={type}>{text}</StyledButton>
  );
}