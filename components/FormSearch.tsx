import {
  Stack,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  HStack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";
import { BiCustomize } from "react-icons/bi";
import { useTranslation } from "next-i18next";
import { FaSistrix } from "react-icons/fa";
import { useFormik } from "formik";
import React, { useState } from "react";

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
    onSubmit: async (values) => {
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
        <Button mt={8} leftIcon={<FaSistrix />} onClick={formik.submitForm}>
          {`${t("formSearch.button")}`}
        </Button>
      </Stack>
    </Stack>
  );
}

export default FormSearch;
