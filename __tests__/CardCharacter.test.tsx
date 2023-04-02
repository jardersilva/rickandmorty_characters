import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import CardCharacter from "@/components/CardCharacter";
import { isFavorite } from "@/repository/Character";

describe("CardCharacter", () => {
  const character = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  };

  beforeEach(() => {
    // mock isFavorite to always return false
    jest
      .spyOn(require("@/repository/Character"), "isFavorite")
      .mockReturnValue(false);
  });

  afterEach(() => {
    // restore isFavorite
    jest.restoreAllMocks();
  });

  it("should display the character's species and origin", () => {
    const { getByText } = render(<CardCharacter character={character} />);
    const species = getByText(character.species);
    const origin = getByText(character.origin.name);

    expect(species).toBeInTheDocument();
    expect(origin).toBeInTheDocument();
  });
});
