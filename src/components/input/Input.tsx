import React from "react";
import { StyledInput } from "./Input.styled";

interface TaskFormProps {
    onChange: (e: any) => void,
    value: string,
    type: string,
    placeholder: string
}

export const Input: React.FC<TaskFormProps> = ({ onChange, type, placeholder, value }) => {

  return (
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
  );
};
