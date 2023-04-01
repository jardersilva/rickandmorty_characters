import ICharacter from "@/@types/Characters";
import axiosInstance from "@/utils/axios";

interface IProps {
  query: string;
}

interface IReturnGet {
  next: string;
  prev: string;
  results: ICharacter[];
}

export async function getCharacter({ query }: IProps): Promise<IReturnGet> {
  return axiosInstance
    .get(`character/${query}`)
    .then((response) => {
      return {
        next: response.data.info.next,
        prev: response.data.info.prev,
        results: response.data.results,
      };
    })
    .catch((error) => {
      throw error;
    });
}
