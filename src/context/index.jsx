import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { isPrivateUrl } from "../utils";
import { getArticleData } from "../actions";

const AuthContext = createContext({});
const ArticleContext = createContext([]);

export const AppWrapper = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [authContext, setAuthContext] = useState({
    isAuthenticated: false,
    user: "",
  });
  const [articleContext, setArticleContext] = useState([]);

  const authValue = useMemo(
    () => ({ authContext, setAuthContext }),
    [authContext]
  );

  const articleValue = useMemo(
    () => ({ articleContext, setArticleContext }),
    [articleContext]
  );

  const setContext = async () => {
    const token = localStorage.user;
    if (token) {
      const decoded = jwt_decode(String(token));
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("user");
        setAuthContext({
          ...authContext,
          isAuthenticated: false,
          user: "",
        });
        if (!isPrivateUrl(location.pathname, false)) {
          navigate("/");
        }
      } else {
        setAuthContext({
          ...authContext,
          isAuthenticated: true,
          user: localStorage.getItem("user"),
        });
        const articleData = await getArticleData(decoded.id);
        setArticleContext(articleData.data);
        if (!isPrivateUrl(location.pathname, true)) {
          navigate("/home");
        }
      }
    } else {
      if (!isPrivateUrl(location.pathname, false)) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    setContext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const loadFunc = async () => {
      await setContext();
    };
    loadFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <AuthContext.Provider value={authValue}>
      <ArticleContext.Provider value={articleValue}>
        {children}
      </ArticleContext.Provider>
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const useArticleContext = () => {
  return useContext(ArticleContext);
};
