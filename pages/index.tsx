/* eslint-disable react-hooks/exhaustive-deps */
import { Inter } from "next/font/google";
import { useTranslation } from "next-i18next";
import { Stack, Box, useToast } from "@chakra-ui/react";
import { Content } from "@/components/Content";
import Header from "@/components/Header";
import FormSearch from "@/components/FormSearch";
import ListCharacters from "@/components/ListCharacters";
import { useCallback, useEffect, useState } from "react";
import { getCharacterAPI } from "@/repository/Character";
import ICharacter from "@/@types/Characters";
import ISeachParams from "@/@types/SearchParams";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paramsFilter, setParamsFilter] = useState<ISeachParams>({});
  const { t } = useTranslation();
  const toast = useToast();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchCharacters = async () => {
    let query: string = ``;
    if (paramsFilter.page) query += `page=${paramsFilter.page}&`;
    if (paramsFilter.name) query += `name=${paramsFilter.name}&`;
    if (paramsFilter.status) query += `status=${paramsFilter.status}&`;
    if (paramsFilter.species) query += `species=${paramsFilter.species}&`;
    if (paramsFilter.type) query += `type=${paramsFilter.type}&`;
    if (paramsFilter.gender) query += `gender=${paramsFilter.gender}&`;
    if (query) query = `?${query}`;
    console.log(query);
    try {
      const res = await getCharacterAPI({ query });
      if (paramsFilter.page! >= 1) {
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

  const handleFilter = (e: ISeachParams) => {
    console.log(e);
    setIsLoading(true);
    setCharacters([]);
    setParamsFilter({
      ...e,
      page: 1,
    });
  };

  useEffect(() => {
    async function fetchData() {
      await fetchCharacters();
    }
    fetchData();
  }, [paramsFilter]);

  return (
    <>
      <Content>
        <Header />
        <FormSearch
          onFilter={(e: ISeachParams) => {
            handleFilter(e);
          }}
        />
        <Stack h={3} />
        {isLoading || characters.length === 0 ? null : (
          <ListCharacters
            characters={characters}
            fetchCharacters={(page) =>
              setParamsFilter({ ...paramsFilter, page })
            }
          />
        )}
      </Content>
    </>
  );
}
