import { HStack, Text } from "@chakra-ui/react";
import { Image, Box } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useColorMode } from "@chakra-ui/color-mode";
import ButtonThemer from "./ButtonThemer";
import LanguageSelector from "./LanguageSelector";

function Header() {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <HStack
      display={"flex"}
      w={"full"}
      paddingBottom={"2em"}
      justifyContent={"space-between"}
    >
      <Box flex={1} display={"flex"} alignItems={"center"}>
        <Image
          w={"55px"}
          src={
            colorMode === "light"
              ? "/assets/logo-dark.png"
              : "/assets/logo-light.png"
          }
          alt="Logo"
        />
        <HStack ml={2} />
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            {t("main.aplicationName")}
          </Text>
          <Text fontSize="sm">{t("main.aplicationName2")}</Text>
        </Box>
      </Box>
      <Box
        flex={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"end"}
      >
        <ButtonThemer />
        <HStack ml={5} />
        <LanguageSelector />
      </Box>
    </HStack>
  );
}

export default Header;
