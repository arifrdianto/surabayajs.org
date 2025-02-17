import * as React from "react";

import { FaMoon, FaSun } from "react-icons/fa";
import { Icon, IconButton, Tooltip, useColorMode } from "@chakra-ui/react";

export const ColorModeButton: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const ModeIcon = colorMode === "dark" ? FaSun : FaMoon;

  return (
    <Tooltip hasArrow label={`Toggle ${colorMode} mode (shift+d) 🌓`}>
      <IconButton
        aria-label={`Toggle ${colorMode} mode 🌓`}
        icon={<Icon as={ModeIcon} />}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Tooltip>
  );
};
