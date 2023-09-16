import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar";
import { MemoryRouter } from "react-router-dom";

describe("NavBar component", () => {
  it("Contains correct amount of entries", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const navContents = screen.getAllByRole("listitem");
    expect(navContents.length).toBe(3);
  });
});
