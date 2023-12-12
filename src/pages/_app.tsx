import LoaderComponent from "@/components/Loader/LoaderComponent";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 2000);

  return isLoaded ? <Component {...pageProps} /> : <LoaderComponent />;
}
