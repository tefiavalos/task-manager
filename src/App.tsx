import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Navigation } from "./navigation/Navigation";


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
