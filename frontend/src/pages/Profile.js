import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  let navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("auth");

    axios
      .get(process.env.REACT_APP_API_URL + "/verify/jwt", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        console.log("Login pass");
      })
      .catch((e) => {
        navigate("/");
      });

  }, [navigate]);
  return <div>Profile</div>;
}
