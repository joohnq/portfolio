import { Html, Head, Main, NextScript } from "next/document";
import { customScrollbar } from "@/styles/styles.css";

export default function Document() {
  return (
    <Html lang="pt-br" className={customScrollbar}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
