import { useTheme } from "@geist-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

export const Loading = () => {
  const theme = useTheme();
  return (
    <FontAwesomeIcon
      style={{ color: theme.palette.successLight }}
      icon="circle-notch"
      spin
    />
  );
};

export const Error = () => {
  const theme = useTheme();
  return (
    <FontAwesomeIcon
      style={{ color: theme.palette.error }}
      icon="exclamation-triangle"
    />
  );
};

export const usdSymbol = "$";

export const GeistTheme = {
  palette: {
    secondary: "#36393f",
    successLight: "#1cac34",
  },
};
