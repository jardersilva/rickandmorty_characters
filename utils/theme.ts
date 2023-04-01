import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  colors: {
    brand: {
      900: "#1a202c",
      800: "#2d3748",
      700: "#4a5568",
      600: "#718096",
      500: "#a0aec0",
      400: "#cbd5e0",
      300: "#e2e8f0",
      200: "#edf2f7",
      100: "#f7fafc",
    },
    gray: {
      900: "#1a202c",
      800: "#2d3748",
      700: "#4a5568",
      600: "#718096",
      500: "#a0aec0",
      400: "#cbd5e0",
      300: "#e2e8f0",
      200: "#edf2f7",
      100: "#f7fafc",
    },
    light: {
      input: "gray.600",
    },
    dark: {
      input: "whiteAlpha.900",
    },
  },
});

export default theme;
