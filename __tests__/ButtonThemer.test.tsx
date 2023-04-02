import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import ButtonThemer from "@/components/ButtonThemer";

describe("ButtonThemer", () => {
  it("should toggle color mode when clicked", () => {
    const { getByRole } = render(<ButtonThemer />);
    const button = getByRole("button");

    fireEvent.click(button);

    expect(button).toHaveAttribute("aria-label", "Toggle Mode");
  });
});
