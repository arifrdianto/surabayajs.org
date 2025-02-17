import * as React from "react";

import { Image, Text, VStack, useColorMode } from "@chakra-ui/react";

import type { Sponsor } from "@/types";
import type { StackProps } from "@chakra-ui/react";

interface SponsorCardProps extends StackProps {
  sponsor: Sponsor;
}

export const SponsorCard: React.FC<SponsorCardProps> = ({
  sponsor,
  ...props
}) => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  return (
    <VStack
      as="a"
      borderRadius="lg"
      boxShadow="base"
      _hover={{
        bgColor: [null, isLight ? "blackAlpha.50" : "whiteAlpha.50"],
        boxShadow: [null, "xl"],
        transform: [null, "rotate(1deg) scale(1.05) translateY(-8px)"],
      }}
      href={sponsor.url}
      justify="center"
      p={[4, 8]}
      spacing={4}
      target="_blank"
      textAlign="center"
      transition="all 250ms"
      {...props}
    >
      <Image
        borderRadius="md"
        boxSize="full"
        maxH={["96px", "128px"]}
        maxW={["96px", "128px"]}
        src={sponsor.logo.url}
      />
      <Text fontSize="sm" fontWeight="bold" letterSpacing="tight">
        {sponsor.name}
      </Text>
    </VStack>
  );
};
