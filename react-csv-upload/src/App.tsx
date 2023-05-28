import React, { Component } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import { ThemeProvider } from "@material-ui/styles";

import FileInput from "./FileInput";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

interface AppProps {}
interface AppState {}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly"
            }}
          >
            <CssBaseline />
            <FileInput />
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
