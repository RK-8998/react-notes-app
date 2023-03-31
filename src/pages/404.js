import React from "react";
import "../App.css";
import notFound from "../assets/img/notfound.jpg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <img alt="not found" src={notFound} width={500} height={500} />
      <br />

      <h1>404: Page Not Found</h1>
      <Button onClick={() => navigate("/")}>BACK</Button>
    </div>
  );
};

export default NotFoundPage;
