import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import i18n from "../i18n";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
  };

  function languageSelect(): string {
    if (selectedLanguage == "en") {
      return "🇺🇸";
    } else if (selectedLanguage == "pt") {
      return "🇧🇷";
    } else if (selectedLanguage == "es") {
      return "🇪🇸";
    } else {
      return "🇧🇷";
    }
  }

  return (
    <Stack>
      <Menu>
        <MenuButton as={IconButton}>{languageSelect()}</MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleLanguageChange("en")}>
            🇺🇸 English
          </MenuItem>
          <MenuItem onClick={() => handleLanguageChange("pt")}>
            🇧🇷 Português
          </MenuItem>
          <MenuItem onClick={() => handleLanguageChange("es")}>
            🇪🇸 Español
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default LanguageSelector;
