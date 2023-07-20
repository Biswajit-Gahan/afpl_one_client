import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import LoadingScreen from "../components/loding.screen/LoadingScreen";
import { ThemeProvider } from "styled-components";
import constants from "../utils/constants";
import NavbarMobile from "../components/navbar.mobile/NavbarMobile";

const App = () => {
  const [isLoading, setIsLoading] = useState(() => (false));

  const [darkTheme, setDarkTheme] = useState(() => (!true));

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
      <ThemeProvider theme={darkTheme ? constants.darkTheme : constants.lightTheme}>
        <BrowserRouter>
          <Navbar />
          {/* <NavbarMobile /> */}
        </BrowserRouter>
      </ThemeProvider>
    )
};

export default App;