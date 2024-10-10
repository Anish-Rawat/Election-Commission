import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Splash from "./modules/splash/index";
import { Box } from "@mui/material";

const RootComponent = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const userInfoString = localStorage.getItem("userInfo");
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
    const token = userInfo?.token;

    if (token) {
      setShowSplash(false);
    } else {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%", 
        width: "100vw", 
        margin: 0, 
        padding: 0, 
        overflow: "hidden",
      }}
    >
      {showSplash ? <Splash /> : <App />}
    </Box>
  );
};

createRoot(document.getElementById("root")!).render(<RootComponent />);
