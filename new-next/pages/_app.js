import Footer from "../src/components/Footer"
import Top from "../src/components/Top"
import "semantic-ui-css/semantic.min.css";
import '../styles/globals.css'
import { Divider } from "semantic-ui-react";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}


export default MyApp
