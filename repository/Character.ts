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

export async function getCharacterAPI({ query }: IProps): Promise<IReturnGet> {
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

export async function getDetailsCharacterAPI(id?: any): Promise<ICharacter> {
  return axiosInstance
    .get(`character/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function isFavorite(character: ICharacter): boolean {
  const favorites = getFavorites();
  return favorites.some((favorite) => favorite.id === character.id);
}

export function getFavorites(): ICharacter[] {
  const favorites = localStorage.getItem("1234@favorites");
  return favorites ? JSON.parse(favorites) : [];
}

export function addFavorite(character: ICharacter): void {
  const favorites = getFavorites();
  if (!isFavorite(character)) {
    favorites.push(character);
    localStorage.setItem("1234@favorites", JSON.stringify(favorites));
  } else {
    removeFavorite(character);
  }
}

export function removeFavorite(character: ICharacter): void {
  const favorites = getFavorites();
  const filteredFavorites = favorites.filter(
    (favorite) => favorite.id !== character.id
  );
  localStorage.setItem("1234@favorites", JSON.stringify(filteredFavorites));
}
