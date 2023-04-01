/* eslint-disable react-hooks/exhaustive-deps */
import { Inter } from "next/font/google";
import { useTranslation } from "next-i18next";
import { Stack, Box, useToast } from "@chakra-ui/react";
import { Content } from "@/components/Content";
import Header from "@/components/Header";
import FormSearch from "@/components/FormSearch";
import ListCharacters from "@/components/ListCharacters";
import { useCallback, useEffect, useState } from "react";
import { getCharacter } from "@/repository/Character";
import ICharacter from "@/@types/Characters";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const toast = useToast();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchCharacters = async (page?: number) => {
    let query: string = ``;
    if (page) query += `page=${page}&`;
    if (name) query += `name=${name}&`;
    if (status) query += `status=${status}&`;
    if (species) query += `species=${species}&`;
    if (type) query += `type=${type}&`;
    if (gender) query += `gender=${gender}&`;
    if (query) query = `?${query}`;
    console.log(query);
    try {
      const res = await getCharacter({ query });
      if (page! >= 1) {
        const newList = characters.concat(res.results);
        console.log(newList);
        setCharacters(newList);
      } else {
        setIsLoading(true);
        setCharacters(res.results);
      }
      setIsLoading(false);
    } catch (err: any) {
      toast({
        title: `${t("listCharacters.erros.nofound")}`,
        description: err.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    //formik.resetForm();
  };

  const handleFilter = (e: any) => {
    console.log(e);
    setIsLoading(true);
    setCharacters([]);
    setName(e.name);
    setStatus(e.status);
    setSpecies(e.species);
    setType(e.type);
    setGender(e.gender);
  };

  useEffect(() => {
    async function fetchData() {
      await fetchCharacters();
    }
    fetchData();
  }, [name, status, species, type, gender]);

  return (
    <>
      <Content>
        <Header />
        <FormSearch
          onFilter={(e: any) => {
            handleFilter(e);
          }}
        />
        <Stack h={3} />
        {isLoading || characters.length === 0 ? null : (
          <ListCharacters
            characters={characters}
            fetchCharacters={(page) => fetchCharacters(page)}
          />
        )}
      </Content>
    </>
  );
}
