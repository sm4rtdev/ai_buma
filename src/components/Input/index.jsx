import React from "react";
import { InputWrapper } from "./input.styles";

export const Input = ({
  label,
  error,
  name,
  value,
  placeholder,
  type = "text",
  onChange,
}) => {
  return (
    <InputWrapper iserror={error}>
      {label && <p>{label}</p>}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <span>{error}</span>}
    </InputWrapper>
  );
};
