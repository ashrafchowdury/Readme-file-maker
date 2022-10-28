import "../styles/globals.css";
import DataContextProvider from "../utils/hooks/useData";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DataContextProvider>
        <Component {...pageProps} />
      </DataContextProvider>
    </>
  );
}

export default MyApp;
