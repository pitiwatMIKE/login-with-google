import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, removeToken } from "../utils/handlerCookie";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    let token = getCookie("token");

    if (token) {
      localStorage.setItem("auth", token);
      removeToken("token");
      navigate("/profile");
    }
  }, [navigate]);

  const googleAuth = () => {
    window.open(
      process.env.REACT_APP_API_URL + "/auth/google/callback",
      "_self"
    );
  };

  return (
    <div>
      <h1>Home</h1>
      <button type="button" onClick={googleAuth}>
        Login with google
      </button>
    </div>
  );
}
