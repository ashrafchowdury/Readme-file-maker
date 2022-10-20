import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
      
        {/**************** Font Awesome CDN **********/}
        <script
          src="https://kit.fontawesome.com/3e892a7f39.js"
          crossorigin="anonymous"
        ></script>

        <title>Create Readme.md file for your Projects</title>
        <meta
          name="description"
          content="Hi, My name is Ashraf Chowdury and I am a Front-End Developer. I like to build excellent Web applications using Javascript and React.js. Currently, I am focused on empowering myself by learning some new technologies that will help me to better myself in my future journey."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
