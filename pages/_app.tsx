// import "../styles/globals.css";
import { AppProps } from "next/app";
// import "antd/dist/antd.css";

import { Global } from "@emotion/react";

import { RecoilRoot } from "recoil";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../styles/globalStyles";
import MainPage from "../src/components/units/main/Main.container";
function MyApp({ Component, pageProps }: AppProps) {
  const qqq = 3;

  return (
    <div>
      <RecoilRoot>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
