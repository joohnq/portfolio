import { Html, Head, Main, NextScript } from "next/document";
import { HtmlStyle } from "@/styles/styles.css";

export default function Document() {
  return (
    <Html lang="pt-br" className={HtmlStyle}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
