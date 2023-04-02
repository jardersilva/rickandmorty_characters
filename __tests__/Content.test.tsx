import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Content } from "@/components/Content";

describe("Content", () => {
  it("should render children components", () => {
    const { getByTestId } = render(
      <Content>
        <div data-testid="child-1" />
        <div data-testid="child-2" />
      </Content>
    );

    expect(getByTestId("child-1")).toBeInTheDocument();
    expect(getByTestId("child-2")).toBeInTheDocument();
  });
});
