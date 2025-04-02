import React from "react";
import { AppLayout } from "../../layouts/app";
import { ButtonGroup, WelcomePageWrapper } from "./welcome.styles";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

export const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <WelcomePageWrapper>
        <h1>Revolutionize Your Internal Linking</h1>
        <p>
          Set up your Buma account to unlock the power of AI internal linking.
        </p>
        <ButtonGroup>
          <Button onClick={() => navigate("/signin")} className="auth-button">
            Sign In
          </Button>
          <Button onClick={() => navigate("/signup")} className="auth-button">
            Sign Up
          </Button>
        </ButtonGroup>
      </WelcomePageWrapper>
    </AppLayout>
  );
};
