import {
  HStack,
  Stack,
  Image,
  VStack,
  Box,
  FormControl,
  Input,
  Select,
  Text,
  IconButton,
} from "@chakra-ui/react";
import ICharacter from "@/@types/Characters";
import { t } from "i18next";
import { useState } from "react";
import { addFavorite, isFavorite } from "@/repository/Character";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface DetailsCharacterCoponentProps {
  character: ICharacter;
}

export default function DetailsCharacterCoponent(
  props: DetailsCharacterCoponentProps
) {
  const { character } = props;
  const [favorite, setFavorite] = useState(isFavorite(character));

  const handleSetFavorite = () => {
    addFavorite(character);
    setFavorite(!favorite);
  };

  return (
    <Stack backgroundColor={"blackAlpha.200"} spacing="24px" padding={"1em"}>
      <HStack>
        <VStack w={"300px"}>
          <Image
            borderRadius="full"
            boxSize="150px"
            src={character.image}
            alt={character.name}
          />
        </VStack>
        <Box
          display="flex"
          w={"full"}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <Box
            width={{ base: "50%", md: "25%" }}
            mb={{ base: "1rem", md: "0" }}
          >
            <FormControl>
              <Text fontSize="2xl" fontWeight="bold">
                Nome
              </Text>
              <Stack h={5} />
              <Text fontSize="xl">{character.name}</Text>
              <Box h={5} />
            </FormControl>
          </Box>
          <Box
            width={{ base: "50%", md: "25%" }}
            mb={{ base: "1rem", md: "0" }}
          >
            <FormControl>
              <Text fontSize="2xl" fontWeight="bold">
                Species
              </Text>
              <Stack h={5} />
              <Text fontSize="xl">{character.species}</Text>
            </FormControl>
          </Box>
          <Box
            width={{ base: "50%", md: "25%" }}
            mb={{ base: "1rem", md: "0" }}
          >
            <FormControl>
              <Text fontSize="2xl" fontWeight="bold">
                Gender
              </Text>
              <Stack h={5} />
              <Text fontSize="xl">{character.gender}</Text>
            </FormControl>
          </Box>
          <Stack h={5} />
          <Box
            width={{ base: "50%", md: "25%" }}
            mb={{ base: "1rem", md: "0" }}
          >
            <FormControl>
              <Text fontSize="2xl" fontWeight="bold">
                Origin
              </Text>
              <Stack h={5} />
              <Text fontSize="xl">{character.origin.name}</Text>
            </FormControl>
          </Box>
        </Box>
        <Box>
          <IconButton
            aria-label="Scroll Right"
            icon={favorite ? <MdFavorite /> : <MdFavoriteBorder />}
            onClick={() => handleSetFavorite()}
          />
        </Box>
      </HStack>
    </Stack>
  );
}
