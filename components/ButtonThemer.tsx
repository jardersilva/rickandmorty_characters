import { IconButton, Stack } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";

const ButtonThemer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === "light" ? <MoonIcon /> : <SunIcon />;
  return (
    <Stack>
      <IconButton aria-label="Toggle Mode" onClick={toggleColorMode}>
        {icon}
      </IconButton>
    </Stack>
  );
};

export default ButtonThemer;
