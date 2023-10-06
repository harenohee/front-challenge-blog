import { RecoilRoot } from "recoil";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
