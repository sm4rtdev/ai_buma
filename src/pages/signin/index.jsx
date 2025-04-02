import React, { useState } from "react";
import { AppLayout } from "../../layouts";
import { AuthContainer, AuthFormGroup } from "./auth.styles";
import { Button, Input } from "../../components";
import { useNavigate } from "react-router-dom";
import { signinFormValidation } from "../../utils";
import { loginAction } from "../../actions";
import { Toaster, toast } from "react-hot-toast";

export const SigninPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async () => {
    const { isValid, errors } = signinFormValidation({ ...form });
    setError(errors);
    if (isValid) {
      const res = await loginAction({ ...form });
      if (res.success) {
        localStorage.setItem("user", res.token);
        navigate("/home");
      } else {
        toast.error(res.message);
      }
    }
  };

  return (
    <AppLayout>
      <Toaster position="top-center" reverseOrder={false} />
      <AuthContainer>
        <h1>Log In</h1>
        <AuthFormGroup>
          <Input
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={error.email}
            placeholder={"e.g buma@example.com"}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            error={error.password}
            placeholder={"Enter password"}
          />
        </AuthFormGroup>
        <Button onClick={handleLogin}>Log In</Button>
        <h4>
          {"Don’t have an account? "}
          <span onClick={() => navigate("/signup")}>Sign Up now</span>
        </h4>
      </AuthContainer>
    </AppLayout>
  );
};
