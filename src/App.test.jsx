import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  it("renders headline", () => {
    render(
      <MemoryRouter>
        <App title="React" />
      </MemoryRouter>
    );

    screen.debug();

    // check if App components renders headline
  });
});
