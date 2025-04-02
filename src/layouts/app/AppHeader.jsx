import React from "react";
import { AppHeaderContainer, AppHeaderWrapper } from "./app.styles";
import { useAuthContext } from "../../context";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

export const AppHeader = () => {
  const navigate = useNavigate();
  const { authContext, setAuthContext } = useAuthContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuthContext({
      isAuthenticated: false,
      user: "",
    });
    navigate("/signin");
  };

  return (
    <AppHeaderWrapper>
      <AppHeaderContainer>
        <h1>Buma</h1>
        {authContext.isAuthenticated && (
          <Button className="auth-button" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </AppHeaderContainer>
    </AppHeaderWrapper>
  );
};
