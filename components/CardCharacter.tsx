import ICharacter from "@/@types/Characters";
import { IconButton, Image, Link } from "@chakra-ui/react";
import { Stack, HStack, Text, VStack } from "@chakra-ui/layout";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { addFavorite, isFavorite } from "@/repository/Character";
import { useEffect, useState } from "react";

interface CardCharactersProps {
  character: ICharacter;
}

export default function CardCharacter({ character }: CardCharactersProps) {
  const [favorite, setFavorite] = useState(isFavorite(character));

  const handleSetFavorite = () => {
    addFavorite(character);
    setFavorite(!favorite);
  };

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
        <Text
          noOfLines={1}
          textAlign={"center"}
          fontWeight="bold"
          fontSize="xl"
        >
          {character.name}
        </Text>
        <Text noOfLines={1} textAlign={"center"} fontSize="md">
          {character.species}
        </Text>
        <Text noOfLines={1} fontSize="md" textAlign={"center"}>
          {character.origin.name}
        </Text>
      </VStack>
      <HStack paddingLeft={3} paddingRight={3} justifyContent={"space-between"}>
        <IconButton
          aria-label="Scroll Right"
          icon={favorite ? <MdFavorite /> : <MdFavoriteBorder />}
          onClick={() => handleSetFavorite()}
        />
        <Link href={`/detailsCharacter/${character.id}`}>
          <IconButton aria-label="Scroll Right" icon={<ChevronRightIcon />} />
        </Link>
      </HStack>
    </Stack>
  );
}
