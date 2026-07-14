import { createTheme } from "@mui/material/styles";
import { purple, green } from "@mui/material/colors";

// A theme with custom primary and secondary color.
const theme = createTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  }
});

export default theme;
