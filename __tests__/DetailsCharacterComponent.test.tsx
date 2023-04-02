import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import DetailsCharacterComponent from "@/components/DetailsCharacterComponent";

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

describe("DetailsCharacterComponent", () => {
  it("renders character details correctly", () => {
    render(<DetailsCharacterComponent character={character} />);
    expect(screen.getByText("Nome")).toBeInTheDocument();
    expect(screen.getByText("Species")).toBeInTheDocument();
    expect(screen.getByText("Gender")).toBeInTheDocument();
    expect(screen.getByText("Origin")).toBeInTheDocument();
    expect(screen.getByText(character.name)).toBeInTheDocument();
    expect(screen.getByText(character.species)).toBeInTheDocument();
    expect(screen.getByText(character.gender)).toBeInTheDocument();
    expect(screen.getByText(character.origin.name)).toBeInTheDocument();
  });
});
