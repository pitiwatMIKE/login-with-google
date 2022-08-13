import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Home() {
  let [searchParams] = useSearchParams();
  let navigate = useNavigate();
  
  useEffect(() => {
    let token = searchParams.get("token");
    if (token) {
      localStorage.setItem("auth", token);
      navigate("/profile");
    }
  }, [searchParams]);

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
