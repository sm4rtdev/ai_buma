import React from "react";
import { ButtonWrapper } from "./button.styles";

export const Button = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};
