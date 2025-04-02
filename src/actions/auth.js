import axios from "axios";
import { API_URL } from "../config";

export const loginAction = async ({ email, password }) => {
  return (await axios.post(`${API_URL}/signin`, { email, password })).data;
};

export const signupAction = async ({ email, password }) => {
  return (await axios.post(`${API_URL}/signup`, { email, password })).data;
};
