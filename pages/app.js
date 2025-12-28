import * as React from "react";
import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { faIR } from "@mui/material/locale";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const theme = createTheme(
  {
    direction: "rtl",
    palette: {
      background: {
        default: "#FEF597",
        paper: "#1e1e1e",
      },
      text: {
        primary: "#1a1a1a",
      },
    },
    typography: {
      fontFamily: "IRANSans, Vazirmatn, Arial",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#FEF597",
          },
        },
      },
    },
  },
  faIR
);

export default function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
