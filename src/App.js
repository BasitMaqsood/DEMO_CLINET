import React from "react";
import logo from "./logo.svg";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import { green } from "@material-ui/core/colors";

import Home from "./View/Home";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e75b6d"
    },
    secondary: {
      main: "#ffffff"
    }
  },
  typography: {
    fontFamily: ["Cephalonia", "Montserrat Black"].join(",")
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
