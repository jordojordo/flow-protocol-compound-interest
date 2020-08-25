import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import InterestProvider from "./context/interest-context";
import { Splash } from "./containers/Splash";
import Calculator from "./containers/Calculator";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#EEC353", contrastText: "#212121" },
    secondary: { main: "#2d2d2d" },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <InterestProvider>
          <Splash />
          <Calculator />
        </InterestProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
