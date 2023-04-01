import "@/styles/globals.css";
import { appWithTranslation, useTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { initReactI18next } from "react-i18next";
import theme from "@/utils/theme";
import i18n from "../i18n";

initReactI18next.init(i18n);

function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (t("main.aplicationName") !== "main.aplicationName")
      setIsInitialized(true);
  }, [t]);

  if (!isInitialized) return <div></div>;

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(App);
