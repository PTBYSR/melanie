import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import '../components/product/ProductView/Product.css'


function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
