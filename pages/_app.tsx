import "../styles/main.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircle,
  faCircleNotch,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

library.add(faCircle, faCircleNotch, faExclamationTriangle);

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return <Component {...pageProps} />;
}

export default MyApp;
