import {
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Button,
  Box,
  Select,
} from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";
import { BiCustomize } from "react-icons/bi";
import { useTranslation } from "next-i18next";
import { FaSistrix } from "react-icons/fa";
import { useFormik } from "formik";
import React, { useState } from "react";
import ISeachParams from "@/@types/SearchParams";

interface FormSearchProps {
  onFilter: (values: any) => void;
}

function FormSearch({ onFilter }: FormSearchProps) {
  const { t } = useTranslation();

  const [filterFull, setFilterFull] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      status: "",
      species: "",
      type: "",
      gender: "",
    },
    onSubmit: async (values: ISeachParams) => {
      console.log(values);
      onFilter(values);
    },
  });

  const handleClean = () => {
    formik.resetForm();
  };

  return (
    <Stack backgroundColor={"blackAlpha.200"} spacing="24px" padding={"1em"}>
      <Stack>
        <HStack display={"flex"} justifyContent={"space-between"}>
          <HStack display={"flex"}>
            <FaFilter />
            <Text fontWeight="bold" fontSize="xl">
              {t("formSearch.title")}
            </Text>
          </HStack>
          <Button
            mt={8}
            leftIcon={<BiCustomize />}
            onClick={() => {
              setFilterFull(!filterFull);
              handleClean();
            }}
          >
            {filterFull ? t("formSearch.button4") : t("formSearch.button3")}
          </Button>
        </HStack>
        <Stack mb={3} />
        <HStack display={"flex"}>
          <FormControl>
            <FormLabel>{t("formSearch.label")}</FormLabel>
            <Input
              name="name"
              variant="filled"
              placeholder={`${t("formSearch.placeholderName")}`}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormControl>
        </HStack>
        {filterFull && <Stack mb={3} h={5} width={12} />}
        {filterFull && <FormFilter />}
        <Button mt={8} leftIcon={<FaSistrix />} onClick={formik.submitForm}>
          {`${t("formSearch.button")}`}
        </Button>
      </Stack>
    </Stack>
  );

  function FormFilter() {
    return (
      <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
        <Box flex="1" mr={{ base: "0", md: "4" }}>
          <FormControl>
            <Select
              variant="filled"
              placeholder={`${t("formSearch.placeholderStatus")}`}
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="alive">{`${t("formSearch.status.alive")}`}</option>
              <option value="dead">{`${t("formSearch.status.dead")}`}</option>
              <option value="unknown">{`${t(
                "formSearch.status.unknown"
              )}`}</option>
            </Select>
          </FormControl>
        </Box>
        <Box flex="1" mr={{ base: "0", md: "4" }}>
          <FormControl>
            <Input
              placeholder={`${t("formSearch.placeholderSpecies")}`}
              name="species"
              value={formik.values.species}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant="filled"
            />
          </FormControl>
        </Box>
        <Box flex="1" mr={{ base: "0", md: "4" }}>
          <FormControl>
            <Input
              placeholder={`${t("formSearch.placeholderSpecies")}`}
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant="filled"
            />
          </FormControl>
        </Box>
        <Box flex="1">
          <FormControl>
            <Select
              variant="filled"
              placeholder={`${t("formSearch.placeholderGender")}`}
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="female">{`${t(
                "formSearch.gender.female"
              )}`}</option>
              <option value="male">{`${t("formSearch.gender.male")}`}</option>
              <option value="genderless">{`${t(
                "formSearch.gender.genderless"
              )}`}</option>
              <option value="unknown">{`${t(
                "formSearch.gender.unknown"
              )}`}</option>
            </Select>
          </FormControl>
        </Box>
      </Box>
    );
  }
}

export default FormSearch;
