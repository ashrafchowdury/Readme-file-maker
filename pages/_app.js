import "../styles/globals.css";
import DataContextProvider from "../context/data_context";

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
