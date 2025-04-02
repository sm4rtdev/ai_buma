import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  NewArticlePage,
  SigninPage,
  SignupPage,
  WelcomePage,
} from "./pages";
import { AppWrapper } from "./context";

const App = () => {
  return (
    <Router basename="/wordpress">
      <AppWrapper>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/new" element={<NewArticlePage />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
};

export default App;
