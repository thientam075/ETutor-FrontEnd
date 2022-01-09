import '../styles/globals.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useEffect } from 'react';
import { AppProvider } from '../context';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    import("bootstrap/dist/css/bootstrap.css");
  }, []);

  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
