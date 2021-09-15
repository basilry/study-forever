import Footer from "../src/components/Footer"
import Top from "../src/components/Top"
import "semantic-ui-css/semantic.min.css";
import '../styles/globals.css'

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
