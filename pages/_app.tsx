import React from "react";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { CartContextProvider } from "../src/context/CartContext";
import { Container } from "../src/styles/pages/app";
import { defaultTheme } from "../src/styles/theme/default";
import type { AppProps } from "next/app";
import { GlobalStyles } from "../src/styles/global";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CartContextProvider>
        <Container>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </CartContextProvider>
    </ThemeProvider>
  );
}
