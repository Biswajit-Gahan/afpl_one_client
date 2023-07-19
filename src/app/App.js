import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import LoadingScreen from "../components/loding.screen/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(() => (true));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading((prevData) => (prevData = false));
    }, 7000);
  }, [])

  return isLoading
    ? (
      <LoadingScreen />
    )
    : (
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
};

export default App;