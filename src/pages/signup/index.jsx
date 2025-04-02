import React, { useState } from "react";
import { AppLayout } from "../../layouts";
import { AuthContainer, AuthFormGroup } from "../signin/auth.styles";
import { Button, Input } from "../../components";
import { useNavigate } from "react-router-dom";
import { signupFormValidation } from "../../utils";
import { signupAction } from "../../actions";
import { Toaster, toast } from "react-hot-toast";

export const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", rPassword: "" });
  const [error, setError] = useState({
    email: "",
    password: "",
    rPassword: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async () => {
    const { isValid, errors } = signupFormValidation({ ...form });
    setError(errors);
    if (isValid) {
      const res = await signupAction({
        email: form.email,
        password: form.password,
      });
      if (res.success) {
        toast.success(res.message);
        setForm({ email: "", password: "", rPassword: "" });
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
          <Input
            label="Confirm Password"
            type="password"
            name="rPassword"
            value={form.rPassword}
            onChange={handleChange}
            error={error.rPassword}
            placeholder={"Enter Confirm password"}
          />
        </AuthFormGroup>
        <Button onClick={handleSignup}>Sign Up</Button>
        <h4>
          {"Already have an account? "}
          <span onClick={() => navigate("/signin")}>Login now</span>
        </h4>
      </AuthContainer>
    </AppLayout>
  );
};
