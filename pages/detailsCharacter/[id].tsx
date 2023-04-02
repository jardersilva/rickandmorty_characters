/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { useTranslation } from "next-i18next";
import { Stack, Box, useToast, Link, IconButton } from "@chakra-ui/react";
import { Content } from "@/components/Content";
import Header from "@/components/Header";
import { getDetailsCharacterAPI } from "@/repository/Character";
import ICharacter from "@/@types/Characters";
import { useRouter } from "next/router";
import DetailsCharacterCoponent from "@/components/DetailsCharacterComponent";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const inter = Inter({ subsets: ["latin"] });

export default function DetailsCharacter() {
  const [character, setCharacter] = useState<ICharacter>();
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const toast = useToast();
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    function getCharacter() {
      console.log(query);
      getDetailsCharacterAPI(query.id!)
        .then((res) => {
          setCharacter(res);
          setIsLoading(false);
        })
        .catch((err: any) => {
          toast({
            title: `${t("listCharacters.erros.nofound")}`,
            description: err.message,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    }
    query.id && getCharacter();
  }, [router]);

  return (
    <>
      <Content>
        <Header />
        <Stack h={3} />
        <Link href={`/`}>
          <IconButton aria-label="Scroll Right" icon={<ChevronLeftIcon />} />
        </Link>
        {!isLoading && <DetailsCharacterCoponent character={character!} />}
      </Content>
    </>
  );
}
