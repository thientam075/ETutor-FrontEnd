import '../styles/globals.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {useEffect} from 'react';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    import("bootstrap/dist/css/bootstrap.css");
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
