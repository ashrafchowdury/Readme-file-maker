import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/**************** Font CDN **********/}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        {/** Body **/}
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/** Logo **/}
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />

        <title>Create Readme.md file for your Projects</title>
        <meta
          name="description"
          content="Hi, My name is Ashraf Chowdury and I am a Front-End Developer. I like to build excellent Web applications using Javascript and React.js. Currently, I am focused on empowering myself by learning some new technologies that will help me to better myself in my future journey."
        />

        {/**FavIcon */}

        <link rel="apple-touch-icon" href="assets/icon-96x96.png" />
        <link
          rel="shortcut icon"
          href="assets/icon-96x96.png"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
