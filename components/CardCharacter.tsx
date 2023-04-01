import ICharacter from "@/@types/Characters";
import { Image } from "@chakra-ui/react";
import { Stack, HStack, Text, VStack } from "@chakra-ui/layout";

interface CardCharactersProps {
  character: ICharacter;
}

export default function CardCharacter({ character }: CardCharactersProps) {
  return (
    <Stack
      w={"18em"}
      h={"18em"}
      backgroundColor={"blackAlpha.300"}
      padding={"1em"}
    >
      <VStack alignItems={"center"} justifyContent={"center"}>
        <Image
          borderRadius="full"
          boxSize="100px"
          src={character.image}
          alt={character.name}
        />
        <Text fontWeight="bold" fontSize="xl">
          {character.name}
        </Text>
        <Text fontSize="md" textAlign={"center"}>
          {character.species}
        </Text>
        <Text fontSize="md" textAlign={"center"}>
          {character.origin.name}
        </Text>
      </VStack>
    </Stack>
  );
}
