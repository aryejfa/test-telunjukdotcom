import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import NextNProgress from "nextjs-progressbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import MyContextProvider from "../src/contexts/Context";
import "../styles/globals.css";
import "../styles/tailwind.css";

library.add(fab);

function MyApp({ Component, pageProps }) {
  const progress = new ProgressBar({
    size: 2,
    color: "#f76b46",
    className: "bar-of-progress",
    delay: 100,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);

  return (
    <MyContextProvider>
      <NextNProgress
        color="#ff5c31"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </MyContextProvider>
  );
}

export default MyApp;
