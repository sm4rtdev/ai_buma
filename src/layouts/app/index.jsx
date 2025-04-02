import React from "react";
import { AppContainer, AppLayoutWrapper } from "./app.styles";
import { AppHeader } from "./AppHeader";

export const AppLayout = ({ children }) => {
  return (
    <AppLayoutWrapper>
      <AppHeader />
      <AppContainer>{children}</AppContainer>
    </AppLayoutWrapper>
  );
};
