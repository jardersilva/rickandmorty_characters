import { Stack, Text, HStack, IconButton, useToast } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useCallback, useEffect, useRef, useState } from "react";
import CardCharacter from "./CardCharacter";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ICharacter from "@/@types/Characters";

interface ListCharactersProps {
  characters: ICharacter[];
  fetchCharacters: (page: number) => void;
}

export default function ListCharacters({
  characters,
  fetchCharacters,
}: ListCharactersProps) {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleScrollLeft();
  }, [characters]);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200;
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200;
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (
      container &&
      container.scrollLeft + container.offsetWidth >= container.scrollWidth
    ) {
      setPage(page + 1);
      fetchCharacters(page + 1);
    }
  };

  return (
    <Stack
      mt={10}
      backgroundColor={"blackAlpha.200"}
      spacing="24px"
      padding={"1em"}
    >
      <HStack>
        <Text fontWeight="bold" fontSize="xl">
          {t("listCharacters.title")}
        </Text>
      </HStack>
      <HStack>
        <IconButton
          aria-label="Scroll Left"
          icon={<ChevronLeftIcon />}
          onClick={handleScrollLeft}
          isDisabled={scrollLeft === 0}
        />
        <HStack
          ref={containerRef}
          overflowX="hidden"
          gap={2}
          onScroll={handleScroll}
        >
          {characters.map((c: ICharacter) => (
            // eslint-disable-next-line react/jsx-key
            <Stack w={"30em"} h={"18em"}>
              <CardCharacter key={c.id} character={c} />
            </Stack>
          ))}
        </HStack>
        <IconButton
          aria-label="Scroll Right"
          icon={<ChevronRightIcon />}
          onClick={handleScrollRight}
          isDisabled={
            containerRef.current?.scrollLeft! +
              containerRef.current?.offsetWidth! >=
            containerRef.current?.scrollWidth!
          }
        />
      </HStack>
    </Stack>
  );
}
