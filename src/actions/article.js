import axios from "axios";
import { API_URL } from "../config";

export const getArticleData = async (userid) => {
  return (await axios.post(`${API_URL}/article/getall`, { userid })).data;
};

export const newArticle = async (newData) => {
  return (await axios.post(`${API_URL}/article/add`, { ...newData })).data;
};

export const embedArticle = async (articleIds) => {
  return (await axios.post(`${API_URL}/article/embed`, { articleIds })).data;
};

export const removeArticle = async (articleIds) => {
  return (await axios.post(`${API_URL}/article/delete`, { articleIds })).data;
};

export const findRefArticles = async (refStr) => {
  return (await axios.post(`${API_URL}/article/findref`, { refStr })).data;
};
